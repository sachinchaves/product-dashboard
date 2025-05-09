<template>
  <span class="status-badge" :class="badgeColor">
    {{ text }}
  </span>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  badgeColor: { type: String, required: true },
});
</script>

<style lang="scss">
.status-badge {
  display: inline-block;
  padding: 4px 24px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 12px;
  font-family: $font-family-primary;
  text-transform: capitalize;

  &.red {
    background-color: #fff0f0;
    color: #f93232;
  }
  &.green {
    background-color: #ebf6eb;
    color: #31aa27;
  }
  &.yellow {
    background-color: #fff4e4;
    color: #e99518;
  }
  &.violet {
    background-color: #ededfe;
    color: #605dec;
  }
}
</style>
