<template>
  <div class="components">
    <h2>Greedy Snake</h2>
    <div class="score-board">
      <div class="label">score</div>
      <div class="score">{{ snakeLength - 1 }}</div>
    </div>
    <div id="game-board">
      <div v-for="segment in snake" :key="segment.id" class="snake"
           :style="{ left: segment.x * 10 + 'px', top: segment.y * 10 + 'px' }"></div>
      <div v-if="food" class="food" :style="{ left: food.x * 10 + 'px', top: food.y * 10 + 'px' }"></div>
    </div>
    <button @click="restartGame" class="start-button">{{ buttonText }}</button>
    <div class="horizontal-buttons">
      <button @click="move('left')">L</button>
      <div class="vertical-buttons">
        <button @click="move('up')">U</button>
        <button @click="move('down')">D</button>
      </div>
      <button @click="move('right')">R</button>
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
      buttonText: 'Start',
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    move(direction) {
      if (this.direction === "up" && direction === "down" && this.snakeLength !== 1) {
        return;
      }
      if (this.direction === "down" && direction === "up" && this.snakeLength !== 1) {
        return;
      }
      if (this.direction === "right" && direction === "left" && this.snakeLength !== 1) {
        return;
      }
      if (this.direction === "left" && direction === "right" && this.snakeLength !== 1) {
        return;
      }
      this.direction = direction;
    },

    handleKeyDown(event) {
      if (event.key === "ArrowUp" && (this.direction !== "down" || this.snakeLength === 1)) {
        this.direction = "up";
      } else if (event.key === "ArrowDown" && (this.direction !== "up" || this.snakeLength === 1)) {
        this.direction = "down";
      } else if (event.key === "ArrowLeft" && (this.direction !== "right" || this.snakeLength === 1)) {
        this.direction = "left";
      } else if (event.key === "ArrowRight" && (this.direction !== "left" || this.snakeLength === 1)) {
        this.direction = "right";
      }
    },
    updateGame() {
      const head = {x: this.snake[0].x + this.getDirectionX(), y: this.snake[0].y + this.getDirectionY()};
      this.snake.unshift(head);
      if (head.x === this.food.x && head.y === this.food.y) {
        this.snakeLength++;
        this.food = this.generateFood();
        clearInterval(this.gameInterval);
        this.gameInterval = setInterval(this.updateGame, 250 * Math.pow(0.95, this.snakeLength));
      }
      if (this.snake.length > this.snakeLength) {
        this.snake.pop();
      }
      if (this.isSnakeDead()) {
        clearInterval(this.gameInterval);
        this.buttonText = 'Try Again';
        //alert('游戏结束！');
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
      let x, y;
      while (1) {
        x = Math.floor(Math.random() * 21);
        y = Math.floor(Math.random() * 21);
        let flag = false;
        for (let i = 0; i < this.snake.length; i++) {
          if (x === this.snake[i].x && y === this.snake[i].y) {
            flag = true;
            break;
          }
        }
        if (!flag) {
          break;
        }
      }
      return {
        x, y
      };
    },
    restartGame() {
      clearInterval(this.gameInterval);
      this.snake = [{x: 10, y: 10}];
      this.snakeLength = 1;
      this.food = this.generateFood();
      this.direction = 'right';
      this.gameInterval = setInterval(this.updateGame, 250);
      this.buttonText = 'Restart';
    },
  }
}
</script>

<style scoped>
#game-board {
  width: 210px;
  height: 210px;
  border: 2px solid #000;
  position: relative;
  margin: 0 auto;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
}

.snake {
  width: 10px;
  height: 10px;
  background-color: green;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
  position: absolute;
}

.food {
  width: 10px;
  height: 10px;
  background-color: red;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
  position: absolute;
}

.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
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
  background-color: #ddd;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.9);
  border-radius: 6px;
  border: 0 solid #000;
}

button:hover {
  background-color: #ccc;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
}
button:active {
  background-color: #aaa;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.start-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #37e1ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 4px rgba(5, 100, 100, 0.9);
}

/* 鼠标悬停状态 */
.start-button:hover {
  background-color: #0cb6ff;
  box-shadow: 0 0 4px rgba(2, 20, 20, 0.9);
}

/* 按下状态 */
.start-button:active {
  background-color: #0d9aff;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* 禁用状态 */
.start-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.score-board {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

/* 成绩样式 */
.score-board .score {
  margin-bottom: 5px;
}

/* 提示文字样式 */
.score-board .label {
  font-size: 14px;
  color: #666;
}
</style>
