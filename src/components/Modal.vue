<template>
  <div
    class="backdrop"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    @click.self="emitClose"
    @keydown.esc="emitClose"
    tabindex="0"
  >
    <div class="modal" ref="modalContent">
      <h2 id="modal-title">{{ header }}</h2>
      <p>{{ content }}</p>
      <button @click="emitClose" aria-label="Close modal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  header: String,
  content: String,
});

const emit = defineEmits(["close"]);
const emitClose = () => {
  console.log("emit close fired");
  emit("close");
};

const modalContent = ref(null);

onMounted(() => {
  modalContent.value?.focus();
});
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
  outline: none;
}

.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
