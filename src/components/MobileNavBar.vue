<template>
  <div class="d-block d-xl-none">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">BM</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div id="nav" class="d-flex text-white flex-column">
            <router-link class="text-white font-weight-light route-link" to="/"
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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
};
</script>

<style scoped>
.route-link:hover {
  font-weight: bold !important;
  text-decoration: none;
}
</style>
