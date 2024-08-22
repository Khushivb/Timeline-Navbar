var menu = document.querySelector("#nav i")
var cancel = document.querySelector("#full i")

var tl=gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.8
})
tl.from("#full h3",{
    x:100,
    duration:0.7,
    opacity:0,
    stagger:0.2
})
tl.from("#full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cancel.addEventListener("click",function(){
    tl.reverse()
})