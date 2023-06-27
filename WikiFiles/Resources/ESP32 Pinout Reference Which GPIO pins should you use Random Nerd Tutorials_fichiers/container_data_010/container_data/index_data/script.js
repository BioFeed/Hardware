var banniere=document.getElementById("banniere");
var clicktagBouton=document.getElementById("zoneclic");
var bFin;

var nbreBoucles = 1;
var currentBoucle = 0;
let tl = gsap.timeline();
var width = getDimensions().width,height = getDimensions().height;


clicktagBouton.onmouseover = () => {	
	if(	bFin==true){
		
	}
}
clicktagBouton.onmouseout = () => {	
	
}
    

function startFunction()
{	
	banniere.style.display = "block";
	animateSteps();
}

// animateSteps

function animateSteps()
{
	tl.call(actions,["btOff"]) 
	.add("wait1", "+=0.3")
	.from("#txt1_1",{duration:0.5, opacity:0,x:-20, ease: "power2.out"},"wait1")
	.from("#legal",{duration:0.5, opacity:0, ease: "power2.out"},"wait1")
	
	.add("wait2", "+=3.0")
	.to("#txt1_1",{duration:0.5, opacity:0,x:20, ease: "power2.out"},"wait2")
	.to("#legal",{duration:0.5, opacity:0, ease: "power2.out"},"wait2")
	
	.add("wait3", "+=0.0")
	.from("#image2",{duration:0.5, opacity:0, ease: "none"},"wait3")
	.from("#txt2_1",{duration:0.5, opacity:0,x:-20, ease: "power2.out"},"wait3")
	
	.add("wait4", "+=3.0")
	.to("#txt2_1",{duration:0.5, opacity:0,x:20, ease: "power2.out"},"wait4")
   
   	.add("wait5", "+=0.0")
	.from("#image3",{duration:0.5, opacity:0, ease: "none"},"wait5")
	.from("#txt3_1",{duration:0.5, opacity:0,x:-20, ease: "power2.out"},"wait5")
  
    .from(["#fond2","#logo2","#trait2"],{duration:0.5, opacity:0, ease: "none"},"+=3.0")
	.add("wait6", "+=0.0")
    .from("#txt4_1",{duration:0.5, opacity:0,scale:1.2, ease: "power2.out"},"wait6")
    .from("#legal2",{duration:0.5, opacity:0, ease: "power2.out"},"wait6")
    .from("#cta2",{duration:0.5, opacity:0,scale:1.2, ease: "power2.out"},"+=0.0")
	.to("#degradecarte",{duration:1.5,x:"200%", ease: "power2.out"},"+=0.0")

	.call(actions,["btOn"])  
	.call(actions,["fin"],"+=3")  
	console.log(tl.endTime());
	
	
	/*
	
	
	ex : tweens
		"none"
		"power1.out", "power1.in", "power1.inOut",
		"power2.out", "power2.in", "power2.inOut",
		"power3.out", "power3.in", "power3.inOut",
		"power4.out", "power4.in", "power4.inOut",
		"back.out(1.7)", "back.in(1.7)", "Back.inOut(1.7)",
		"elastic.out(1, 0.3)", "elastic.in(1, 0.3)", "elastic.inOut(1, 0.3)",
		"bounce.out", "bounce.in", "bounce.inOut",
		"steps.(12)",
		"circ.out", "circ.in", "circ.inOut",
		"expo.out", "expo.in", "expo.inOut",
		"sine.out", "sine.in", "sine.inOut"
		
		en savoir plus : https://greensock.com/docs/v3/Eases
		
		
	ex: action
		gsap.to(".selector", { // selector text, Array, or object
			  x: 100, // any properties (not limited to CSS)
			  backgroundColor: "red", // camelCase
			  duration: 1, // seconds
			  delay: 0.5,
			  ease: "power2.inOut",
			  stagger: 0.1, // stagger start times
			  paused: true, // default is false
			  overwrite: "auto", // default is false
			  repeat: 2, // number of repeats (-1 for infinite)
			  repeatDelay: 1, // seconds between repeats
			  repeatRefresh: true, // invalidates on each repeat
			  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
			  yoyoEase: true, // or ease like "power2"
			  immediateRender: false,
			  onComplete: myFunc,
			  // other callbacks: 
			  // onStart, onUpdate, onRepeat, onReverseComplete
			  // Each callback has a params property as well
			  // i.e. onUpdateParams (Array)
			});
	
	ex: set
		.set("#txt",{opacity:0})
	
	ex: temporisation
		.add("wait1", "+=0.3")
		.addLabbel("wait1", "+=0.3")	
		
	ex: appeler fonction
		.call(actions,["mavariable"]) 
		
	ex: changer l'origine
		.to("#txt", {transformOrigin:"left top"},"+=0.0")
		
		
	ex : interraction avec tl
		anim.play() // plays forward
			  .pause()
			  .resume() // respects direction
			  .reverse()
			  .restart()
			  .timeScale(2) // 2 = double speed, 0.5 = half speed
			  .seek(1.5) // jump to a time (in seconds) or label
			  .progress(0.5) // jump to halfway
			  .totalProgress(0.8) // includes repeats
			  // when used as setter, returns animation (chaining)

			  // other useful methods (tween and timeline)
			  .kill() // immediately destroy
			  .isActive() // true if currently animating
			  .then() // Promise
			  .invalidate() // clear recorded start/end values
			  .eventCallback() // get/set an event callback

			  // timeline-specific methods
			  // add label, tween, timeline, or callback
			  .add(thing, position)
			  // calls function at given point
			  .call(func, params, position)
			  // get an Array of the timeline's children
			  .getChildren()
			  // empties the timeline
			  .clear()
			  // animate playhead to a position linearly
			  .tweenTo(timeOrLabel, {vars})
			  // ^^ with both start and end positions
			  .tweenFromTo(from, to, {vars})
			  
			  
			  
		incrémenter une variable :
		var myObject = {rotation:0};
		gsap.to(myObject, {duration:20, rotation:360, onUpdate : function(){
			console.log(myObject.rotation);
		}});
		
		
		//enchainer des elements de class
		gsap.from(".class",{duration:1, opacity:0, stragger:0.25});
		
		// random y
		gsap.from(".class",{duration:1, y:()=> Math.random() *400, stragger:0.25});
		
		ou
		
		gsap.from(".class",{duration:1, y:"random(-200,200)", stragger:0.25});
		
		
		// insert at the start of the previous animation
		tl.to(".purple", { x: 600, duration: 1 }, "<");
		tl.to(".purple", { x: 600, duration: 1 }, "<1");
		tl.to(".purple", { x: 600, duration: 1 }, "<+50%");
		
		// mettre en pause une tween
		 tl = gsap.timeline({ paused: true });
		
		
		// Get the current value of a property
		gsap.getProperty("#id", "x");       // 20 
		gsap.getProperty("#id", "x", "px"); // "20px"
		
		
		// path
		https://greensock.com/motionpath/
		
		// melange 
		var array = [1, 2, 3, 4, 5];

		gsap.utils.shuffle(array); // returns the same array, but shuffled like [2, 5, 3, 1, 4]
		
		// random
		// get a random number between -100 and 100 (no snapping)
			gsap.utils.random(-100, 100);

			// a random number between 0 and 500 that's snapped to the closest increment of 5
			gsap.utils.random(0, 500, 5);

			// get a reusable function that will randomly choose a value between -200 and 500, snapping to an increment of 10
			var random = gsap.utils.random(-200, 500, 10, true);

			// now we can call it anytime:
			console.log( random() ); // random value between -200 and 500, snapping to the closest 10
			console.log( random() ); // another random value between -200 and 500, snapping to the closest 10
		
		//delay call
		//calls myFunction() after 1 second and passes 2 parameters:
		gsap.delaye	dCall(1, myFunction, ["param1", "param2"]);

		function myFunction(param1, param2) {
		  //do stuff
		}
		
	*/
}	

function actions(e)
{
	switch(e)
	{
		case "btOn":
			bFin=true;
		break;
		case "btOff":
			bFin=false;
		break;
		case "fin":
			if(nbreBoucles!=currentBoucle)
			{
				currentBoucle++;
				tl.restart(true, true);
			}
		break;
	}
}

function getDimensions() {
	var metas = document.getElementsByTagName('meta')

	for (var i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute('name') === 'ad.size') {
			var meta = metas[i].getAttribute('content')
			return {
				width: parseInt(meta.match(/\d+/g)[0]),
				height: parseInt(meta.match(/\d+/g)[1]),
			}
		}
	}
	return {width: 0, height: 0}
}

window.addEventListener("load", startFunction);
