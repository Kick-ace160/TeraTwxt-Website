# Teratwxt Website

A responsive multi-page website for **Teratwxt** in **Norton, Zimbabwe**.

## Pages
- Home
- Shop / Product Catalog
- Services
- About
- FAQ
- Contact

## Easy product editing
Open:

`assets/js/main.js`

Inside that file, look for:

`const products = [ ... ]`

Add another product object like this:

```js
{
  name: "New Product Name",
  category: "stationery",
  image: "assets/img/stationery.svg",
  inquiryTag: "New Product Name",
  note: "Short description of the item."
}
```

## Current categories
- stationery
- paper
- filing
- tools
- education
- technology
- sports
- daily

## Contact settings used
- Phone / WhatsApp: +263772204910
- Email: florencemakona@gmail.com

## Run locally
Just open `index.html` in a browser.

## Free deployment options
You can upload this folder to:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Note
The website currently uses custom local SVG illustrations for product/category visuals. You can replace any image inside `assets/img/` with real product photos later.
