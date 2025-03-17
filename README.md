# Vartalaap

Vartalaap is a modern chat application built with Next.js, featuring real-time messaging capabilities and a beautiful user interface.

## Features

- Real-time messaging
- Modern and responsive UI
- User authentication
- Message history
- Online/offline status indicators
- Message read receipts

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth.js
- Socket.io

## Getting Started

### Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vivekjpatil1357/vartalaap.git
cd vartalaap
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```env
DATABASE_URL="your_postgresql_database_url"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/app` - Next.js app directory containing pages and components
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/public` - Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
