<template>
  <div id="product-header">
    <div class="header-left-container">
      <img alt="Storm logo" src="../assets/images/logo.png" />
    </div>

    <div class="header-right-container">
      <div class="search-container">
        <input
          type="text"
          name="search"
          class="search-input"
          placeholder="Search"
          v-model="search"
        />
        <img class="search-icon" src="../assets/images/search.svg" />
        <button>Search</button>
        <!-- <p>{{ search }}</p> -->
      </div>

      <div class="info-container">
        <img alt="Setting icon" src="../assets/images/gear.svg" />
        <img alt="Notification icon" src="../assets/images/notifications.svg" />
        <div class="profile">
          <img alt="Profile icon" src="../assets/images/user.png" />
          <p>Adriana Arias</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let search = ref("");

    return { search };
  },
};
</script>

<style lang="scss">
#product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1184px;
  margin: 0 auto;
  padding-top: 80px;

  .header-left-container {
    img {
      width: 100%;
      max-width: 210px;
    }
  }

  .header-right-container {
    display: flex;
    align-items: center;

    .search-container {
      position: relative;
      display: flex;

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
    }

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
        }
      }
    }
  }
}
</style>
