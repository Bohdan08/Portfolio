<template>
  <div class="d-none d-xl-block">
    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      class="sidebar-container bg-transparent"
      shadow
      visible
      no-header
      no-close-on-route-change
      bg-variant="transparent"
      width="33%"
    >
      <div
        class="px-3 py-2 pt-5 h-100 sidebar-body-background text-white bg-transparent"
      >
        <div class="ch bg-transparent">
          <div class="mt-2 mb-5">
            <img
              src="../assets/logo1.png"
              width="150"
              height="150"
              alt="logo"
              class="rounded-circle mb-4"
            />
            <h5 class="mb-2"> BOHDAN MARTYNIUK </h5>
            <p> FULL-STACK SOFTWARE ENGINEER </p>
          </div>

          <div id="nav" class="d-flex text-white flex-column ">
            <router-link
              active-class="active"
              class="text-white font-weight-light route-link"
              to="/"
              >PORTFOLIO</router-link
            >
            <router-link
              active-class="active"
              class="text-white font-weight-light pt-2 route-link"
              to="/offer"
              >MY OFFER</router-link
            >
            <router-link
              active-class="active"
              class="text-white font-weight-light pt-2 route-link"
              to="/contact"
              >CONTACT ME</router-link
            >
          </div>

          <!-- <div class="pt-5 mt-5">
            <p class="get-in-touch-text"> GET IN TOUCH </p>
          </div> -->
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar-body-background {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

.active {
  font-weight: bold !important;
}

.route-link:hover {
  font-weight: bold !important;
  text-decoration: none;
}
.get-in-touch-text {
  font-size: 12px;
}
</style>
