<template>
  <div class="view">
    <nav>
      <router-link to="/project">List</router-link>
    </nav>
    <div class="router-view">
      <router-view/>
    </div>
  </div>


</template>

<script>
export default {
  name: "ProjectView"
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

.view {
  background-color: rgb(193, 219, 239);
}

.router-view {
  padding: 10px 10px;
  background-color: rgb(247, 247, 247);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
