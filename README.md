# LinkState

LinkState is a decentralized professional networking platform that combines on-chain identity, messaging, and professional experiences verification.

## Overview

LinkState reimagines professional networking for Web3 by providing a platform where users can:
- Create soulbound profile NFTs
- Connect their Web3 identities (ENS, Farcaster)
- Send paid messages to other professionals
- Build and verify their professional experiences on-chain

## Core Features

### 🆔 Profile NFTs
- Non-transferable (soulbound) ERC-721 tokens
- Represents your professional identity
- Customizable message pricing
- Integrated with ENS and Farcaster

### 💬 Paid Messaging
- Send messages to other professionals
- Custom pricing set by recipients
- Protocol fee of 5%
- Messages stored off-chain for privacy

### 🏢 Company Verification
- Companies can verify employment and experiences
- Attestations using EAS (Ethereum Attestation Service)
- HR role management for attestations
- Alumni role tracking

## Smart Contracts

### LinkStateProfile.sol
- Manages user profiles as NFTs
- Handles paid messaging functionality
- Non-transferable by design
- Configurable message pricing
- Protocol fee management

### LinkStateCompany.sol
- Company-specific contract for each organization
- Inherits from SchemaResolver for EAS integration
- Role-based access control for HR and Alumni
- Handles employment attestations

### LinkState.sol
- Main hub contract
- Manages company deployments
- Handles upgrades through beacon proxy pattern
- Company registry and configuration

## Technical Stack

- **Frontend**: Next.js, TailwindCSS, shadcn/ui
- **Backend**: Node.js, PostgreSQL
- **Blockchain**: Solidity, OpenZeppelin, EAS
- **Identity**: ENS, Farcaster integration

## Getting Started

1. **Create a Profile**
   - Mint your LinkState Profile NFT
   - Connect your ENS and Farcaster accounts
   - Set your message price

2. **Company Setup**
   - Companies deploy their verification contract
   - Assign HR managers
   - Start issuing attestations

3. **Networking**
   - Browse professionals
   - Send paid messages
   - Build your verified experience history

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Deploy contracts
pnpm forge script
```

## Architecture

```
├── apps
│   ├── web          # Next.js frontend
│   └── contracts    # Solidity contracts
├── packages
│   ├── database     # Database schema and queries
│   └── ui          # Shared UI components
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct before submitting PRs.

## License

UNLICENSED - All rights reserved

