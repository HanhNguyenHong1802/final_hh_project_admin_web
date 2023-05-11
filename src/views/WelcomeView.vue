<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <WelcomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomePage from "@/components/welcome-page.vue"; // @ is an alias to /src

export default defineComponent({
  name: "WelcomeView",
  components: {
    WelcomePage,
  },
});
</script>
