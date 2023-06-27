(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_P_", frames: [[0,79,160,62],[0,0,215,77]]},
		{name:"Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_NP_", frames: [[0,0,600,328]]}
];


// symbols:



(lib.bild_retina = function() {
	this.initialize(ss["Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blitz_retina = function() {
	this.initialize(ss["Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.scheinwerfer = function() {
	this.initialize(ss["Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.scheinwerfer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.scheinwerfer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scheinwerfer_1, new cjs.Rectangle(0,0,215,77), null);


(lib.schein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvPPIAA+dIHfAAIAAedg");
	this.shape.setTransform(24,97.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.schein, new cjs.Rectangle(0,0,48,195), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhOHAgCMAAAhADMCcPAAAMAAABADg");
	mask.setTransform(500,205);

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("EhElAalQlCgyj7hkIAAsSQF5B7FBA9QFAA8ETAAQFLAACdhHQCehGAAiUQAAiajBhKQh4gulggyQksgsiXgjQj/g8iphhQm1j6ABpEQABmkEAkPQFwmENOAAQJGAAKoDCIAAMQQlJhpkfg/Ql2hRkNgBQjlABiHA2QizBIAAChQgBCbDGBMQB6AuFmA0QEyArCZAkQECA8CsBhQG7D6AAJAQAAIjmNEPQmOEOsqAEQmTAAlCgxgEAwKAaDMAAAgnfIsAAAIqWOnITvY4IyvAAIq9u7IrhO7Mgg7AAAMAAAggMIOxAAIAAfsIUJ4ZIoIp/QBsglBsgvQEvh/FDkIIEgGdIL/wZMAySAAAIAAMwIu5AAMAAAAnfg");
	this.shape.setTransform(499.9999,235);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A36MuIAAseICXABQGOAADagbQIfhEE7i/QE9i+CeliIPBAAQiXHkk7FaQk6FbnQDFQlMCOmUA/QkzAwlGAAg");
	this.shape_1.setTransform(470.1,81.425);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1000,410), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EggQADcIAAm3MBAhAAAIAAG3g");
	mask_1.setTransform(206.475,21.975);

	// Ebene_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1B1B").s().p("AgqAsIAAhXIBVAAIAABXg");
	this.shape_2.setTransform(408.675,38.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1B1B").s().p("AhnCuIAAlbIDPAAIAABPIh4AAIAAA4IBtAAIAABLIhtAAIAAA6IB4AAIAABPg");
	this.shape_3.setTransform(390.7,25.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1B1B").s().p("AAiCuIgDgNQgBgHAAgJIgBgEIgCgqQAAgUgEgKQgDgLgIgDQgHgEgPAAIgZAAIAAB7IhWAAIAAlbIB7AAQAqAAAaAMQAZALALAWQALAWAAAhQAAAdgKAVQgKAVgUAIIgKAFIAJADQATAJAIARQAIAQACAfIAGBNIAEAKgAgjgQIAfAAQAMAAAGgEQAHgDAEgKQAEgKAAgQQAAgOgEgLQgEgIgHgFQgIgEgLAAIgeAAg");
	this.shape_4.setTransform(364.85,25.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1B1B").s().p("Ah7CuIAAlbICGAAQAmAAAXAMQAXANAKATQAKAUAAAYQAAAWgJASQgIASgQALIgMAGQAJAEAIAFQASAMAKAUQAJATAAAXQAAAfgMAXQgMAWgZAMQgYANgnAAgAglBnIAoAAQALAAAHgDQAHgEADgIQAEgHAAgNQAAgNgEgHQgDgIgHgFQgIgEgKAAIgoAAgAglghIAiAAQAJAAAHgEQAGgEAEgIQADgHAAgNQAAgMgDgHQgEgIgGgDQgGgDgKAAIgiAAg");
	this.shape_5.setTransform(337.025,25.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A1B1B").s().p("AgqCuIAAlbIBWAAIAAFbg");
	this.shape_6.setTransform(316.2,25.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1B1B").s().p("AhfCuIAAlbIBXAAIAAEMIBoAAIAABPg");
	this.shape_7.setTransform(299.025,25.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1A1B1B").s().p("AAjCuIhPjOIABDOIhSAAIAAlbIBbAAIA5CQIAXBHIgCjXIBSAAIAAFbg");
	this.shape_8.setTransform(262.325,25.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1B1B").s().p("AhJCiQgfgRgQgpQgQgoAAhAQAAg+AQgpQAQgnAfgSQAggTApAAQArAAAeATQAfARARAoQAQAoAABAQAABAgQAnQgRAogfASQgdASgsAAQgqAAgfgSgAgZheQgLAJgFAXQgGAWAAAoQAAAqAGAWQAFAWALAJQAKAJAPAAQAQAAAKgJQALgJAFgWQAGgUgBgrQABgrgGgUQgGgXgKgJQgKgJgQAAQgPAAgKAJg");
	this.shape_9.setTransform(232.6,25.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1B1B").s().p("AAjCuIgEgNIgCgQIAAgEIAAgEIgCgmQAAgUgEgKQgDgLgIgDQgHgEgOAAIgaAAIAAB7IhXAAIAAlbIB7AAQAsAAAaAMQAZALALAWQAKAWAAAhQAAAdgKAVQgKAUgUAJIgKAFIAJADQATAJAIARQAIASACAdIAGBNIAEAKgAgjgQIAfAAQAMAAAGgEQAIgEADgJQAEgJAAgRQAAgPgEgKQgDgIgIgFQgIgEgLAAIgeAAg");
	this.shape_10.setTransform(204.375,25.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1B1B").s().p("AgqCuIAAkMIhKAAIAAhPIDpAAIAABPIhJAAIAAEMg");
	this.shape_11.setTransform(177.225,25.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A1B1B").s().p("AhECiQgdgRgQgpQgQgpAAg/QAAg+AQgpQAQgoAegSQAegSAqAAQAkAAAbAOQAaAOAQAeQAPAdAFAyIhWAAQgCgWgGgPQgFgNgIgFQgIgGgLAAQgNAAgKAJQgKAJgFAXQgGAXAAAnQAAAoAGAYQAFAVAKAKQAKAJAOAAQAKAAAIgEQAIgFAGgOQAGgOACgXIBVAAQgEAugRAfQgRAfgbAOQgaAOglAAQgoAAgegSg");
	this.shape_12.setTransform(151.275,25.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1B1B").s().p("AhnCuIAAlbIDPAAIAABPIh4AAIAAA4IBsAAIAABLIhsAAIAAA6IB4AAIAABPg");
	this.shape_13.setTransform(125.2,25.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1B1B").s().p("AhfCuIAAlbIBXAAIAAEMIBoAAIAABPg");
	this.shape_14.setTransform(101.975,25.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A1B1B").s().p("AhnDZIAAlbIDPAAIAABPIh5AAIAAA3IBtAAIAABMIhtAAIAAA6IB5AAIAABPgAgjiVIAbhDIBfAAIg6BDg");
	this.shape_15.setTransform(78.45,21.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1A1B1B").s().p("AAjCuIhPjPIABDPIhSAAIAAlbIBbAAIBQDWIgBgPIgBjHIBSAAIAAFbg");
	this.shape_16.setTransform(40.925,25.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1A1B1B").s().p("AhCCkQgbgOgOgcQgOgdAAgtIAAjgIBWAAIAADjQAAARAEALQAEALAIAFQAIAFALAAQAMAAAIgFQAIgFAEgLQADgKAAgSIAAjjIBXAAIAADgQAAAugOAbQgOAdgcAOQgbANgnAAQglAAgdgNg");
	this.shape_17.setTransform(12.225,26.275);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,413,44), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A+9F7IAAr1MA97AAAIAAL1g");
	mask_2.setTransform(198.225,37.9);

	// Ebene_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1B1B").s().p("Aj2F7IAAicIEEmtIABgBIj8ACIAAitIHfAAIAACYIkMGxIERgCIAACug");
	this.shape_18.setTransform(371.725,37.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A1B1B").s().p("AjiF7IAAr1IHFAAIAACtIkHAAIAAB4IDtAAIAACmIjtAAIAAB+IEHAAIAACsg");
	this.shape_19.setTransform(317.775,37.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1B1B").s().p("ABMF7Ih3koIgkhhIgTg6IACA8IAABfIABEoIi0AAIAAr1IDIAAIB8E5QARAxAUBBIANApIgBghIgCmzICzAAIAAL1g");
	this.shape_20.setTransform(258.5,37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1A1B1B").s().p("AjiF7IAAr1IHFAAIAACtIkHAAIAAB4IDtAAIAACmIjtAAIAAB+IEHAAIAACsg");
	this.shape_21.setTransform(200.475,37.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A1B1B").s().p("Ah1F7Ii2r1IDDAAIBtJAIBppAIC+AAIitL1g");
	this.shape_22.setTransform(142.625,37.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1A1B1B").s().p("AjiF7IAAr1IHFAAIAACtIkHAAIAAB4IDtAAIAACmIjtAAIAAB+IEHAAIAACsg");
	this.shape_23.setTransform(86.125,37.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1A1B1B").s().p("AkXF7IAAr1IDwAAQBrAABHAoQBHAoAjBTQAjBSAACFQAACHgjBSQgjBThIAnQhGAohtAAgAhaDUIA2AAQAnAAAcgUQAagWAOguQANgvAAhNQAAhMgNgvQgOgugbgVQgagVgpAAIg1AAg");
	this.shape_24.setTransform(28.025,37.9);

	var maskedShapeInstanceList = [this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,396.5,75.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A0QC9IAAl6MAogAAAIAAF6g");
	mask_3.setTransform(129.65,18.95);

	// Ebene_3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A1B1B").s().p("AgLALIAAgVIAXAAIAAAVg");
	this.shape_25.setTransform(208.525,33.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1A1B1B").s().p("AgZAvIAAhbIATAAIAAAQQACgHAHgFQAIgFAKgBIADAAIACABIAAASIgEAAQgJAAgGADQgHADgCAGQgDAFAAAIIAAAxg");
	this.shape_26.setTransform(204.625,29.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1A1B1B").s().p("AgYArQgHgEgEgHQgEgGAAgMIAAg8IATAAIAAA5QABAGACAFQACAEAEACQAEACAGAAQAEgBAFgCQAGgDADgFQADgGAAgIIAAgzIAUAAIAABbIgTAAIAAgOIgEAFQgEAFgHADQgGADgHAAQgKAAgHgEg");
	this.shape_27.setTransform(196.1,29.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1A1B1B").s().p("AgXAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGAMAAQAOAAAKAGQAKAHAGAKQAGALAAANQAAAOgGALQgFALgLAGQgKAGgOAAQgMAAgLgGgAgNgbQgGAFgDAGQgDAHAAAJQAAAJADAIQADAHAGAEQAGADAHAAQAIAAAGgDQAGgEADgHQADgIAAgJQAAgJgDgHQgEgHgFgEQgGgDgIgBQgHABgGADg");
	this.shape_28.setTransform(185.975,29.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1A1B1B").s().p("AgQBPIAAgPIAGAAIAEgBIAEgDIAAgFIAAhnIATAAIAABpQAAAIgDAFQgDAFgFACQgFACgIAAgAgCg6IAAgUIATAAIAAAUg");
	this.shape_29.setTransform(178.15,30);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1A1B1B").s().p("AgfA/IAsh9IATAAIgsB9g");
	this.shape_30.setTransform(173.525,27.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1A1B1B").s().p("AgPA9QgKgGgHgLQgHgLgCgPIgNAAIAAgNIAMAAIAAgKIgMAAIAAgNIANAAQADgQAHgKQAFgKAMgGQALgFAMAAQAMAAAKAEQAKAEAGAIQAHAHABALIgVAAQgBgGgEgDQgDgDgFgDQgFgCgHAAQgIAAgFADQgGADgEAHQgEAFgBAMIA6AAIAAANIg7AAIAAAKIA7AAIAAANIg6AAQAAAKAEAHQAEAIAHADQAFADAIAAQAFAAAHgCQAFgCADgEQAEgDABgFIAVAAQgBAKgHAIQgGAIgJADQgJAEgOAAQgNAAgLgFg");
	this.shape_31.setTransform(163.95,27.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1A1B1B").s().p("AgWA+QgJgEgGgIQgGgKgBgJIAUAAQAAAFADAFQAEAEAFACQAEACAIAAQAJAAAGgFQAGgHADgKQADgJABgOIgFAEQgHAGgFADQgIADgGgBQgOABgJgGQgKgFgFgJQgGgKAAgMQABgMAFgKQAFgKAMgGQAJgFAPAAIALABIAKAEQAFACAEAEQAHAGADAHQAFAKABAIQABALABAMQgBAUgFAPQgFAPgLAIQgLAIgPAAQgMAAgKgEgAgOgtQgFAEgDAFQgEAGABAIQgBAIAEAGQADAFAFADQAGADAIAAQAHAAAEgDQAGgDADgFQAEgIAAgGIgBgIIgDgHIgFgGQgCgCgDAAIgGgCIgEgBQgHAAgHADg");
	this.shape_32.setTransform(152.3,27.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1A1B1B").s().p("AgWA8QgKgFgGgIQgGgKgBgLIAVAAQAAAHAEAEQADAGAGACQAGACAFAAQAIAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgCQgFgEgIAAQgFAAgFACIgHAEIgFAHIgUAAIALhJIBGAAIAAATIg1AAIgGAhIAHgEQAEgCAEgBQAEgBAEAAQANAAAKAGQAJAEAGAKQAFALAAAKQAAANgGAKQgHALgJAEQgLAGgNAAQgMAAgKgFg");
	this.shape_33.setTransform(141.65,28.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1A1B1B").s().p("AgWAqQgJgGgHgLQgFgMAAgNQAAgMAFgMQAFgKALgHQAKgGAMAAQAOAAAKAGQAKAGAFALQAFALAAANIAAAGIhEAAQABAHACAGQADAGAGAEQAGADAHAAQAGAAAEgBIAHgGQADgDACgFIATAAQgCALgGAFQgFAHgJAEQgJAEgKAAQgNAAgKgGgAgMgcQgFADgEAHQgCAFAAAGIAvAAIgCgLQgDgGgGgEQgFgDgIAAQgGAAgGADg");
	this.shape_34.setTransform(127.725,29.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1A1B1B").s().p("AgYA7QgJgHgFgKQgFgMAAgOQAAgNAFgLQAFgLAJgGQAJgGAMABQALAAAIAFQAFAEADAFIAAgvIAUAAIAAB9IgTAAIAAgOQgEAHgFAEQgIAFgLAAQgMAAgJgFgAgLgKQgGAEgDAGQgDAHAAAKQAAAKADAHQADAHAGADQAFADAHAAQAHAAAGgDQAGgEACgHQADgGAAgLQAAgJgDgHQgCgGgGgEQgGgEgHAAQgHAAgFAEg");
	this.shape_35.setTransform(117.375,28.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1A1B1B").s().p("AgaAvIAAhbIAUAAIAAAQQADgIAGgEQAHgFALgBIADAAIACABIAAASIgFAAQgIAAgGADQgHAEgCAFQgDAFgBAIIAAAxg");
	this.shape_36.setTransform(105.8,29.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1B1B").s().p("AgJA9IAAhbIATAAIAABbgAgJgoIAAgUIATAAIAAAUg");
	this.shape_37.setTransform(100.25,28.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1A1B1B").s().p("AAAA6QgFgDgDgEQgDgEAAgJIAAg1IgOAAIAAgQIAOAAIAAgcIATAAIAAAcIATAAIAAAQIgTAAIAAAzIABAEQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAHABIAIAAIAAAQIgBAAIgLAAQgJAAgGgCg");
	this.shape_38.setTransform(95.25,28.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1A1B1B").s().p("AgZAvIAAhbIATAAIAAAQQACgHAHgFQAIgFAKgBIADAAIACABIAAASIgEAAQgJAAgGADQgGADgDAGQgDAGAAAHIAAAxg");
	this.shape_39.setTransform(88.875,29.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1A1B1B").s().p("AgdAtQgHgDgEgHQgEgGgBgIQAAgHAEgHQAEgGAHgDQAIgEAMAAIANgCIAIgCQACAAACgDQABgCAAgEIAAgBQAAgDgBgEQgDgDgDgBQgCAAgIAAIgLAAQgDABgDAFQgCAEgBAFIgTAAQABgKADgGQAEgIAJgDQAIgEAOAAQANAAAIADQAIAEAEAGQAEAFAAAJIAAAuIABADIACACIACAAIAFAAIAAAPIgKABQgGAAgFgDQgDgBgDgFIgBgFIgCACQgFAGgHAEQgGADgKAAQgKAAgHgDgAAPABQgDACgHABIgLABQgGABgEACIgGAFQgCADAAAEQAAAFACACQACADAEABQADACAGAAQAHAAAEgCQAFgDAEgFQADgFAAgHIAAgLIgBABg");
	this.shape_40.setTransform(80.55,29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1A1B1B").s().p("AgrBBIAAh/IATAAIAAAOQAEgGAFgEQAIgGALAAQAMAAAKAGQAIAFAFAMQAFAKAAAPQAAAOgFAKQgFALgIAGQgKAGgMAAQgLAAgIgGQgFgDgEgHIAAAygAgNgsQgFAEgDAHQgDAHAAAKQAAAKADAGQADAGAFAFQAFADAIAAQAHAAAFgDQAGgFADgGQADgHAAgKQAAgKgDgGQgDgHgGgEQgFgDgHgBQgIABgFADg");
	this.shape_41.setTransform(70.6,31.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1A1B1B").s().p("AgdA+QgHgEgFgGQgDgHAAgIQgBgHAEgGQADgHAIgDQAIgEAMgBIANgCIAIgBQACgBACgDQABgCABgCIAAgBQAAgEgCgDQgDgDgDgBQgDgBgGAAIgMABQgDABgDAEQgDAEAAAFIgUAAQABgKAFgGQADgHAJgEQAIgEAPABQAMAAAIACQAJAEADAGQAEAGAAAJIAAAuIABACIABACIADAAIAFAAIAAAPIgKABQgGAAgFgCQgDgBgDgGIgBgFIgDADQgEAGgHAEQgHACgJAAQgJAAgIgCgAAPARQgDACgHABIgLACQgGABgEACIgHAEQgBADAAAEQAAAFACACQABADAFACQACACAHAAQAHAAADgDQAFgCAFgGQADgFABgHIAAgKIgCAAgAgJgmIgXgZIAZAAIANAZg");
	this.shape_42.setTransform(56.9,28.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1A1B1B").s().p("AgWAqQgKgFgGgMQgFgLAAgOQAAgNAFgLQAGgLAKgGQAKgGAMAAQANAAALAHQAKAFAFAMQAFAKAAANIAAAHIhEAAQABAHACAFQADAHAGADQAFADAIABQAGAAAEgCQAEgCADgEQADgCACgGIATAAQgCAIgGAIQgFAIgJADQgIAEgLAAQgNAAgKgGgAgMgcQgGAEgDAGIgDALIAwAAQAAgGgDgFQgCgGgGgEQgGgDgHAAQgHAAgFADg");
	this.shape_43.setTransform(254.875,8.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1A1B1B").s().p("AgYArQgHgDgEgIQgEgHAAgLIAAg8IAUAAIAAA5QAAAHACAEQADAEADACQAGACAEAAQAFAAAEgDQAFgCAEgGQADgGAAgHIAAg0IAUAAIAABbIgTAAIAAgOIgEAFQgDAEgHAEQgHADgHAAQgLAAgGgEg");
	this.shape_44.setTransform(244.95,8.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1A1B1B").s().p("AAZBBIAAgxQgEAGgFADQgIAGgLAAQgMAAgJgGQgJgFgFgMQgFgJAAgPQAAgPAFgKQAEgKAKgHQAJgGAMAAQALAAAIAGQAFAEAEAGIAAgOIATAAIAAB/gAgLgsQgGAFgDAGQgDAIAAAJQAAALADAFQADAHAGAEQAFADAGABQAIgBAGgDQAFgDADgIQADgFAAgLQAAgKgDgHQgDgHgFgEQgGgDgIAAQgGAAgFADg");
	this.shape_45.setTransform(234.6,10.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A1B1B").s().p("AgJA9IAAhbIATAAIAABbgAgJgoIAAgUIATAAIAAAUg");
	this.shape_46.setTransform(227.7,6.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1A1B1B").s().p("AgZAvIAAhbIATAAIAAAPQAEgHAFgEQAGgGAMABIAGAAIAAASIgGAAQgIAAgGADQgHADgCAGQgDAFgBAIIAAAxg");
	this.shape_47.setTransform(222.7,8.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A1B1B").s().p("AAAA6QgFgCgDgFQgDgFAAgHIAAg3IgPAAIAAgPIAPAAIAAgcIATAAIAAAcIASAAIAAAPIgSAAIAAA0IABAFIADACIAGABIAIAAIAAAQIAAAAIgLAAQgHAAgIgCg");
	this.shape_48.setTransform(216.05,7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1A1B1B").s().p("AgVAqQgJgEgHgNQgFgLAAgOQAAgNAFgLQAFgKALgHQAKgGAMAAQAMAAAJAEQAJAFAFAIQAGAHABALIgUAAQgBgHgDgDQgDgEgFgCQgEgCgGAAQgGAAgFADQgGADgDAIQgDAHAAAJQAAALADAGQADAHAGAEQAFADAGABQAEAAAGgCQAFgDADgEQAEgEAAgGIAUAAQgBALgGAIQgGAIgIAEQgKAEgLAAQgMAAgKgGg");
	this.shape_49.setTransform(208.475,8.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1A1B1B").s().p("AgWAqQgKgFgGgMQgFgLAAgOQAAgMAFgMQAHgLAJgGQAKgGAMAAQANAAALAHQAKAFAFAMQAFAKAAANIAAAHIhEAAQABAHACAFQAEAHAFADQAGADAHABQAGAAAEgCQADgCAEgEQADgCACgGIATAAQgCAKgGAGQgFAIgJADQgIAEgLAAQgMAAgLgGgAgMgcQgFADgDAHQgDAFAAAGIAvAAQgBgHgBgEQgDgGgGgEQgGgDgHAAQgHAAgFADg");
	this.shape_50.setTransform(198.625,8.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1A1B1B").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_51.setTransform(191.7,6.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1A1B1B").s().p("AgWA7QgKgGgGgLQgFgLAAgPQAAgNAFgLQAGgLAKgGQAKgGAMAAQANAAALAHQAKAFAFAMQAFAJAAAPIAAAGIhEAAQABAHACAFQAEAIAFACQAGAEAHAAQAGAAAEgCQADgBAEgEQADgDACgFIATAAQgCAJgGAHQgFAHgJAEQgIADgLAAQgMAAgLgFgAgMgLQgFACgDAIQgDADAAAGIAvAAQgBgHgBgCQgDgGgGgEQgGgEgHAAQgHAAgFAEgAgHgmIAOgZIAZAAIgXAZg");
	this.shape_52.setTransform(184.775,6.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1A1B1B").s().p("AgZA9QgKgGgGgJQgFgKAAgNIAVAAQABAJACAFQACAFAHADQAGADAHAAQAIAAAFgDQAGgCADgFQADgFAAgGQAAgHgDgFQgDgFgGgDQgGgCgHAAIgJAAIAAgPIAJAAQAHAAAFgCQAFgCADgFQACgFAAgFQAAgGgDgEQgCgEgFgCQgFgCgHAAQgHAAgEACQgFACgDAFQgEAFAAAHIgUAAQAAgLAFgKQAGgJAJgEQAKgFANAAQAMAAAKAEQALAFAFAHQAFAIAAAKQAAAJgEAGQgDAHgHADIgEADIAGADQAIADAEAIQAEAHAAAJQAAAMgFAIQgGAJgLAFQgMAFgMAAQgOAAgMgFg");
	this.shape_53.setTransform(170.95,6.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1A1B1B").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_54.setTransform(159.975,6.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1A1B1B").s().p("AgWAqQgLgGgFgLQgFgJAAgQQAAgNAFgLQAGgLAKgGQAKgGAMAAQANAAALAHQAJAFAGAMQAFALAAAMIAAAHIhEAAQABAHACAFQADAHAGADQAFADAIABQAGAAAEgCQAEgCADgEQADgCACgGIATAAQgDAKgFAGQgHAJgHACQgIAEgMAAQgLAAgLgGgAgMgcQgGAEgDAGIgDALIAwAAQAAgGgDgFQgDgGgFgEQgHgDgGAAQgHAAgFADg");
	this.shape_55.setTransform(153.075,8.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1A1B1B").s().p("AgYA6QgJgFgFgLQgFgKAAgQQAAgPAFgJQAEgKAKgHQAJgGAMAAQALAAAIAGQAFAEADAGIAAgwIAUAAIAAB9IgTAAIAAgNQgEAFgFAEQgIAGgLAAQgMAAgJgGgAgLgKQgFADgEAHQgDAHAAAKQAAAKADAHQADAHAGADQAFAEAGAAQAIAAAFgEQAGgDADgIQADgGAAgLQAAgJgDgHQgDgHgGgDQgFgEgIAAQgGAAgFAEg");
	this.shape_56.setTransform(142.725,6.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1A1B1B").s().p("AgXAqQgKgFgHgMQgFgKAAgPQAAgOAFgKQAHgLAKgGQAKgGANAAQANAAALAGQALAGAFALQAGALAAANQAAANgGAMQgGAMgKAFQgLAGgNAAQgNAAgKgGgAgNgbQgFAFgEAGQgDAHAAAJQAAALADAGQAEAHAFAEQAGADAHABQAIgBAFgDQAHgEACgHQAEgGAAgLQAAgJgEgHQgCgGgHgFQgEgDgJAAQgHAAgGADg");
	this.shape_57.setTransform(132.6,8.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1A1B1B").s().p("AAuA/IAAhkIgBAEIgkBgIgQAAIgkhfIgDgHIACBmIgVAAIAAh9IAeAAIAjBhIAAABIAkhiIAeAAIAAB9g");
	this.shape_58.setTransform(119.8,6.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1A1B1B").s().p("AgdAtQgHgDgEgGQgFgHAAgIQAAgIAEgGQADgGAIgCQAIgEAMgCIANgBQAFAAADgCQADgBABgCQABgCAAgEIAAAAQAAgFgCgCQgBgCgEgCQgDgCgHAAQgGAAgFACQgEACgCADQgCADgBAGIgTAAQAAgKAEgHQAFgHAIgDQAJgEANAAQALAAAKADQAJAEADAGQAEAGAAAIIAAAuIAAADIACABIADABIAEAAIAAAPIgJAAQgHAAgEgCQgEgCgCgEIgCgFIgCADQgEAGgHADQgHADgJAAQgIAAgJgDgAAPABQgCACgHABIgMACQgIABgDABQgEACgBADQgCADAAAEQAAAEACADQACAEADABQAEABAFAAQAGAAAGgCQAFgDAEgFQADgGAAgHIAAgKIgBABg");
	this.shape_59.setTransform(103.85,8.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1A1B1B").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_60.setTransform(96.9,6.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1A1B1B").s().p("AgUAtQgJgEgEgHQgGgHAAgKIATAAQABAGADADQACADAEADQAFABAGAAQAGAAAFgBQAEgBADgDIABgHQAAgDgBgDQgCgCgEgCIgLgDIgJgBQgIgCgJgDQgFgDgEgFQgEgGAAgIQAAgIAEgGQAEgHAJgDQAKgDAKAAQALAAAJAEQAJAEAEAGQAFAHAAAKIgTAAQAAgGgCgEQgEgDgDgCQgFgBgFAAQgGAAgEABQgEACgBACQgCACAAAEQAAAEACACQABADAEABIASAEQALACAHADQAIADADAFQADAFAAAJQAAAJgEAGQgGAGgJAEQgJADgLAAQgKAAgLgDg");
	this.shape_61.setTransform(90.65,8.375);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1A1B1B").s().p("AgWAqQgLgGgFgLQgFgJAAgQQAAgNAFgLQAGgLAKgGQAKgGAMAAQANAAALAHQAJAFAGAMQAFALAAAMIAAAHIhDAAQAAAHACAFQADAHAGADQAFADAIABQAGAAAEgCQAEgCADgEQADgCACgGIATAAQgCAIgGAIQgHAJgHACQgIAEgMAAQgMAAgKgGgAgMgcQgGAEgDAGIgCALIAvAAQAAgGgDgFQgCgGgGgEQgHgDgGAAQgHAAgFADg");
	this.shape_62.setTransform(81.325,8.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1A1B1B").s().p("AgJA/IAAhqIgqAAIAAgTIBnAAIAAATIgpAAIAABqg");
	this.shape_63.setTransform(72.95,6.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1A1B1B").s().p("AgdAtQgIgDgEgGQgDgGAAgJQgBgIAEgGQADgGAIgCQAIgEAMgCIAMgBQAFAAADgCQAEgBAAgCQACgCAAgEIAAAAQAAgEgCgDQAAgCgFgCQgFgCgFAAQgGAAgFACQgFABgBAEQgDADAAAGIgUAAQABgKAEgHQADgGAKgEQAJgEAOAAQAJAAALADQAJAEADAGQAEAFAAAJIAAAuIAAADIACABIADABIAFAAIAAAPIgKAAQgHAAgEgCQgEgCgCgEIgBgFIgDADQgEAGgIADQgGADgJAAQgJAAgIgDgAAPABIgKADIgLACQgJABgCABQgEACgCADQgBAEAAADQAAADABAEQACADAEACQAEABAFAAQAGAAAFgCQAHgEACgEQAEgFAAgHIAAgLIgBABg");
	this.shape_64.setTransform(59.15,8.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A1B1B").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_65.setTransform(52.175,6.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1A1B1B").s().p("AglAuIAAgOIAxg9IgCAAIguAAIAAgQIBIAAIAAAOIgwA9IAyAAIAAAQg");
	this.shape_66.setTransform(42.225,8.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1A1B1B").s().p("AgWAqQgKgFgGgMQgFgLAAgOQAAgMAFgMQAGgLAKgGQAKgGAMAAQANAAALAHQAKAFAFAMQAFAKAAANIAAAHIhEAAQABAHACAFQADAHAGADQAFADAIABQAGAAAEgCQAEgCADgEQADgCACgGIATAAQgCAKgGAGQgFAIgJADQgIAEgLAAQgNAAgKgGgAgMgcQgGAEgDAGIgDALIAwAAQAAgGgCgFQgDgGgGgEQgGgDgHAAQgHAAgFADg");
	this.shape_67.setTransform(33.225,8.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1A1B1B").s().p("AgYArQgHgDgEgIQgEgHAAgLIAAg8IAUAAIAAA5QAAAHACAEQACAEAEACQAGACAEAAQAFAAAEgDQAGgCADgGQADgGAAgHIAAg0IAUAAIAABbIgTAAIAAgOIgEAFQgDAEgIAEQgGADgHAAQgKAAgHgEg");
	this.shape_68.setTransform(23.3,8.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A1B1B").s().p("AgXAqQgKgFgGgMQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGAMAAQAOAAAKAGQAKAGAGALQAGALAAANQAAAOgGALQgHANgJAEQgKAGgOAAQgMAAgLgGgAgNgbQgFAFgEAGQgDAHAAAJQAAALADAGQAEAHAFAEQAGADAHABQAIgBAGgDQAGgEADgHQADgGAAgLQAAgJgDgHQgDgGgGgFQgGgDgIAAQgHAAgGADg");
	this.shape_69.setTransform(13.175,8.35);

	var maskedShapeInstanceList = [this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(8.6,0,250.70000000000002,37.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Egh3ADLIAAmVMBDvAAAIAAGVg");
	mask_4.setTransform(216.825,20.25);

	// Ebene_3
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgnCgIAAj2IhEAAIAAhJIDXAAIAABJIhEAAIAAD2g");
	this.shape_70.setTransform(422.825,23.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAgCgIhJi9IABC9IhLAAIAAk/IBUAAIBJDFIAAgOIgBi3IBLAAIAAE/g");
	this.shape_71.setTransform(398.275,23.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAxCgIgLg1IhOAAIgLA1IhQAAIBOk/IBmAAIBTE/gAgChSIgHAnIgQBUIAxAAIgZiDg");
	this.shape_72.setTransform(372.35,23.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAgCgIhJi9IABC9IhLAAIAAk/IBUAAIA0CEQAKAcAFATIAGATIgBjGIBLAAIAAE/g");
	this.shape_73.setTransform(346.425,23.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhfCgIAAk/IC/AAIAABJIhvAAIAAAzIBkAAIAABFIhkAAIAAA2IBvAAIAABIg");
	this.shape_74.setTransform(322.825,23.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgnCgIAAj2IhEAAIAAhJIDXAAIAABJIhEAAIAAD2g");
	this.shape_75.setTransform(300.425,23.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAgCgIhJi9IABC9IhLAAIAAk/IBUAAIA0CEQAKAcAFATIAGASIgBjFIBLAAIAAE/g");
	this.shape_76.setTransform(275.875,23.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgnCgIAAk/IBPAAIAAE/g");
	this.shape_77.setTransform(257.35,23.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAxCgIgLg1IhOAAIgLA1IhQAAIBOk/IBnAAIBSE/gAgaApIAyAAIgYiEg");
	this.shape_78.setTransform(239.025,23.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABKCgIACjzIgsDzIhAAAIgrjxIABDxIhKAAIAAk/IB1AAIAfDIIAgjIIB1AAIAAE/g");
	this.shape_79.setTransform(209.875,23.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAgCgIgDgLIgCgPIgBgrQgBgRgEgLQgCgJgIgDQgIgEgLAAIgYAAIAABxIhQAAIAAk/IByAAQAnAAAZAKQAXALAKAVQAJATAAAfQAAAcgJASQgJATgTAIIgJAEIAIADQARAIAIAPQAHARACAcIAEA8IACAKIADAJgAgggOIAcAAQAJAAAIgEQAHgDADgJQAEgHAAgRQAAgQgEgHQgDgIgHgEQgGgEgLAAIgcAAg");
	this.shape_80.setTransform(173,23.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhfCgIAAk/IC/AAIAABJIhvAAIAAAzIBkAAIAABFIhkAAIAAA2IBvAAIAABIg");
	this.shape_81.setTransform(149.725,23.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgxCgIhNk/IBTAAIAtDzIAsjzIBRAAIhKE/g");
	this.shape_82.setTransform(126.225,23.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAgCgIgDgLQgCgGAAgJIAAgDIgCgoQAAgRgEgLQgDgJgHgDQgIgEgMAAIgXAAIAABxIhQAAIAAk/IBxAAQApAAAXAKQAXALAKAVQAKATAAAfQAAAcgJASQgJATgUAIIgJAEIAJADQARAIAIAPQAHAQACAdIAEA8IACAKQABAGACADgAgggOIAcAAQAJAAAIgEQAHgDADgJQADgHAAgRQAAgQgDgHQgDgIgHgEQgGgEgLAAIgcAAg");
	this.shape_83.setTransform(102.725,23.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhfCgIAAk/IC/AAIAABJIhvAAIAAAzIBkAAIAABFIhkAAIAAA2IBvAAIAABIg");
	this.shape_84.setTransform(79.425,23.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag8CbQgagMgMgXQgNgYgBgnIBNAAQACASADALQAFAKAHADQAIAEAKAAQALAAAHgDQAGgCADgGQAEgFAAgIQAAgMgFgHQgDgIgJgGQgKgHgMgFIgdgLQgWgIgPgMQgQgMgJgTQgIgTgBgbQAAgbAMgUQAKgVAZgLQAXgMAmAAQAiAAAZALQAYAKAMAXQAMAXABAkIhKAAQgBgPgDgJQgCgIgIgFQgHgEgLAAQgJAAgGADQgHADgDAFQgDAEAAAIQAAAIAEAIQAEAIAGAFIAUAMIAbALQAbAJAQANQARALAJATQAJAUAAAZQAAAggNAWQgNAVgZALQgYALgkAAQgmAAgYgLg");
	this.shape_85.setTransform(56.6,23.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhfDHIAAk+IC/AAIAABJIhvAAIAAAyIBkAAIAABFIhkAAIAAA2IBvAAIAABIgAggiJIAZg+IBXAAIg1A+g");
	this.shape_86.setTransform(34.225,19.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAgCgIgEgLQgBgGAAgJIgBgDIgBgoQgBgRgDgLQgDgJgHgDQgJgEgLAAIgXAAIAABxIhQAAIAAk/IBxAAQApAAAXAKQAXALAKAVQAJATAAAfQABAcgKASQgJATgSAIIgJAEIAIADQARAIAIAPQAHASACAbIADA8IACAKQACAGACADgAgggOIAcAAQAKAAAGgEQAHgDAEgJQADgHAAgRQAAgQgDgHQgEgIgHgEQgGgEgLAAIgbAAg");
	this.shape_87.setTransform(11.3,23.9);

	var maskedShapeInstanceList = [this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,433.7,40.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhOHAgCMAAAhADMCcPAAAMAAABADg");
	mask_5.setTransform(500,205);

	// Ebene_3
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("EhElAalQlCgyj7hkIAAsSQF5B7FBA9QFAA8ETAAQFLAACdhHQCehGAAiUQAAiajBhKQh4gulggyQksgsiXgjQj/g8iphhQm1j6ABpEQABmkEAkPQFwmENOAAQJGAAKoDCIAAMQQlJhpkfg/Ql2hRkNgBQjlABiHA2QizBIAAChQgBCbDGBMQB6AuFmA0QEyArCZAkQECA8CsBhQG7D6AAJAQAAIjmNEPQmOEOsqAEQmTAAlCgxgEAwKAaDMAAAgnfIsAAAIqWOnITvY4IyvAAIq9u7IrhO7Mgg7AAAMAAAggMIOxAAIAAfsIUJ4ZIoIp/QBsglBsgvQEvh/FDkIIEgGdIL/wZMAySAAAIAAMwIu5AAMAAAAnfg");
	this.shape_88.setTransform(499.9999,235);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF5000").s().p("A36MuIAAseICXABQGOAADagbQIfhEE7i/QE9i+CeliIPBAAQiXHkk7FaQk6FbnQDFQlMCOmUA/QkzAwlGAAg");
	this.shape_89.setTransform(470.1,81.425);

	var maskedShapeInstanceList = [this.shape_88,this.shape_89];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,1000,410), null);


(lib.box_orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_orange, new cjs.Rectangle(0,0,300,250), null);


(lib.blitz_retina_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.blitz_retina();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blitz_retina_1, new cjs.Rectangle(0,0,80,31), null);


(lib.bild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.bild_retina();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bild, new cjs.Rectangle(0,0,300,164), null);


(lib.text2_vektor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(129.7,18.9,1,1,0,0,0,129.7,18.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1B1B").s().p("AgoA/IAAh9IAVAAIAABqIA8AAIAAATg");
	this.shape.setTransform(4.125,6.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2_vektor, new cjs.Rectangle(0,0,259.3,37.9), null);


(lib.text1b_vektor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(206.5,21.9,1,1,0,0,0,206.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1b_vektor, new cjs.Rectangle(0,0,413,44), null);


(lib.text1_vektor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(198.2,37.9,1,1,0,0,0,198.2,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1_vektor, new cjs.Rectangle(0,0,396.5,75.8), null);


(lib.sixt_pos_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0,1,1,0,0,0,500,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixt_pos_logo, new cjs.Rectangle(-499.5,-205,1000,410), null);


(lib.sixt_neg_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0,1,1,0,0,0,500,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixt_neg_logo, new cjs.Rectangle(-499.5,-205,1000,410), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-1.4,0.38,0.38,0,0,0,216.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().rr(-103.4,-26.6,206.8,53.2,7);
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-103.3,-26.6,206.7,53.2), null);


// stage content:
(lib.Sixt_EV_300x250_Tesla_3_FR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:4});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNum=1;
	}
	this.frame_14 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 500);
	}
	this.frame_74 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 500);
	}
	this.frame_84 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 1000);
	}
	this.frame_104 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 1000);
	}
	this.frame_109 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 500);
	}
	this.frame_134 = function() {
		this.stop();
		var _scope = this;
		
		setTimeout(function() {
		exportRoot.play();
		}, 500);
	}
	this.frame_164 = function() {
		this.stop();
		var _scope = this;
		
		if (this.loopNum < 2) {
			  setTimeout(function() {
			_scope.getStage().getChildAt(0).play(); 
		  }, 2000);
		  this.loopNum++;
		
		} else {
			this.stop();
			this.hg_ani.gotoAndStop(1);
		}
	}
	this.frame_194 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(60).call(this.frame_74).wait(10).call(this.frame_84).wait(20).call(this.frame_104).wait(5).call(this.frame_109).wait(25).call(this.frame_134).wait(30).call(this.frame_164).wait(30).call(this.frame_194).wait(1));

	// sixt_pos_logo
	this.instance = new lib.sixt_pos_logo();
	this.instance.parent = this;
	this.instance.setTransform(150.15,119.15,0.22,0.22,0,0,0,1.2,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({alpha:1},15).wait(1));

	// box_orange
	this.instance_1 = new lib.box_orange();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).to({alpha:1},15).wait(16));

	// maske (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_134 = new cjs.Graphics().p("AqPC1QgUgBgNgNQgOgNAAgVIAAAAIAAkJQAAgOAGgKQAHgLAKgGQALgHANAAIAAAAIUfAAQANAAALAHQAKAGAHALQAGAKAAAOIAAAAIAAEJQAAAOgGAKQgHALgKAGQgLAHgNAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_graphics_134,x:150.0174,y:207.6498}).wait(61));

	// schein
	this.instance_2 = new lib.schein();
	this.instance_2.parent = this;
	this.instance_2.setTransform(46.85,211.4,0.6803,0.6803,14.9987,0,0,24.4,97.5);
	this.instance_2.alpha = 0.6016;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(40, 40, 1)];
	this.instance_2.cache(-2,-2,52,199);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({regX:24.2,x:254.25,y:211.35,alpha:0.5898},30,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// cta
	this.instance_3 = new lib.cta();
	this.instance_3.parent = this;
	this.instance_3.setTransform(220.4,243.6,0.6803,0.6803,0,0,0,103.5,26.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({y:225.9,alpha:1},10,cjs.Ease.get(1)).wait(61));

	// scheinwerfer
	this.instance_4 = new lib.scheinwerfer_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(192.1,127.7,1,1,0,0,0,150.1,71.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).wait(81));

	// text2
	this.instance_5 = new lib.text2_vektor();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.45,217.3,0.9103,0.9103,0,0,0,131.2,28.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({alpha:1},10).wait(10).to({alpha:0},10).to({_off:true},1).wait(70));

	// text1b
	this.instance_6 = new lib.text1b_vektor();
	this.instance_6.parent = this;
	this.instance_6.setTransform(124.4,221.25,0.3942,0.3942,0,0,0,145.6,15.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(100));

	// text1a
	this.instance_7 = new lib.text1_vektor();
	this.instance_7.parent = this;
	this.instance_7.setTransform(126.1,209.1,0.4037,0.4037,0,0,0,146.4,67.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({alpha:1},10).wait(10).to({alpha:0},10).to({_off:true},1).wait(100));

	// sixt_pos_logo
	this.instance_8 = new lib.sixt_pos_logo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.15,119.15,0.22,0.22,0,0,0,1.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({alpha:0},15).to({_off:true},1).wait(165));

	// box_orange
	this.instance_9 = new lib.box_orange();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:382},15,cjs.Ease.get(-1)).to({y:464},15,cjs.Ease.get(1)).wait(136));

	// blitz_retina
	this.instance_10 = new lib.blitz_retina_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(267.5,28.5,1,1,0,0,0,60.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(195));

	// sixt_neg_logo
	this.instance_11 = new lib.sixt_neg_logo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(44.95,18.5,0.055,0.055,0,0,0,2.8,1.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(181));

	// bild
	this.instance_12 = new lib.bild();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,167.5,1,1,0,0,0,150,167.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,150,289);
// library properties:
lib.properties = {
	id: 'CD606298444F414CB069AD860B3D4D87',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_P_.png", id:"Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_P_"},
		{src:"images/Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_NP_.jpg", id:"Sixt_Rent_EV_300x250_Tesla_3_FR_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD606298444F414CB069AD860B3D4D87'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;