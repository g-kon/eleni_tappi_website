# Blog CMS setup

The blog editor is available at `/admin/`. It uses Decap CMS and stores bilingual Markdown posts and uploaded images in this repository.

## Owner workflow

1. Open `https://g-kon.github.io/eleni_tappi_website/admin/`.
2. Choose **Sign in with GitHub**.
3. Authorize the configured OAuth application once.
4. Create a post with English and Greek titles, summaries, categories, article content, date, and cover image.
5. Publish the post.

## One-time configuration

`admin/config.yml` currently contains a placeholder OAuth host:

```yaml
base_url: https://YOUR-OAUTH-HOST.example.com
auth_endpoint: auth
```

Replace it with the URL of the deployed OAuth callback service. The callback must keep the GitHub OAuth client secret server-side and expose the Decap CMS-compatible `/auth` endpoint.

Create a GitHub OAuth App with:

- Homepage URL: `https://g-kon.github.io/eleni_tappi_website/admin/`
- Authorization callback URL: `https://YOUR-OAUTH-HOST.example.com/callback`

Set these secrets only in the OAuth host’s environment:

```text
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
```

Never put `GITHUB_CLIENT_SECRET` in this repository or in `admin/config.yml`.

## Content storage

- Posts: `blog/_posts/`
- Uploaded images: `media/blog/`
- CMS entry point: `admin/index.html`
- Generator: `scripts/build-blog.js`
- Generated pages/feed: `blog/generated/`
- Automation: `.github/workflows/build-blog.yml`

Each CMS post includes the fields needed for the existing summary card: cover image, English/Greek title, English/Greek summary, category, date, published status, and article content. The public card should link to the generated article page using the post slug.

The GitHub Actions workflow at `.github/workflows/build-blog.yml` runs whenever CMS Markdown changes. It executes `scripts/build-blog.js`, generating bilingual article pages and a JSON feed under `blog/generated/`, then commits those generated files back to `main` for GitHub Pages to publish. Each generated post includes its cover image, bilingual title, category, date, summary metadata, and English/Greek article content. The existing static cards remain the initial fallback while the generated feed is adopted by the public index.
