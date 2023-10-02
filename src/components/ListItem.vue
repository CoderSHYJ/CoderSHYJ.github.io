<template>
  <router-link :to="route" class="list-item">
    <img :src="imageUrl" class="item-image">
    <div class="item-content">
      <h3 class="item-title">{{ name }}</h3>
      <p class="item-description">{{ description }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    itemId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    pastName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    route() {
      return `${this.pastName}/${this.name}`;
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  text-decoration: none;  /* 移除默认链接样式 */
  box-shadow: 0 0 4px rgba(5, 5, 5, 0.9);
  background: linear-gradient(to bottom, rgb(205, 205, 205) 0%, rgba(240, 240, 240, 1) 10%, rgba(240, 240, 240, 1) 80%, rgba(255, 255, 255, 1) 100%) center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
}

.item-title {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}

.item-description {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: #666;
}
</style>
