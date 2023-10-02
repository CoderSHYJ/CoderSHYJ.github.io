<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/whimsy">Whimsy</router-link>
    |
  </nav>
  <router-view/>
  <footer class="page-end">
    <p>Tech Platform: Vue.js, Github Pages</p>
    <p>Source Code: <a href="https://github.com/CoderSHYJ/CoderSHYJ.github.io">Click Here</a></p>
  </footer>
</template>

<style scoped>

nav {
  background-color: #333;
  color: #fff;
  padding: 30px;
  font-size: 24px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-active {
  color: #888888;
}

a {
  text-decoration: none;
}

.page-end {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #333;
  color: #dddddd;
  margin-top: 4px;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
}

.page-end a {
  color: #dddddd;
  text-decoration: underline;
}

.page-end p {
  margin: 8px;
  font-size: 4px;
}
</style>
