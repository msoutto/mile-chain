import { ethers } from "ethers";
import { MileChainPort } from "../ports/MileChainPort";
import { TokenSymbol } from "../domain/Token";

const CONTRACTS: Record<TokenSymbol, string> = {
  LATAM: import.meta.env.VITE_LATAM_CONTRACT_ADDRESS || "",
  SMILES: import.meta.env.VITE_SMILES_CONTRACT_ADDRESS || "",
  AZUL: import.meta.env.VITE_AZUL_CONTRACT_ADDRESS || "",
};

const ABI = [
  "function mint(address,uint256)",
  "function burn(address,uint256)",
  "function balanceOf(address) view returns (uint256)",
];

const { ethereum } = window;

const checkIfWalletIsConnected = () => {
  if (!ethereum) {
    console.log("Garanta que possua a Metamask instalada!");
    return;
  } else {
    console.log("Temos o objeto ethereum", ethereum);
  }
};

export const ethersAdapter: MileChainPort = {
  async getContract(symbol: TokenSymbol): Promise<ethers.Contract> {
    checkIfWalletIsConnected();
    const provider = new ethers.BrowserProvider(
      ethereum as ethers.Eip1193Provider
    );
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACTS[symbol], ABI, signer);
    return contract;
  },
  async mint(to: string, amount: number, symbol: TokenSymbol) {
    const contract = await this.getContract(symbol);
    const tx = await contract.mint(
      to,
      ethers.parseUnits(amount.toString(), 18)
    );
    await tx.wait();
    return tx.hash;
  },
  async burn(from: string, amount: number, symbol: TokenSymbol) {
    const contract = await this.getContract(symbol);
    const tx = await contract.burn(
      from,
      ethers.parseUnits(amount.toString(), 18)
    );
    await tx.wait();
    return tx.hash;
  },
  async balanceOf(addr: string, symbol: TokenSymbol) {
    const contract = await this.getContract(symbol);
    const result = await contract.balanceOf(addr);
    return ethers.formatUnits(result, 18);
  },
};
