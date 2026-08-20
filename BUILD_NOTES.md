# PAD.CO — Shopify build notes

Store: padinc-2.myshopify.com (currently named "PADINC" — see below)
Branch: claude/shopify-mens-clothing-setup-pfnyso

## Done
- Custom theme built via Admin GraphQL `themeFilesUpsert`, pushed into the existing
  unpublished theme (id gid://shopify/OnlineStoreTheme/199670956367, was "Horizon").
  Layout, header/footer/hero/featured-collection/rich-text sections, product/collection/
  cart/search/page templates, brand CSS (Ink/Paper/Blood Red/Blood Deep/Concrete,
  Anton/IBM Plex Sans/IBM Plex Mono via Google Fonts). NOT yet published live.
  Preview: https://padinc-2.myshopify.com/?preview_theme_id=199670956367
- 10 products created as DRAFT (6 tees, 4 hoodies), S–2XL, GBP mid-premium pricing,
  PAD.CO voice copy, placeholder mockup art (placehold.co images in brand colors —
  swap for real print photography before going live).
- 3 smart collections: T-Shirts, Hoodies, New Drops (tag:new).
- Main menu updated: New Drops / T-Shirts / Hoodies / All / Contact.

## Outstanding / blocked
- **Store rename PADINC → PAD.CO**: not possible via Admin API (shop `name` field
  isn't writable through GraphQL/REST). Do it manually: Settings → General → Store
  details in Shopify admin.
- **ODMPOD app**: `appInstallations` query returned access denied via this MCP
  connector's scopes — couldn't inspect installed apps. Check Settings → Apps
  manually to confirm what ODMPOD is (POD provider vs. something else) and decide
  keep vs. switch to Printful/Printify/Gelato.
- Products are DRAFT — flip to ACTIVE once real artwork replaces the placeholders.
- Theme is unpublished — preview and confirm before publishing live (irreversible
  outward-facing action, needs explicit go-ahead).
