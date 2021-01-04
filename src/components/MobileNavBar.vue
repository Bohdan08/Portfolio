<template>
  <div class="d-block d-md-none">
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
            <router-link class="text-white font-weight-light" to="/portfolio"
              >PORTFOLIO</router-link
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
  data: function() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
