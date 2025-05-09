<template>
  <div id="products-table">
    <div class="product-count">
      <h3>Products</h3>
      <span>{{ shownCount }} of {{ totalResults }} results</span>
    </div>

    <!-- Products-table-wrapper -->
    <div class="products-table-wrapper">
      <table>
        <thead>
          <tr>
            <th
              class="product-id"
              @click="toggleSort('id')"
              role="button"
              tabindex="0"
            >
              ID
            </th>
            <th>Status</th>
            <th @click="toggleSort('quantity')" role="button" tabindex="0">
              Quantity
            </th>
            <th @click="toggleSort('product')" role="button" tabindex="0">
              Product Name
            </th>
            <th
              class="price-heading"
              @click="toggleSort('total')"
              role="button"
              tabindex="0"
            >
              Prices
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in sortedFilteredProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>
              <StatusBadge :text="'Status'" :badgeColor="getRandomColor()" />
            </td>
            <td>{{ product.quantity }}</td>
            <td
              :aria-label="`Product: ${product.product}, Serial: ${product.serial}`"
            >
              <p class="product-name">{{ product.product }}</p>
              <p class="serial">{{ product.serial }}</p>
            </td>
            <td class="price-body">${{ product.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Products-table-wrapper end-->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import StatusBadge from "./StatusBadge.vue";

// Props
const props = defineProps({
  search: {
    type: String,
    default: "",
  },
});

// Data
const products = ref([]);
const totalResults = ref(0);
const sortBy = ref(null); // field name
const sortOrder = ref("asc"); // 'asc' or 'desc'

// Fetch products
const fetchProductsData = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) {
      throw new Error("Error fetching data - " + response.status);
    }

    const data = await response.json();
    products.value = data;
    totalResults.value = data.length;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchProductsData);

const toggleSort = (field) => {
  if (sortBy.value === field) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortBy.value = field;
    sortOrder.value = "asc";
  }
};

// Computed values
const sortedFilteredProducts = computed(() => {
  const searchTerm = props.search.toLowerCase();

  let filtered = products.value.filter((p) =>
    `${p.product} ${p.id} ${p.total} ${p.quantity}`
      .toLowerCase()
      .includes(searchTerm)
  );

  if (!sortBy.value) return filtered;

  return filtered.sort((a, b) => {
    let valA = a[sortBy.value];
    let valB = b[sortBy.value];

    // Handle strings and numbers
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });
});

const shownCount = computed(() => sortedFilteredProducts.value.length);

// Array of colors
const colors = ["red", "green", "yellow", "violet"];

// Function to get a random color
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
</script>

<style lang="scss">
#products-table {
  max-width: 1184px;
  margin: 0 auto;
  margin-top: 76px;

  h3 {
    text-align: left;
    font-family: $font-family-secondary;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-right: 10px;
  }

  .product-count {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    h3 {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
      margin-right: 10px;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      font-family: $font-family-secondary;
      color: #808080;
    }
  }

  .products-table-wrapper {
    border: 1px solid #e4e4ef;
    border-radius: 8px;

    table {
      width: 100%;
      border-collapse: collapse;
      font-family: $font-family-secondary;
      line-height: 20px;

      thead {
        th {
          padding: 18px 16px;
          font-weight: 700;
          font-size: 16px;

          &.product-id {
            text-align: left;
          }

          &.price-heading {
            border-left: 1px solid #e4e4ef;
          }
        }
      }
      tbody {
        tr {
          border-top: 1px solid #e4e4ef;
          padding: 18px 16px;
          font-size: 14px;
          font-weight: 400;

          .product-name {
            text-align: left;
            margin: 0;
            padding: 8px 0 0 16px;
          }
          .serial {
            font-size: 12px;
            color: #808080;
            text-align: left;
            margin: 0;
            padding: 0px 0 8px 16px;
          }

          .price-body {
            border-left: 1px solid #e4e4ef;
          }
        }
      }
    }
  }
}
</style>
