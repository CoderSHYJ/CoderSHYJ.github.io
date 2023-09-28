<template>
  <div class="welcome-page">
    <h1 class="animated-text">Welcome to My Personal Homepage!</h1>
    <p class="animated-text">There is nothing here!.</p>
  </div>
</template>

<script>
</script>
<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.welcome-page h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.welcome-page p {
  font-size: 18px;
  color: #666;
}

.animated-text {
  animation: floatIn 1s ease-out forwards;
  opacity: 0;
}

@keyframes floatIn {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
