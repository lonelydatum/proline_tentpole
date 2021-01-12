import {size, frameEnd} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player(1)
	tl.from(".t1a", .15, {x:"-=600",opacity:1}, .2)
	

	
	
	
	
	
	tl.add(frameEnd(), "+=1.5")

}


start()


module.exports = {};

