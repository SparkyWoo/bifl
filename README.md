# BuyWhoa

A curated collection of durable, long-lasting products that are worth the investment. This site focuses on providing straightforward recommendations across various categories, helping users make informed decisions about products that are built to last.

## Features

- Simple, clean interface
- Category-based organization
- Price tier indicators
- Real-time search
- Mobile-friendly design
- No login required
- Affiliate links with full disclosure

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- MDX for content
- Fuse.js for search

## Development

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

Categories and products are managed through MDX files in the `app/content/categories` directory. Each category is a separate MDX file with frontmatter for metadata and a markdown table for products.

### Adding a New Category

Create a new MDX file in `app/content/categories` with the following structure:

```mdx
---
title: "Category Name"
id: "category-id"
description: "Category description"
lastUpdated: "YYYY-MM-DD"
priceRanges: {
  "$": "Under $50",
  "$$": "$50-200",
  "$$$": "$200-500",
  "$$$$": "$500+"
}
---

## Products

| Product Name | Price Tier | Price Range | Why It's BIFL | Link |
|--------------|------------|-------------|---------------|------|
| Product A    | $          | $20-30      | Description   | [Shop](#) |
```

## Building

To create a production build:

```bash
npm run build
```

This will create a static export in the `out` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details
