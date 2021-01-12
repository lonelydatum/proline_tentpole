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



function init(id){
	console.log(id);
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size
	switch(id){
		case "300x180":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=180"})	
		break;

		case "320x180":
		tl.set(".ill", {transformOrigin:`${w/2}px ${h}px`})
		tl.set(".phone", {y:200})	
		break;

		case "970x90":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h/2}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=100", opacity:0})
		break;

		case "640x100":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h*2}px`, x:0, y:0 })
		tl.set(".phone", {y:size.h})	
		break;

		case "728x90":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=200"})	
		break;

		default:
		tl.set(".ill", {transformOrigin:`${w/2}px ${h}px`})
		break;
	}
	return tl
}

export {size, frameEnd, frameEndPool, init}