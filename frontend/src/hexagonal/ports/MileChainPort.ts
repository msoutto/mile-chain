import { ethers } from "ethers";
import { TokenSymbol } from "../domain/Token";

export interface MileChainPort {
  mint(to: string, amount: number, symbol: string): Promise<string>;
  burn(from: string, amount: number, symbol: string): Promise<string>;
  balanceOf(addr: string, symbol: string): Promise<string>;
  getContract(symbol: TokenSymbol): Promise<ethers.Contract>;
}
