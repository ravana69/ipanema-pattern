//make 6 more rows of the pattern
for (let i=0; i<6; i++){
  const r = document.querySelector('#m1 use').cloneNode()
  document.querySelector('#m1').appendChild(r)
  gsap.set(r, { y:(i+1)*110 })
}

//stagger and alternate the horizontal movement
gsap.timeline({defaults:{ease:'none'}})
.fromTo('#m1 use', {x:(i)=>(i%2)?-620:0}, {x:(i)=>(i%2)?-100:-520, duration:12, stagger:{each:3, repeat:-1}}, 0)
.from('#shapes circle', {duration:1, attr:{r:0}, stagger:{each:-0.2, repeat:-1, repeatDelay:1, yoyo:true}, ease:'expo'}, 0)
.progress(0.5)

// stretch pill shape back and forth
gsap.timeline({repeat:-1, repeatDelay:1, yoyo:true, defaults:{duration:1, ease:'circ.inOut'}})
.to('.midBar', {attr:{d:'M155,50l310,0'}}, 0)
.to('.midBar', {attr:{d:'M155,50l50,0'}}, 1)
.to('ellipse', {attr:{rx:140, ry:13, cx:310}, transformOrigin:'50%'}, 0)
.to('ellipse', {attr:{rx:22, ry:9, cx:180}, transformOrigin:'50%'}, 1)
