<template>
  <button @click="restartGame">Start</button>
  <div>score: {{ snakeLength - 1 }}</div>
  <div id="game-board">
    <div v-for="segment in snake" :key="segment.id" class="snake"
         :style="{ left: segment.x * 20 + 'px', top: segment.y * 20 + 'px' }"></div>
    <div v-if="food" class="food" :style="{ left: food.x * 20 + 'px', top: food.y * 20 + 'px' }"></div>
  </div>
  <div class="direction-buttons">
    <div class="vertical-buttons">
      <button @click="move('up')">Up</button>
      <div class="horizontal-buttons">
        <button @click="move('left')">Left</button>
        <button @click="move('right')">Right</button>
      </div>
      <button @click="move('down')">Down</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreedySnake",
  data() {
    return {
      direction: 'left',
      snake: [{x: 10, y: 10}],
      snakeLength: 1,
      food: '',
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    move(direction) {
      this.direction = direction;
    },

    handleKeyDown(event) {
      if (event.key === "ArrowUp" && this.direction !== "down") {
        this.direction = "up";
      } else if (event.key === "ArrowDown" && this.direction !== "up") {
        this.direction = "down";
      } else if (event.key === "ArrowLeft" && this.direction !== "right") {
        this.direction = "left";
      } else if (event.key === "ArrowRight" && this.direction !== "left") {
        this.direction = "right";
      }
    },
    updateGame() {
      const head = {x: this.snake[0].x + this.getDirectionX(), y: this.snake[0].y + this.getDirectionY()};
      this.snake.unshift(head);
      if (head.x === this.food.x && head.y === this.food.y) {
        this.snakeLength++;
        this.food = this.generateFood();
      }
      if (this.snake.length > this.snakeLength) {
        this.snake.pop();
      }
      if (this.isSnakeDead()) {
        clearInterval(this.gameInterval);
        alert('游戏结束！');
        this.snake = [{x: 10, y: 10}];
        this.food = '';
      }
    },

    getDirectionX() {
      if (this.direction === 'left') {
        return -1;
      } else if (this.direction === 'right') {
        return 1;
      } else {
        return 0;
      }
    },
    getDirectionY() {
      if (this.direction === 'up') {
        return -1;
      } else if (this.direction === 'down') {
        return 1;
      } else {
        return 0;
      }
    },
    isSnakeDead() {
      const head = this.snake[0];
      // 检查是否触碰边界
      if (head.x < 0 || head.x > 20 || head.y < 0 || head.y > 20) {
        return true;
      }
      // 检查是否吃到自己
      for (let i = 1; i < this.snake.length; i++) {
        if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
          return true;
        }
      }
      return false;
    },
    generateFood() {
      while (1) {
        let x = Math.floor(Math.random() * 20);
        let y = Math.floor(Math.random() * 20);
        let flag = false;
        for (let segment in this.snake) {
          if (x === segment.x && y === segment.y) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          break;
        }
      }
      return {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
      };
    },
    restartGame() {
      this.snake = [{x: 10, y: 10}];
      this.snakeLength = 1;
      this.food = this.generateFood();
      this.direction = 'right';
      this.gameInterval = setInterval(this.updateGame, 250);
    },
  }
}
</script>

<style scoped>
#game-board {
  width: 420px;
  height: 420px;
  border: 2px solid #000;
  position: relative;
  margin: 0 auto;
}

.snake {
  width: 20px;
  height: 20px;
  background-color: green;
  position: absolute;
}

.food {
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
}

.direction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vertical-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.horizontal-buttons {
  display: flex;
  justify-content: center;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
}

button:hover {
  background-color: #ccc;
}
</style>
