// 需求
// 一.单击开始，在开始事件处理函数中
// 定时器
// 1.生成一个随机数，让某个地鼠出现 -- 随机数
// 2.如果用户没有进行任何的操作，地鼠会自动消失 -- 延迟器

// 二：为地鼠添加单击事件，注意不要重复的进行事件的绑定
// 1.让地鼠立马消失
// 2.分数+1
let start = document.querySelector('button')
let moles = document.querySelectorAll('.mole')
let scoreEle = document.querySelector('.score')
let totalTime = document.querySelector('.totalTime')
let flag = true // 标记当前的地鼠的单击操作是否需要进行处理
let score = null
start.addEventListener('click', function () {
  start.style.display = 'none'
  score = 0
  let total = 10
  let index // 当前出现的地鼠的索引值
  scoreEle.innerText = score
  // 开启一个定时器，让地鼠能够自动出现和消失
  let timerid = setInterval(function () {
    // 在下一个地鼠出现的时候，将操作标记重置为true
    flag = true
    total--
    totalTime.innerText = total

    index = parseInt(Math.random() * moles.length)
    moles[index].style.top = '0%'

    // 添加延迟器，让地鼠可以自动消失
    setTimeout(() => {
      moles[index].style.top = '70%'
    }, 800)
  }, 1000)

  // 为地鼠添加事件绑定
  moles.forEach(function (ele, index) {
    ele.addEventListener('click', function () {
      if (flag) {
        flag = false
        // 1.让地鼠立马消失
        moles[index].style.top = '70%'
        // clearTimeout(tid)
        // 2.分数+1
        score++
        // 为元素赋值内容
        scoreEle.innerText = score
      }
    })
  })

  // 添加总时长的倒计时
  setTimeout(() => {
    // 关闭定时器
    clearInterval(timerid)
    start.style.display = 'block'
  }, 10000)
})
