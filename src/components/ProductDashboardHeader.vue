<template>
  <div id="product-header">
    <div class="header-wrapper">
      <div class="header-left-container">
        <img alt="Storm logo" src="../assets/images/logo.png" class="logo" />
        <button
          class="hamburger"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
        >
          <img src="../assets/images/menu.svg" alt="Menu icon" />
        </button>
      </div>

      <div
        class="header-right-container"
        :class="{ 'mobile-hidden': !menuOpen }"
      >
        <div class="search-container" :aria-hidden="isMobile">
          <input
            type="text"
            name="search"
            class="search-input"
            v-model="searchInput"
            placeholder="Search"
            aria-label="search"
          />
          <img class="search-icon" src="../assets/images/search.svg" />
          <button type="button" @click="emitSearch">Search</button>
          <!-- <p>{{ search }}</p> -->
        </div>

        <div class="info-container">
          <img alt="Setting icon" src="../assets/images/gear.svg" />
          <img
            alt="Notification icon"
            src="../assets/images/notifications.svg"
          />
          <div class="profile">
            <img alt="Profile icon" src="../assets/images/user.png" />
            <p>Adriana Arias</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Search Container -->
    <div class="search-container mobile-search" :aria-hidden="!isMobile">
      <div class="search-container-inner">
        <input
          type="text"
          name="search"
          class="search-input"
          v-model="searchInput"
          placeholder="Search"
          aria-label="search"
        />
        <img class="search-icon" src="../assets/images/search.svg" />
        <!-- <p>{{ search }}</p> -->
      </div>
      <button type="button" @click="emitSearch">Search</button>
    </div>
    <!-- Mobile Search Container END -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  search: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:search"]);

const searchInput = ref(props.search);
const menuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 768);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const emitSearch = () => {
  emit("update:search", searchInput.value);
};

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));
</script>

<style lang="scss">
#product-header {
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1184px;
    margin: 0 auto;
    padding-top: 80px;

    .header-left-container {
      margin-right: 10px;
      .logo {
        width: 100%;
        max-width: 210px;
      }

      .hamburger {
        display: none;
        background: none;
        border: 0;
        img {
          max-width: 24px;
        }
      }

      // Media query for header-left-container
      @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .hamburger {
          display: inline-block;
        }
      }

      // Media query for header-left-container
      @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .hamburger {
          display: inline-block;
        }
      }
    }

    .header-right-container {
      display: flex;
      align-items: center;

      .info-container {
        display: flex;
        gap: 8px;
        margin-left: 30px;

        .profile {
          display: flex;
          align-items: center;
          gap: 8px;

          p {
            font-family: $font-family-primary;
            color: $primary-color;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }

      // Media query for header-right-container
      @media only screen and (max-width: 768px) {
        &.mobile-hidden {
          display: none;
        }
      }
    }

    // Media query for header-wrapper
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 40px;
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  .search-container {
    position: relative;
    display: flex;

    .search-container-inner {
      position: relative;
      width: 100%;
      max-width: 260px;
      box-sizing: border-box;
    }

    &.mobile-search {
      display: none;
    }

    .search-input {
      padding-left: 48px; /* Space for the icon */
      padding-top: 12px;
      padding-bottom: 12px;
      font-family: $font-family-primary;
      font-size: 14px;
      line-height: 20px;
      width: 100%;
      max-width: 260px;
      border: 1px solid #dcdfe3;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }

    button {
      background: $primary-color;
      color: #ffffff;
      border: 0;
      padding: 12px 24px;
      border-radius: 4px;
      margin-left: 16px;
    }

    // Media query for search-container
    @media only screen and (max-width: 768px) {
      display: none;

      &.mobile-search {
        display: flex;
        justify-content: center;
        margin-top: 16px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
  }
}
</style>
