# The Extinction Gradient

A React + TypeScript application built with Vite.

## Development

### Local Development Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. **Set up environment variables** (required for German Impressum):
   - Copy `.env.example` to `.env.local`
   - Fill in your personal information:

```bash
cp .env.example .env.local
# Edit .env.local with your information
```

4. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Environment Variables

For German legal compliance (Impressum), the following environment variables are required:

- `VITE_AUTHOR_NAME` - Your full legal name
- `VITE_AUTHOR_ADDRESS` - Your street address
- `VITE_AUTHOR_CITY` - Your postal code and city
- `VITE_AUTHOR_EMAIL` - Your contact email

**Local Development**: Create `.env.local` with your information
**Production**: Set these as GitHub repository secrets

## Building

To build the app for production:

```bash
npm run build
```

## Deployment

### GitHub Secrets Setup

For production deployment, you **must** configure the following GitHub repository secrets:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

| Secret Name      | Description          | Example            |
| ---------------- | -------------------- | ------------------ |
| `AUTHOR_NAME`    | Your full legal name | `Max Mustermann`   |
| `AUTHOR_ADDRESS` | Your street address  | `Musterstraße 123` |
| `AUTHOR_CITY`    | Postal code and city | `12345 Berlin`     |
| `AUTHOR_EMAIL`   | Your contact email   | `max@example.com`  |

### Automatic Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## GitHub Pages

The app is deployed to: https://flipdidip.github.io/SciFiNovel
