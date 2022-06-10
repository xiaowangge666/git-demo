function Box(parent, options) {
    options = options || {}
    this.backgroundColor = options.backgroundColor || 'red'
    this.width = options.width || 20
    this.height = options.height || 20
    this.X = options.X || 0
    this.Y = options.Y || 0
    this.boxShadow = options.boxShadow
        // 创建方块
    this.div = document.createElement('div')
    parent.appendChild(this.div)
    this.parent = parent
    this.init()
}
// 修改方块样式
Box.prototype.init = function() {
        var div = this.div
        div.style.backgroundColor = this.backgroundColor
        div.style.boxShadow = this.boxShadow
        div.style.width = this.width + 'px'
        div.style.height = this.height + 'px'
        div.style.left = this.X + 'px'
        div.style.top = this.Y + 'px'
        div.style.position = 'absolute'

    }
    // 随机位置(方块)
Box.prototype.random = function() {
    var X = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width
    var Y = Tools.getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height
    this.div.style.left = X + 'px'
    this.div.style.top = Y + 'px'

}