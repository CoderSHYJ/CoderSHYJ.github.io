<template>
  <div>
    <ul>
      <li v-for="item in itemList" :key="item.id">
        <router-link :to="'/whimsy/' + item.name"  @click="childClick">{{ item.name }}</router-link>
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
  },
  methods: {
    // 初始化
    childClick(msg) {
      console.log(1);
      this.$parent.childText=msg;
    }
  }
}
</script>

<style scoped>

</style>
