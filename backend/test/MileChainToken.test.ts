import { ethers } from "hardhat";
import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

const TokenName = "MileChainToken";
const TokenSymbol = "MCT";

describe("MileChainToken", function () {
  async function deployTokenFixture() {
    const [owner, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MileChainToken");
    const token = await Token.deploy(TokenName, TokenSymbol);
    await token.waitForDeployment();
    return { token, owner, user };
  }

  it("should deploy with correct name and symbol", async function () {
    const { token } = await loadFixture(deployTokenFixture);
    expect(await token.name()).to.equal(TokenName);
    expect(await token.symbol()).to.equal(TokenSymbol);
  });

  it("Should set the right owner", async function () {
    const { token, owner } = await loadFixture(deployTokenFixture);
    expect(await token.owner()).to.equal(owner.address);
  });

  it("should mint and burn tokens correctly", async function () {
    const { token, user } = await loadFixture(deployTokenFixture);

    await token.mint(user.address, 1000);
    expect(await token.balanceOf(user.address)).to.equal(1000);

    await token.burn(user.address, 500);
    expect(await token.balanceOf(user.address)).to.equal(500);
  });
});
