import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const Token = await ethers.getContractFactory("MileChainToken");

  const latam = await Token.deploy("LATAM Miles", "LATAM");
  await latam.waitForDeployment();
  console.log("LATAM deployed to:", await latam.getAddress());

  const smiles = await Token.deploy("SMILES Miles", "SMILES");
  await smiles.waitForDeployment();
  console.log("SMILES deployed to:", await smiles.getAddress());

  const azul = await Token.deploy("AZUL Miles", "AZUL");
  await azul.waitForDeployment();
  console.log("AZUL deployed to:", await azul.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});