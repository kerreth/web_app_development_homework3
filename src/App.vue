<template>
  <HeaderComponent/>
  <main>
    <router-view/>
  </main>
  <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/Footer.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  gap: 1em;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main {
  flex: 1;
}

body {
  margin: 0;
}
</style>
