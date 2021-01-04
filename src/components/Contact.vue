<template>
  <div class="text-left p-5">
    <h3>CONTACT ME </h3>
    <p class="pb-1"> I am open to any ideas of cooperation. </p>
    <div
      class="pt-2 d-flex justify-content-between contact-container"
      v-for="socialNetwork in socialNetworks"
      :key="socialNetwork.network"
    >
      <p>
        <b-icon :icon="socialNetwork.icon"></b-icon>
        <b> {{ socialNetwork.network }}:</b>
      </p>
      <span class="pl-2 ">
        <a
          v-if="socialNetwork.isLink"
          :href="socialNetwork.value"
          target="_blank"
          class="text-dark"
        >
          {{ socialNetwork.label }}
        </a>
        <span v-if="!socialNetwork.isLink"> {{ socialNetwork.label }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      socialNetworks: [
        {
          network: "Email",
          value: "bohdan.martyniuk08@gmail.com",
          label: "bohdan.martyniuk08@gmail.com",
          icon: "envelope",
          isLink: false,
        },
        {
          network: "GitLab",
          value: "https://gitlab.com/Bohdan881",
          label: "Bohdan881",
          icon: "github",
          isLink: true,
        },
        {
          network: "GitHub",
          value: "https://github.com/Bohdan08",
          label: "Bohdan08",
          icon: "github",
          isLink: true,
        },
        {
          network: "Linkedin",
          value: "https://www.linkedin.com/in/bohdan-martyniuk-244009142/",
          label: "Bohdan Martyniuk",
          icon: "linkedin",
          isLink: true,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-container {
  width: 375px !important;
}
</style>
