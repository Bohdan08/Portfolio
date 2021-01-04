<template>
  <div id="app">
    <b-container fluid class="p-0 m-0">
      <b-row>
        <b-col lg="12" xl="4">
          <SideBar />
          <MobileNavBar />
        </b-col>
        <b-col lg="12" xl="8" class="bg-light p-0 m-0 route-container">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideBar from "../src/components/SideBar";
import MobileNavBar from "../src/components/MobileNavBar";

export default {
  components: {
    SideBar,
    MobileNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("./assets/sidebarFull.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.route-container {
  height: 100vh;
  overflow: scroll;
}
</style>
