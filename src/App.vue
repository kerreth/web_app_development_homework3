<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/Footer.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "App",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style>
* {
  font-family: Calibri, sans-serif;
}

html, body {
  height: 100%; /*Body takes up the whole height of the viewport*/
}


p {
  color: #34495e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
        135deg,
        #2f6f99 0%,
        #45849b 65%,
        #5edabb 100%);
}


main {
  flex: 1;                   /* takes all space between header and footer */
  min-height: 0;             
  display: flex;
  flex-direction: column;
}

/*nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

main {
  flex: 1;
}*/

body {
  margin: 0;
}
</style>
