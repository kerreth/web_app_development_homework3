<template>
  <main>
    <router-view />
  </main>
</template>

<script>

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
  min-height: 100vh; /*Change to 100% if we dont want the outer scrollbar. 150 vh is just 150% of the viewport height */
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
