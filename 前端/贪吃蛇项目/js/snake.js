(function() {
    var position = 'absolute'
    var Elements = []
        // var map = document.getElementById('map')

    function Snake(options) {
        options = options || {}
        this.width = options.width || 20
        this.height = options.height || 20
        this.direction = options.direction || 'right'
        this.body = [
            { x: 3, y: 2, backgroundColor: 'red' },
            { x: 2, y: 2, backgroundColor: 'blue' },
            { x: 1, y: 2, backgroundColor: 'blue' },
        ]
    }

    Snake.prototype.render = function(map) {
            remove()
            for (var i = 0, length = this.body.length; i < length; i++) {
                var object = this.body[i]
                var div = document.createElement('div')
                map.appendChild(div)
                Elements.push(div)
                    // 设置样式
                div.style.width = this.width + 'px'
                div.style.height = this.height + 'px'
                div.style.left = object.x * this.width + 'px'
                div.style.top = object.y * this.height + 'px'
                div.style.backgroundColor = object.backgroundColor
                div.style.position = position
            }
        }
        // 设置蛇身的移动方法
    Snake.prototype.move = function(food, map) {
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x
                this.body[i].y = this.body[i - 1].y

            }
            // 设置蛇头的移动
            var head = this.body[0]
            switch (this.direction) {
                case 'left':
                    head.x -= 1;
                    break;
                case 'top':
                    head.y -= 1;
                    break;
                case 'right':
                    head.x += 1;
                    break;
                case 'bottom':
                    head.y += 1;
                    break;
            }
            // 删除食物，并加长蛇节
            function extend(parent, child) {
                for (var key in parent) {
                    if (child[key]) {
                        continue;
                    }
                    child[key] = parent[key]
                }

            }
            var headx = head.x * this.width
            var heady = head.y * this.height
            if (headx === food.left && heady === food.top) {
                var last = this.body[this.body.length - 1]
                    // this.body.push({
                    //     x: last.x,
                    //     y: last.y,
                    //     backgroundColor: last.backgroundColor
                    // })
                var obj = {}
                extend(last, obj)
                this.body.push(obj)
                food.render(map);
            }
        }
        // 删除蛇的函数
    function remove() {
        for (var i = Elements.length - 1; i >= 0; i--) {
            Elements[i].parentNode.removeChild(Elements[i])
            Elements.splice(i, 1)
        }
    }

    window.Snake = Snake
})()