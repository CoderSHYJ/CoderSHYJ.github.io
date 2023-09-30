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
  color: #00b2ff;
}

a {
  text-decoration: none;
}
</style>
