<template>
  <div class="container">
    <ItemPortfolio
      title="English with love (mobile)"
      desc="An interactive language learn mobile application for advanced learners"
      :features="[
        'unique lessons crafted by professional and experienced coaches',
        'different categories such as Reading content and Watching content',
        'an opportunity to save a current progress',
        'user profile with settings and statistic',
        'user-friendly mobile app',
      ]"
      :techWrap="[
        'Stand-alone React-native app (React Hooks only), which connects to the API server via HTTP',
        'Back-end Firebase API && Realtime Database.',
      ]"
      status="In progress since December, 2020"
      :progressValue="25"
      :technologies="[
        'React Native',
        'NativeBase',
        'Reanimated',
        'Redux',
        'Firebase',
      ]"
      :assets="[
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/login_jrtboy.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/registration_x1eon9.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/mobcat_cbxmsk.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/lessonnam_bp2lsy.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/about_bjnoej.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609731980/portfolio/ewl-native/exercise_ebk7wp.png',
      ]"
      gitHubLink="https://gitlab.com/Bohdan881/ewl_react_native"
    />

    <ItemPortfolio
      title="English with love (desktop)"
      desc="An interactive language learn application for advanced learners"
      :features="[
        'unique lessons crafted by professional and experienced coaches',
        'different categories such as Reading content and Watching content',
        'an opportunity to save a current progress',
        'user profile with settings and statistic',
        'responsive web design',
      ]"
      :techWrap="[
        'Stand-alone Frontend React app, which connects to the API server via HTTP',
        'Back-end Firebase API && Realtime Database.',
      ]"
      status="In progress since September, 2020"
      :progressValue="50"
      :technologies="[
        'HTML',
        'SCCS',
        'JavaScript',
        'React',
        'Senatic UI',
        'React-Beautiful-Dnd',
        'Recharts',
        'Redux',
        'Redux-Persist',
        'Firebase',
      ]"
      :assets="[
        'https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/main_jcjc7m.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/categories_tunonq.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/lessons_iviwhb.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/words_my4yvd.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/finished_jwqba8.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609726176/portfolio/ewl/user1_ytcsjc.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609726176/portfolio/ewl/user2_awzhci.png',
      ]"
      onlineLink="https://ewl-staging.web.app/"
      gitHubLink="https://gitlab.com/Bohdan881/in_english_with__love/-/tree/feature/lesson-creation"
    />

    <ItemPortfolio
      title="KORUJA"
      desc="Landing Page"
      :features="[
        'modern one-page',
        'responsive web design',
        'gallery',
        'contact form',
        'bilingual',
      ]"
      status="Finished in March, 2020"
      :progressValue="100"
      :technologies="['HTML', 'SCCS', 'JavaScript', 'React', 'Semantic UI']"
      :assets="[
        'https://res.cloudinary.com/koruja/image/upload/v1609727249/portfolio/koruja/kmain_yhe2ny.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609727249/portfolio/koruja/about_lqg2rp.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609727249/portfolio/koruja/product_jvpsjw.png',
        'https://res.cloudinary.com/koruja/image/upload/v1609727249/portfolio/koruja/contacts_qbgem7.png',
      ]"
      onlineLink="https://koruja-shop.ru/#/"
      gitHubLink="https://github.com/Bohdan08/korujaproject"
    />
  </div>
</template>

<script>
import ItemPortfolio from "./ItemPortfolio";
export default {
  name: "Portfolio",
  components: {
    ItemPortfolio,
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
</style>
