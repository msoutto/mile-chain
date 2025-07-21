# mile-chain

MileChain is an RWA protocol for managing miles and loyalty points as tokens. This way we give real ownership over these assets to the owners, where they don't need to get through any intermediary to transfer, sell, or buy them.

// ====================
// README.md
// ====================

# MileChain

Tokenização de milhas de companhias aéreas como Real World Assets (RWA), com suporte aos programas LATAM, SMILES e AZUL.

Projeto estruturado com arquitetura hexagonal (Ports and Adapters), permitindo migrar facilmente a lógica de blockchain do front-end para back-end futuramente.

## 🧱 Tecnologias

- Solidity (Hardhat)
- React + TypeScript
- ethers.js
- Arquitetura hexagonal (Domain, Ports, Adapters, Use Cases)
- Vitest + Hardhat para testes
- Deploy automatizado para testnet Sepolia

## 🚀 Funcionalidades

- `mint()` e `burn()` com controle de acesso (owner)
- `balanceOf()` para consulta de saldo
- Suporte a múltiplos tokens: LATAM, SMILES, AZUL
- Integração Web3 via ethers.js
- Código modular e desacoplado

## 📁 Estrutura Hexagonal

- `domain/`: tipos e contratos de dados
- `ports/`: interfaces que definem comunicação com blockchain
- `adapters/`: implementação com ethers.js
- `usecases/`: lógica de negócio
- `scripts/`: deploy automatizado dos contratos
- `test/`: testes unitários e de integração

## 📦 Instalação e Execução

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deployAllTokens.ts --network sepolia
cd frontend
npm install
npm run dev
```

## 🧪 Rodar os testes

```bash
npx hardhat test
cd frontend
npm run test
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key_here
```

**Importante**: Nunca envie `.env` para o GitHub. Está ignorado via `.gitignore`.

## 📜 Licença

MIT
