<template>
  <div class="product-dashboard">
    <ProductDashboardHeader />
    <ProductTable />
  </div>
</template>

<script>
import ProductTable from "../components/ProductTable.vue";
import ProductDashboardHeader from "../components/ProductDashboardHeader.vue";
import { ref } from "vue";

export default {
  name: "ProductDashboardView",
  components: {
    ProductTable,
    ProductDashboardHeader,
  },

  setup() {},
};
</script>

<style lang="scss"></style>
