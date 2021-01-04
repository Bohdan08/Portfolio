<template>
  <div class="text-left p-5">
    <h3>MY OFFER </h3>
    <p class="pt-1">
      A <b> full-stack software engineer </b> with over
      <b> {{ yearsOfExperience }} years of experience. </b>
    </p>
    <p class="pt-1">
      I am a full stack web developer with industry experience designing and
      implementing web applications, specifically analytics dashboards, <br />
      specializing in <b> JavaScript/Typescript </b>.
    </p>
    <p class="pt-1">
      My current stack is <b> React / </b> Python/ ElasticSearch/ PostgresQL.
      <br />
      I have professional experience using Rechart.js / Chart.js / D3 libraries
      to drive data visualization requirements.
    </p>

    <p>
      The mojority business projects I am working on
      <b> are not open source </b> due to politics of my company, which is why,
      I can't share them. <br />
      Although you may visit <b> portfolio </b> page that provides my side
      open-source projects.
    </p>

    <div class="pt-4">
      <h3 class="pb-2"><b-icon-code></b-icon-code> FRONT-END ENGINEERING </h3>
      I specialize in applications written in
      <b> React, React Native</b> and <b> VueJs </b>
      written via either JavaScript or TypeScript.

      <p class="pt-3  font-weight-bold">
        My current experience and skills in front-end includes:
      </p>
      <ul>
        <li class="pb-1"
          >TypeScript/JavaScript development: writing a clean code, refactoring,
          improving the structure, reliability;
        </li>
        <li class="pb-1">
          Designing and implementing user interfaces for dashboards using
          JavaScript/TypeScript (React, HTML, CSS)
        </li>

        <li class="pb-1">
          Creating interactive data visualization components summarizing KPIs
          (bar charts, pie charts, line charts)
        </li>
        <li class="pb-1">
          Decent experience in React, Redux, Redux-Observable, RxJS, VueJs,
          SematicUI, Bootstrap, Recharts, D3 library;
        </li>
        <li class="pb-1">
          Writing Unit tests;
        </li>
        <li class="pb-1">
          Good sense of UI/UX.
        </li>
      </ul>
    </div>
    <div class="pt-4">
      <h3 class="pb-2"><b-icon-code></b-icon-code> BACK-END ENGINEERING </h3>
      In back-end development, my current stack involves
      <b> Python, PostgresSQL </b> and <b> ElasticSearch </b>.
      <p class="pt-3 font-weight-bold">
        My current experience and skills in back-end includes:
      </p>
      <ul>
        <li class="pb-1">Building Back-End applications (Flask, Django); </li>
        <li class="pb-1"
          >Writing APIs (Python) that efficiently fetch data from databases to
          be provided to a Front-End application;
        </li>
        <li class="pb-1">Writing tests; </li>
        <li class="pb-1"
          >Using different types of databases (PostgreSQL/MySQL/Elasticsearch,
          Redis).
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  computed: {
    yearsOfExperience: function() {
      return new Date().getFullYear() - 2019;
    },
  },
};
</script>

<style scoped></style>
