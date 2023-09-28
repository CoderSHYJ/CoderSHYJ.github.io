<template>
  <div id="game-board"></div>
</template>

<script>
export default {
  name: "GreedySnake"
}
// 获取游戏面板元素
const gameBoard = document.getElementById('game-board');

// 定义蛇初始位置和长度
let snake = [{x: 10, y: 10}];
let snakeLength = 1;

// 定义食物的初始位置
let food = {x: 5, y: 5};

// 定义当前移动方向
let direction = 'right';

// 监听键盘按键事件来改变蛇的移动方向
document.addEventListener('keydown', changeDirection);

// 改变蛇的移动方向
function changeDirection(event) {
  if (event.keyCode === 37 && direction !== 'right') {
    direction = 'left';
  } else if (event.keyCode === 38 && direction !== 'down') {
    direction = 'up';
  } else if (event.keyCode === 39 && direction !== 'left') {
    direction = 'right';
  } else if (event.keyCode === 40 && direction !== 'up') {
    direction = 'down';
  }
}

// 更新游戏状态
function updateGame() {
  // 清空游戏面板
  gameBoard.innerHTML = '';

  // 移动蛇的身体
  const head = {x: snake[0].x + getDirectionX(), y: snake[0].y + getDirectionY()};
  snake.unshift(head);
  if (snake.length > snakeLength) {
    snake.pop();
  }

  // 检查是否蛇吃到了自己或触碰到边界
  if (isSnakeDead()) {
    clearInterval(gameInterval);
    alert('游戏结束！');
    restartGame();
    return;
  }

  // 检查是否吃到食物
  if (head.x === food.x && head.y === food.y) {
    snakeLength++;
    food = generateFood();
  }

  // 绘制蛇
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = segment.x * 20 + 'px';
    snakeElement.style.top = segment.y * 20 + 'px';
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });

  // 绘制食物
  const foodElement = document.createElement('div');
  foodElement.style.left = food.x * 20 + 'px';
  foodElement.style.top = food.y * 20 + 'px';
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

// 根据当前方向获取移动偏移量
function getDirectionX() {
  if (direction === 'left') {
    return -1;
  } else if (direction === 'right') {
    return 1;
  } else {
    return 0;
  }
}

function getDirectionY() {
  if (direction === 'up') {
    return -1;
  } else if (direction === 'down') {
    return 1;
  } else {
    return 0;
  }
}

// 检测蛇是否死亡
function isSnakeDead() {
  const head = snake[0];
  // 检查是否触碰边界
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
    return true;
  }
  // 检查是否吃到自己
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

// 生成随机食物位置
function generateFood() {
  return {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
  };
}

// 重新开始游戏
function restartGame() {
  snake = [{x: 10, y: 10}];
  snakeLength = 1;
  food = generateFood();
  direction = 'right';
  //gameInterval = setInterval(updateGame, 250);
}

// 游戏循环
//let gameInterval = setInterval(updateGame, 250);
</script>

<style scoped>
#game-board {
  width: 400px;
  height: 400px;
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
</style>
