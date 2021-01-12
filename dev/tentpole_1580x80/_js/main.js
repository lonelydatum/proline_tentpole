import {size, frameEnd} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player(1)
	tl.from(".t1a", .15, {x:"-=400",opacity:0}, .2)
	

	
	
	const nudge = new TimelineMax()
	nudge.from(".cta2", .2, {opacity:0}, 0)
	nudge.to(".t2", .2, {x:"+=40"}, 0)
	
	tl.add(frameEnd(nudge), "+=1.5")

}


start()


module.exports = {};

