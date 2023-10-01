<template>
  <div class="view">
    <nav>
      <router-link to="/whimsy">List {{ childText }}</router-link>
    </nav>
    <div class="router-view">
      <router-view/>
    </div>
  </div>


</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {
      childText: 'df',
    };
  },
}
</script>

<style scoped>
nav {
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  font-size: 20px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

a {
  text-decoration: none;
}

.view {
  background-color: rgb(193, 219, 239);
}

.router-view {
  padding: 10px 10px;
  background-color: rgb(247, 247, 247);
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
}
</style>
