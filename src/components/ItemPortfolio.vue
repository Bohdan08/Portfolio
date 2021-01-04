<template>
  <b-list-group class="m-md-5 m-sm-0">
    <b-list-group-item
      ><b-row class="mt-2">
        <b-col lg="12" xl="6">
          <div class="text-left text-dark">
            <h4>{{ title }}</h4>
            <h5 class="mt-3 font-weight-normal">{{ desc }}</h5>

            <h5 class="mt-4" v-if="features"> Features </h5>

            <ul class="d-flex flex-column pl-1 pt-1">
              <li v-for="feature in features" :key="feature">
                - {{ feature }}
              </li>
            </ul>
            <h5 class="mt-4"> Status </h5>
            <p> {{ status }}</p>
            <div v-if="progressValue">
              <b-progress class="mt-2" show-value>
                <b-progress-bar
                  :value="progressValue"
                  :variant="computedVariant"
                ></b-progress-bar>
              </b-progress>
            </div>

            <h5 class="mt-4" v-if="techWrap"> Technical wrap-up </h5>

            <ul class="d-flex flex-column pl-1 pt-1">
              <li v-for="techItem in techWrap" :key="techItem">
                - {{ techItem }}
              </li>
            </ul>

            <h5 class="mt-3"> Technologies </h5>
            <div class="technologies-container pt-2">
              <b-button
                disabled
                v-for="technology in technologies"
                :key="technology"
                class="mr-2 mt-2 technology-item"
              >
                {{ technology }}
              </b-button>
            </div>

            <b-button
              variant="dark"
              class="mt-4 mb-4 mr-2"
              :href="gitHubLink"
              target="_blank"
              ><b-icon-github></b-icon-github> Code</b-button
            >

            <b-button
              variant="info"
              v-if="onlineLink"
              class="mt-4 mb-4"
              :href="onlineLink"
              target="_blank"
              >View Online</b-button
            >
          </div>
        </b-col>

        <b-col lg="12" xl="6" class="d-flex align-items-center">
          <div class="carousel-container m-auto">
            <b-carousel
              id="carousel-1"
              :interval="5000"
              controls
              indicators
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide
                v-for="asset in assets"
                v-bind:key="asset"
                v-bind:img-src="asset"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "ItemPortfolio",
  props: {
    assets: Array,
    features: Array,
    technologies: Array,
    techWrap: Array,
    title: String,
    desc: String,
    featuresDesc: String,
    onlineLink: String,
    gitHubLink: String,
    status: String,
    progressValue: Number,
  },
  computed: {
    computedVariant: function() {
      return this.progressValue === 100 ? "success" : "warning";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}

li {
  padding-top: 0.2rem;
}

.technology-item {
  opacity: 1 !important;
}

.carousel-container {
  width: 400px;
}
</style>
