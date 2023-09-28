<template>
  <nav>
    <router-link to="/project">List</router-link>
  </nav>
  <div class="view">
    <router-view class="my-router-view"/>
  </div>

</template>

<script>
export default {
  name: "ProjectView"
}
</script>

<style scoped>
nav {
  background-color: #ffffff;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
  font-size: 20px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

.view {
  padding: 0 30px;
}

.my-router-view {
  width: 100%; /* 设置宽度为100% */
}
</style>
