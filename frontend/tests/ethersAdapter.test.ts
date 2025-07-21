import { ethers } from "ethers";
import { ethersAdapter } from "../src/hexagonal/adapters/ethersAdapter";
import { expect } from "chai";
import { vi, describe, it } from "vitest";

vi.mock("ethers", () => ({
  ethers: {
    Contract: vi.fn().mockImplementation(() => ({
      mint: vi.fn().mockResolvedValue({ wait: vi.fn(), hash: "0x123" }),
      burn: vi.fn().mockResolvedValue({ wait: vi.fn(), hash: "0x456" }),
      balanceOf: vi.fn().mockResolvedValue(ethers.parseUnits("1000", 18)),
    })),
    formatUnits: (v: any) => "1000",
  },
  BrowserProvider: vi.fn().mockImplementation(() => ({ getSigner: vi.fn() })),
}));

describe("ethersAdapter", () => {
  it("should mint tokens", async () => {
    const tx = await ethersAdapter.mint("0xabc", 100, "LATAM");
    expect(tx).to.equal("0x123");
  });
});
