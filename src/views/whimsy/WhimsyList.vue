<template>
  <div>
    <ul>
      <li v-for="item in itemList" :key="item.id">
        <router-link :to="'/whimsy/' + item.name">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      itemList: [
        { id: 0, name: 'test' },
        { id: 1, name: 'GreedySnake' },
        { id: 2, name: 'Item 3' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
