import { ethersAdapter } from "../adapters/ethersAdapter";
import { TokenSymbol } from "../domain/Token";

export const mileChainUsecase = {
  async mint(to: string, amount: number, symbol: TokenSymbol) {
    return ethersAdapter.mint(to, amount, symbol);
  },
  async burn(from: string, amount: number, symbol: TokenSymbol) {
    return ethersAdapter.burn(from, amount, symbol);
  },
  async balanceOf(addr: string, symbol: TokenSymbol) {
    return ethersAdapter.balanceOf(addr, symbol);
  },
};
