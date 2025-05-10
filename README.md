# product-dashboard

A responsive product dashboard built using Vue 3 (Composition API), SCSS, and a mock REST API powered by `json-server`. Users can browse, search, and sort products, and view detailed information in a modal.

## Features

- Product table with columns: Name, Quantity, Status, Price, and ID
- Modal with product details: title, description, image (or a "no image" placeholder)
- Search functionality to filter products by title
- Sort products by name, quantity, and price by clicking table headers
- Display count of visible and total products
- Fully responsive design with mobile support
- Hamburger menu for mobile navigation
- Accessible modal with keyboard and focus support

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sachinchaves/product-dashboard
cd product-dashboard
```

### 2. Install dependencies

```
npm install
```

### 3. Start the development server

```
npm run serve
```

### 4. Start the mock API

```
npm run start:api
```

The mock API will be available at: http://localhost:3001/products

### Compiles and minifies for production

```
npm run build
```

## Project Structure

```
product-dashboard/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/       # Product and placeholder images
│   │   └── styles/       # SCSS styles
│   ├── components/       # Reusable components (e.g., ProductTable, Modal)
│   ├── router/           # Vue Router setup
│   ├── views/            # Main view files
│   ├── App.vue
│   └── main.js
├── data/
│   └── products.json     # Mock product data
├── package.json
└── README.md
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
