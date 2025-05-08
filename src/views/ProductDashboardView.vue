<template>
  <div class="productTable">
    <img alt="Storm logo" src="../assets/images/logo.png" />
    <ProductTable />
  </div>
</template>

<script>
import ProductTable from "../components/ProductTable.vue";

export default {
  name: "ProductDashboardView",
  components: {
    ProductTable,
  },
};
</script>
