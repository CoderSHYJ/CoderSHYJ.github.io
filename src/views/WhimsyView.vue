<template>
  <div class="view">
    <nav>
      <router-link to="/whimsy">List</router-link>
      {{ childText }}
    </nav>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
export default {
  name: "WhimsyView",
  data() {
    return {
      childText: '',
    };
  },
  watch: {
    $route(to) {
      console.log(to.name);
      if (to.name !== 'list') {
        this.childText = ' » ' + to.name;
      } else {
        this.childText = '';
      }
    }
  },
}
</script>

<style scoped>
nav {
  padding: 10px 0 10px 30px;
  font-size: 15px;
  font-weight: bold; /* 较粗的字体 */
  border-radius: 8px;
  margin: 4px 4px;
  border: 2px solid #888888;
  background: linear-gradient(to bottom, #dddddd 0%, #ffffff 20%, #ffffff 80%, #dddddd 100%) center;
}

nav a {
  font-weight: bold;
  color: #0066dd;
}

.router-view {
  padding: 10px 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
}
</style>
