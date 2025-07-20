# GitHub Secrets Setup for SciFiNovel

## Required Secrets

For German Impressum compliance, you must set up the following GitHub repository secrets:

### Step-by-Step Setup

1. **Go to your GitHub repository**: https://github.com/flipdidip/SciFiNovel

2. **Navigate to Settings**:

   - Click on the **Settings** tab
   - In the left sidebar, click **Secrets and variables**
   - Click **Actions**

3. **Add New Repository Secret** for each of the following:

#### AUTHOR_NAME

- **Name**: `AUTHOR_NAME`
- **Secret**: Your full legal name (e.g., `Max Mustermann`)

#### AUTHOR_ADDRESS

- **Name**: `AUTHOR_ADDRESS`
- **Secret**: Your street address (e.g., `Musterstraße 123`)

#### AUTHOR_CITY

- **Name**: `AUTHOR_CITY`
- **Secret**: Your postal code and city (e.g., `12345 Berlin`)

#### AUTHOR_EMAIL

- **Name**: `AUTHOR_EMAIL`
- **Secret**: Your contact email address (e.g., `max@example.com`)

## Security Notes

- ✅ **Secrets are encrypted** and only available during GitHub Actions runs
- ✅ **Not visible in logs** or to unauthorized users
- ✅ **Safe to use** for personal information in public repositories
- ⚠️ **Required by German law** for public websites (§5 TMG)

## Testing

After setting up secrets:

1. **Push to main branch** to trigger deployment
2. **Check GitHub Actions** tab for build status
3. **Visit deployed site** to verify information appears correctly
4. **Check Impressum page** for proper German legal compliance

## Local Development

For local development, copy `.env.example` to `.env.local` and fill in your information:

```bash
cp .env.example .env.local
# Edit .env.local with your real information
```

The `.env.local` file is ignored by git and won't be committed to the repository.
