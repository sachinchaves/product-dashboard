<template>
  <div id="products-table">
    <div class="product-count">
      <h3>Products</h3>
      <span>count</span>
    </div>

    <!-- Products-table-wrapper -->
    <div class="products-table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="product-id">ID</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th class="price-heading">Prices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>Status</td>
            <td>{{ product.quantity }}</td>
            <td
              :aria-label="`Product: ${product.product}, Serial: ${product.serial}`"
            >
              <p class="product-name">{{ product.product }}</p>
              <p class="serial">{{ product.serial }}</p>
            </td>
            <td class="price-body">$ {{ product.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Products-table-wrapper end-->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    let products = ref(null);

    let fetchProductsData = async () => {
      try {
        let response = await fetch("http://localhost:3000/products");

        console.log("response", response);

        if (!response.ok) {
          throw new Error("Error fetching data - " + response.status);
        }

        products.value = await response.json();
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(fetchProductsData);

    console.log(products);

    return { products };
  },
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
