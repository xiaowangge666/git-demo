// 1.创建游戏对象
(function() {
    var map = document.getElementById('map')
    var that

    function Game(map) {
        this.food = new Food()
        this.snake = new Snake()
        this.map = map
        that = this
    }
    // 2.开始游戏，将食物和蛇渲染到地图上
    var game = new Game(map)
    Game.prototype.start = function() {
            this.food.render(this.map)
            this.snake.render(this.map)


        }
        // 设置定时器，每隔150ms就运动一步
    function runSnake() {
        var timer = setInterval(function() {
            this.snake.move(this.food, that.map)
            this.snake.render(this.map)
            var maxx = this.map.offsetWidth / this.snake.width - 1
            var maxy = this.map.offsetHeight / this.snake.height - 1
            var head = this.snake.body[0]
                // 设置碰到边界的死亡条件
            if (head.x < 0 || head.x > maxx) {
                alert('Game Over')
                clearInterval(timer)
            }
            if (head.y < 0 || head.y > maxy) {
                alert('Game Over')
                clearInterval(timer)
            }
        }.bind(that), 150)
    }
    // 键盘控制蛇的方向
    function keybind() {
        document.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left'
                    break;
                case 38:
                    this.snake.direction = 'top'
                    break;
                case 39:
                    this.snake.direction = 'right'
                    break;
                case 40:
                    this.snake.direction = 'bottom'
                    break;
            }
        }.bind(that), false)

    }

    keybind()
    runSnake();
    game.start()
})()
// 3.