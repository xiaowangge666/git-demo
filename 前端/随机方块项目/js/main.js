var container = document.getElementById('container')
var array = [];
for (var i = 0; i < 10; i++) {
    // 给每个方块添加随机颜色
    var r = Tools.getRandom(0, 255)
    var g = Tools.getRandom(0, 255)
    var b = Tools.getRandom(0, 255)
    var x = Tools.getRandom(0, 20)
    var y = Tools.getRandom(0, 20)
    var box = new Box(container, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ', .8)',
        boxShadow: '' + x + 'px ' + y + 'px 20px #000'
    });
    // 将方块装进数组给下方函数访问并添加随机位置属性
    array.push(box)
}
// 随机位置
boxrandom()

function boxrandom() {
    {
        for (var i = 0; i < array.length; i++) {
            var box = array[i]
            box.random()
        }
    }
}
setInterval(boxrandom, 1000)