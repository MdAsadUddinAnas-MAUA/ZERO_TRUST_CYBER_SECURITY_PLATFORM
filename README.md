# Zero Trust Cybersecurity Platform

Live demo: https://zero-trust-cyber-security-platform.vercel.app/

## Table of contents
- Overview
- Features
- Live demo
- Project structure
- Prerequisites
- Installation
- Development
- Docker
- Contributing
- License
- Contributors

## Overview
The Zero Trust Cybersecurity Platform implements the Zero Trust model with features for user management, threat monitoring, event logging, and MFA verification.

## Features
- User management (registration, status)
- Threat monitoring and alerting
- Event logging and audit trail
- Multi-factor authentication (MFA) verification
- Dashboard with system health and recent events

## Live demo
Visit the deployed site: https://zero-trust-cyber-security-platform.vercel.app/

## Project structure
Top-level layout (important folders):

```
project/
├── contracts/        # Smart contracts for Zero Trust IAM
├── scripts/          # Deployment scripts
├── src/              # Frontend source code
│   ├── components/   # Reusable UI components
│   ├── contexts/     # React context for state management
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Application pages
│   └── styles/       # CSS and styling files
├── artifacts/        # Build artifacts for smart contracts
├── cache/            # Solidity cache files
├── index.html        # Main HTML file
├── vite.config.ts    # Vite configuration
└── package.json      # Project dependencies
```

## Prerequisites
- Node.js (v16+ recommended)
- npm
- Docker (optional, for containerized runs)
- Git

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/MdAsadUddinAnas-MAUA/ZERO_TRUST_CYBER_SECURITY_PLATFORM.git
cd ZERO_TRUST_CYBER_SECURITY_PLATFORM
npm install
```

## Development
Run the dev server:

```bash
npm run dev
```

Build the frontend:

```bash
npm run build
npx hardhat compile
```

## Docker
Build and run the Docker image (optional):

```bash
docker build -t zero-trust-cyber-shield .
docker run -p 5173:5173 zero-trust-cyber-shield
```

## Contributing
Contributions welcome — please fork, create a branch, and open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributors
- MdAsadUddinAnas-MAUA — https://github.com/MdAsadUddinAnas-MAUA

