<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #b5d9e7;
  border-radius: 12px;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
  font-weight: bold;
  justify-content: center;
  /*Header stays above every element*/
}

nav a {
  padding: 15px; /*Padding for home and addpost buttons*/
  text-transform: uppercase;
  text-decoration: none;
  color: #34495e;
}

nav a:hover {
  /*Pseudo class*/
  background-color: #87a3ad;
  color: #000000;
  border-radius: 6px;
}

nav a.router-link-exact-active {
  color:#0099d1;
}

</style>
