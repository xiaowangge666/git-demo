;
(function() {
    var position = 'absolute'
    var map = document.getElementById('map')
    var elements = []

    function Food(options) {
        options = options || {}
        this.backgroundColor = options.backgroundColor || 'green'
        this.width = options.width || 20
        this.height = options.height || 20
        this.left = options.left || 20
        this.top = options.top || 20

    }

    Food.prototype.render = function(map) {
        // 删除食物
        remove()
            // 创造食物
        var div = document.createElement('div')
        map.appendChild(div)
        elements.push(div)
            // 设定随机位置
        this.left = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width
        this.top = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height
        div.style.backgroundColor = this.backgroundColor
        div.style.left = this.left + 'px'
        div.style.top = this.top + 'px'
        div.style.width = this.width + 'px'
        div.style.height = this.height + 'px'
        div.style.position = position
        div.style.borderRadius = '50%'
    }


    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i])
            elements.splice(i, 1)
        }
    }
    window.Food = Food
})()