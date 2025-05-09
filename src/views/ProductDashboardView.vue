<template>
  <div class="product-dashboard">
    <ProductDashboardHeader :search="search" @update:search="search = $event" />
    <ProductTable :search="search" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductTable from "../components/ProductTable.vue";
import ProductDashboardHeader from "../components/ProductDashboardHeader.vue";

const search = ref("");
</script>

<style lang="scss"></style>
