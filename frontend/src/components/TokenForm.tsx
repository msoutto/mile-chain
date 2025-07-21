import React, { useState } from "react";
import { mileChainUsecase } from "../hexagonal/usecases/mileChainUsecase";
import { TokenSymbol } from "../hexagonal/domain/Token";

const TokenForm = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [symbol, setSymbol] = useState<TokenSymbol>("LATAM");
  const [balance, setBalance] = useState("");

  const handleMint = async () => {
    await mileChainUsecase.mint(address, Number(amount), symbol);
  };

  const handleBurn = async () => {
    await mileChainUsecase.burn(address, Number(amount), symbol);
  };

  const handleBalance = async () => {
    const result = await mileChainUsecase.balanceOf(address, symbol);
    setBalance(result);
  };

  return (
    <div>
      <label>Endereço:</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} /><br />
      <label>Quantidade:</label>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
      <label>Token:</label>
      <select value={symbol} onChange={(e) => setSymbol(e.target.value as TokenSymbol)}>
        <option value="LATAM">LATAM</option>
        <option value="SMILES">SMILES</option>
        <option value="AZUL">AZUL</option>
      </select><br /><br />
      <button onClick={handleMint}>Mint</button>
      <button onClick={handleBurn}>Burn</button>
      <button onClick={handleBalance}>Ver Saldo</button>
      {balance && <p>Saldo: {balance}</p>}
    </div>
  );
};

export default TokenForm;