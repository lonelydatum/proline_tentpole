const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function frameEnd(nudge){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.from(".phone", .3, {y:size.h, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
	if(nudge){
		tl.add(nudge)
	}else{
		tl.from(".cta2", .2, {opacity:0}, "+=.2")
	}
	

	return tl
}

function frameEndPool(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.to(".phone", .3, {y:0, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to([".t2", ".cta1"], .01, {opacity:0}, "+=2")
	tl.from(".t3", .2, {opacity:0}, "+=.2")

	return tl
}


export {size, frameEnd, frameEndPool}