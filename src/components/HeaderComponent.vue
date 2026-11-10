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
  name: 'HeaderComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
