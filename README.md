# Your Next Store — Static Clone

A pixel-faithful, fully static HTML/CSS/JS remake of the YNS demo storefront.  
No build tools. No framework. Open `index.html` in a browser and go.

---

## 📁 Project Structure

```
yns-store/
├── index.html          ← main page (hero + grid + footer)
├── product.html        ← single product page (optional, wire up yourself)
├── category.html       ← category filtered view (optional)
├── css/
│   └── style.css       ← all styles + design tokens at the top
├── js/
│   ├── products.js     ← ✏️  EDIT THIS to add/change products
│   ├── cart.js         ← localStorage cart logic
│   └── main.js         ← rendering, search, toast
└── images/
    ├── placeholder.svg
    ├── hero-shoe.png       ← drop your hero images here
    ├── hero-bag.png
    ├── editorial-relax.jpg
    ├── editorial-lifestyle.jpg
    └── product-*.jpg       ← one image per product
```

---

## ✏️ How to Edit

### Change products
Open `js/products.js` and edit the `PRODUCTS` array:

```js
{
  id: 7,
  name: "My New Item",
  price: 89.99,            // or [49.99, 89.99] for a range
  category: "apparel",     // "accessories" | "apparel" | "shoes"
  image: "images/my-item.jpg",
  colors: ["#ff0000"]      // optional swatches; remove [] if none
}
```

### Change colors / fonts
Open `css/style.css` and edit the `:root` block at the top:

```css
:root {
  --color-bg:    #ffffff;
  --color-dark:  #111111;
  --font-main:   'Inter', sans-serif;
  /* … */
}
```

### Replace images
Drop your images into the `images/` folder and update the `image:` field in `products.js`.  
The hero and editorial images are referenced directly in `index.html`.

---

## 🛒 Cart

- Fully functional add-to-cart with qty controls.
- Persists via `localStorage` across page refreshes.
- Wire up the **Checkout** button in `js/cart.js → checkout()` to your payment link (Stripe, etc.).

---

## 🚀 Deploy

Works as-is on GitHub Pages, Netlify, Vercel, or any static host.  
For GitHub Pages: push to a repo → Settings → Pages → deploy from `main / root`.

---

## 📝 License
MIT — do whatever you want with it.
