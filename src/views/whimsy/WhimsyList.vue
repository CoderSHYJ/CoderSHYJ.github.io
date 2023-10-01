<template>
  <div>
    <ListItem v-for="item in itemList" :key="item.id" :name="item.name" :description="item.description" :pastName="pastName">
    </ListItem>
  </div>
</template>

<script>

import ListItem from "@/components/ListItem";
export default {
  name: "ViewList",
  components: {ListItem},
  data() {
    return {
      pastName: 'whimsy',
      itemList: [
        { id: 0, name: 'test', description: 'none' },
        { id: 1, name: 'GreedySnake', description: 'none' },
        { id: 2, name: 'Item 3', description: 'none' }
      ]
    }
  },
}
</script>

<style scoped>

</style>
