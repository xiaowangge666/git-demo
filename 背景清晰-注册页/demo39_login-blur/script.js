const ipt = document.querySelector('[type="password"')
const bgImg = document.querySelector('.background')
const iptBcc = document.querySelector('.bcc')

iptBcc.style.opacity = 1

ipt.addEventListener('input', () => {
    const blur = ipt.value.length
    // console.log(1);
    if (blur) {
        bgImg.style.filter = `blur(${20 - blur * 2}px)`
        if (blur < 11) {
            iptBcc.style.opacity = ` ${1 - blur * .05}`
        }
    }
})