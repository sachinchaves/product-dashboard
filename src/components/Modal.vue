<template>
  <div
    class="backdrop"
    role="dialog"
    ref="backdrop"
    aria-modal="true"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    @click.self="emitClose"
    @keydown.esc="emitClose"
    tabindex="0"
  >
    <div class="modal">
      <div class="modal-container">
        <div class="modal-header">
          <h2 id="modal-title">{{ title }}</h2>
          <button aria-label="close modal">
            <img
              src="../assets/images/close.png"
              alt="close"
              @click="emitClose"
            />
          </button>
        </div>
        <div class="modal-body">
          <img :src="image" :alt="title" />
          <p class="modal-description">{{ description }}</p>
        </div>
        <div class="modal-footer">
          <button @click="emitClose" aria-label="Close modal" class="close">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: String,
});

const emit = defineEmits(["close"]);
const emitClose = () => {
  emit("close");
};
const backdrop = ref(null);

onMounted(() => {
  backdrop.value?.focus();
});
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .modal {
    width: 100%;
    max-width: 684px;
    padding: 40px;
    margin: 100px auto;
    background: #fff;
    border-radius: 8px;
    outline: none;

    .modal-header {
      display: flex;
      justify-content: space-between;

      h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        font-family: $font-family-primary;
      }

      button {
        background: transparent;
        border: none;
        cursor: pointer;

        img {
          cursor: pointer;
        }
      }
    }
    .modal-body {
      display: flex;
      justify-content: space-between;
      margin-top: 56px;
      margin-bottom: 50px;
      font-family: $font-family-secondary;
      align-items: center;

      img {
        width: 45%;
      }

      p {
        width: 45%;
        text-align: left;
        margin: 0;
      }

      @media only screen and (max-width: 768px) {
        flex-direction: column;

        img {
          width: 100%;
          max-width: 278px;
        }

        p {
          width: 100%;
        }
      }
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;

      .close {
        border-radius: 4px;
        padding: 12px 24px;
        background: #f9f9fb;
        font-family: $font-family-primary;
        font-size: 14px;
        font-weight: 500;
        border: 0;
        cursor: pointer;
      }

      @media only screen and (max-width: 768px) {
        .close {
          width: 100%;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      height: 100%;
      margin-top: 400px;
    }
  }

  @media only screen and (max-width: 768px) {
    background: transparent;
  }
}
</style>
