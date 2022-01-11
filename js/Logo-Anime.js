(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Logo_Anime_atlas_1", frames: [[0,0,640,480],[0,482,640,480],[642,0,263,264],[642,266,259,40]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(ss["Logo_Anime_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG01 = function() {
	this.initialize(ss["Logo_Anime_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.initialize(ss["Logo_Anime_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Type = function() {
	this.initialize(ss["Logo_Anime_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAzGQgUgLgLgUQgMgVAAgYQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAAXgKATQgKASgRANIAAUsIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgArRJvQgagbAAglQAAgbAPgXQAOgVAYgLIAA0EIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgaQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAASzQAbAZAAAmQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-130,260.1,260);


(lib.Type_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Type();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Type_1, new cjs.Rectangle(0,0,259,40), null);


(lib.Logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(0,0,263,264), null);


(lib.BG01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG01_1, new cjs.Rectangle(0,0,640,480), null);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(0,0,640,480), null);


// stage content:
(lib.LogoAnime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [124];
	// timeline functions:
	this.frame_124 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(1));

	// Text
	this.instance = new lib.Type_1();
	this.instance.setTransform(787.5,391,1,1,0,0,0,129.5,20);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({x:312.5},10,cjs.Ease.get(-1)).wait(1));

	// Logo1
	this.instance_1 = new lib.Logo_1();
	this.instance_1.setTransform(310.5,223.05,1,1,0,0,0,131.5,132);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({alpha:1},23).wait(11));

	// Logo2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyQJ/IgKgLQBBgIAwgXQAUgJAfgVIAAAIQAAAlgbAbQgaAagmAAQglAAgagagAQHp9QAagbAmAAQAlAAAaAbQAOANAHARQgdAAgcADQgkACg3AHIgYADQAFgaATgTg");
	this.shape.setTransform(308.7625,219.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyLJ/QgagbAAglIAAAAQBKgjBAgpQAJAGAIAIQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagAQMn/QgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARIACAEIgIADIgqALIgrAKIgvAIIgJgIg");
	this.shape_1.setTransform(308.225,219.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AycJ/QgbgbAAglQAAgSAIgSIgPgkQAqgJA2gUIAFAMQAkABAZAaQAaAaAAAkQgBAlgaAbQgbAaglAAQglAAgagagAQ4nkQglgBgZgaQgZgagBglQABglAagaQAagbAlAAQAmAAAaAbQAbAagBAlQAAASgHARQAcA8AWA9Qg0AFgxAHQgQgngSgng");
	this.shape_2.setTransform(310,219.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AybJ/QgagbAAglQAAgSAIgSQgdhBgVhCIAXgCQAhgEAtgGQAQAtATAtQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagATFlEIg7gIIgXgEQgXhLgihJQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQAzBrAeBwIgbgEg");
	this.shape_3.setTransform(309.8375,219.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AyYJ/QgbgbAAglQAAgSAIgSQgxhwgbh0IAZAAQAsAAAhgGQAWBcAmBZQAkABAaAaQAZAaAAAkQAAAlgbAbQgaAagmAAQglAAgagagASqjlIgYAAQgciDg5h8QglgBgagaQgZgaAAglQAAglAagaQAagbAmAAQAlAAAaAbQAbAaAAAlQAAASgIARQBICYAfCiQgkgEgqAAg");
	this.shape_4.setTransform(309.575,219.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AyWJ/QgagbAAglQAAgSAIgSQhHihgZiqIALAAQA5gCAggFQAXCSA7CLQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagAS4iBIgTABQgXi5hPirQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQBeDHAXDXQgWgEg7AAg");
	this.shape_5.setTransform(309.3375,219.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AyUJ/QgbgbAAglQAAgSAIgSQhajMgQjbIBjgUQANDKBQC8QAkABAaAaQAZAaAAAkQAAAlgbAbQgaAagmAAQglAAgagagATVggIgogJQgKjnhijUQglgBgagaQgZgaAAglQAAglAagaQAagbAmAAQAlAAAaAbQAbAaAAAlQAAASgIARQB2D5AHESQgYgHglgJg");
	this.shape_6.setTransform(309.1875,219.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRIAAgDQAzAEAxgDIAAACQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagAT3BMIgpgLIgegLIAAgmQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAAigBAhIgcgHg");
	this.shape_7.setTransform(309.025,219.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRQAAg9AGg9IACABQAiANAVAFQAQAEAZADQgEAwAAAwQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagATBCuIgagDQAJhMAAhPQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAABXgLBVQgigHgmgHg");
	this.shape_8.setTransform(309.025,219.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRQAAh1AUhxQAdALAZAHQAWAGAVADQgRBkAABnQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagASwEaIgcgGQAch/AAiFQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAACPgeCIQgsgHgagGg");
	this.shape_9.setTransform(309.025,219.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRQAAikAoicQAhAFAnABIAeAAQgqCZAAChQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagASwF6QgUgQgagPQAuigAAirQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAADLg9C+QgVgTgSgMg");
	this.shape_10.setTransform(309.025,219.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRQAAjfBJjPIAHABQAcAEA/ATQhHDEAADSQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagARkG0QBMjJAAjbQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAD9heDpIhShCg");
	this.shape_11.setTransform(309.025,219.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AyTJ/QgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyIAHgPIAqAUQANAGAhAVIgCAHQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagASKI7IgsgOQgRgGgVgLQANgcANgeQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyIgZA2IgLgFg");
	this.shape_12.setTransform(309.025,219.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ARNKpQgzgbgggUQAyhRAmhZQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQgoBfg2BVIgDgCgAyTJtQgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQAWgzAZgwIADAEIAzA/IAOAVIgWAyQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_13.setTransform(309.025,221.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AP3LDQgVgZgSgjQBNhsA1h8QBejfAAjzQAAkGhujvQglAAgZgbQgagZAAgmQAAgkAbgbQAagbAlAAQAlAAAbAbQAaAbAAAkQAAASgHARQB9EIAAEkQAAEIhmDxQhACWhhCAgAyTI7QgagaAAgmQAAgRAIgTQhuj6AAkQQAAkHBmjyQAjhTAuhNIA6AlIAbARQgpBFggBLQhfDgAADzQAAD0BgDhQAkABAZAaQAZAbAAAjQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_14.setTransform(309.025,226.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AOpLxQgLgfgKgTIgDgGQB4iMBJirQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhZDRibCnIgRgwgAyTIeQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQAwhyBDhlIBZAvQhBBhguBtQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_15.setTransform(309.025,229.1375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ANiMdIgIgfQCfiiBZjRQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0IgbAaQgOgigMgqgAyTInQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBEihBriHIAiAUIA0AeIABABQhoCBhBCaQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_16.setTransform(309.025,228.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AMLNmIgMgUQAqgjAngoQCnimBbjXQBejfAAjzQAAkGhujvQglAAgZgbQgagZAAgmQAAgkAbgbQAagbAlAAQAlAAAbAbQAaAbAAAkQAAASgHARQB9EIAAEkQAAEIhmDxQhjDpi0C0QgwAwg0AqgAyTImQgagaAAgmQAAgRAIgTQhuj6AAkQQAAkHBmjyQBUjGCPigIA9AdIAhAQQiRCbhTDEQhfDgAADzQAAD0BgDhQAkABAZAaQAZAbAAAjQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_17.setTransform(309.025,228.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ALtPaQglgdgbgdQBXg9BMhMQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0QhKBKhTA9IgNgKgAyTI2QgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0IAUgUIAYANQAhARAgAYIgmAlQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_18.setTransform(309.025,226.7875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AKuQCQgTgFgZgSIgagSQB+hMBqhqQCnimBbjXQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0QhZBYhlBFIgEAAQgXAAgQgFgAyTJCQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBjjqC0i0QAjgjAmggIANAMQANAKATAKIAjASIAKAFQgwAngsAsQimCmhbDXQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_19.setTransform(309.025,225.5396);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AI8RHQgDgOgMgZQgMgagEgNIgBgDQCrhWCJiJQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0QiZCZi/BfIgDgOgAyTI2QgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0QBJhJBSg8IAMAIQAzAeAcAMIAHADQhhBChVBVQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_20.setTransform(309.025,226.7875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AG1Q3QAAgTgCgPIAggNQDXhbCmimQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0Qi0C1jpBiQgoARgoAOQAKglABgngAyTImQgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0QBdhdBqhGIADACIBLBCQhvBGhfBgQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_21.setTransform(309.025,228.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AEqRUIAAgmQBWgWBTgjQDXhbCminQCnimBbjXQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0Qi0C0jpBjQhqAthvAZQAHgdACgmgAyTISQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBjjqC0i0QBdhcBqhHIADADIBLBBQhvBHhfBfQimCmhbDXQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_22.setTransform(309.025,230.3375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AEqRuIAAgmQBWgWBTgjQDXhbCminQCnimBbjXQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0Qi0C0jpBjQhqAthvAZQAHgdACgmgAyTIsQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBjjqC0i0QCBiACbhXQAPARAMAMQAaAaAbAPQiiBViDCDQimCmhbDXQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_23.setTransform(309.025,227.7125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ACeTAQAAgfACgNIAFglQCbgWCTg+QDXhbCmimQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0Qi0C1jpBiQipBIi0AWIABgVgAyTI5QgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0QCninDUhhIANAYQAQAhAUAfQjIBaidCdQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_24.setTransform(309.025,226.4625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgETlQAXgpAGg7QDmgFDUhaQDXhbCmimQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0Qi0C1jpBiQjyBnkIAAIgEAAgAyTJAQgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0QC0i0DphjIAUgIIANAPQAIAKAWAoIAMAVIgkAOQjXBbimCnQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_25.setTransform(309.025,225.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AisTjIACgHQAQg0AIgmQBJAIBJAAQD0AADfheQDXhbCminQCnimBbjXQBejfAAjzQAAkGhujvQglAAgZgbQgagZAAgmQAAgkAbgbQAagbAlAAQAlAAAbAbQAaAbAAAkQAAASgHARQB9EIAAEkQAAEIhmDxQhjDpi0C0Qi0C0jpBjQjyBmkIABQhXAAhVgMgAyTJJQgagaAAgmQAAgRAIgTQhuj6AAkQQAAkHBmjyQBjjqC0i0QC0izDphjQAjgPAkgNIADAHIAOAdQADAHADAOIAFAXIAFAOQggAMghAOQjXBbimCnQimClhbDXQhfDgAADzQAAD0BgDhQAkABAZAaQAZAbAAAjQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_26.setTransform(309.025,224.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkeTZQAGgdAHgpIADgdQCEAeCKAAQD0AADfheQDXhbCminQCnimBbjXQBejfAAjzQAAkGhujvQglAAgZgbQgagZAAgmQAAgkAbgbQAagbAlAAQAlAAAbAbQAaAbAAAkQAAASgHARQB9EIAAEkQAAEIhmDxQhjDpi0C0Qi0C0jpBjQjyBmkIABQiTAAiLgggAyTJTQgagaAAgmQAAgRAIgTQhuj6AAkQQAAkHBmjyQBjjqC0i0QC0izDphjQBBgcBCgTQAGAZAJAYQAJAaAMASQhBATg/AbQjXBbimCnQimClhbDXQhfDgAADzQAAD0BgDhQAkABAZAaQAZAbAAAjQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_27.setTransform(309.025,223.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AmhS9IANAAQAdgDASgaQATgagHgbQCnAyCyAAQD0AADfheQDXhbCminQCnimBbjXQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0Qi0C0jpBjQjyBmkIAAQjZAAjIhEgAyTJcQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBjjqC0i0QC0i0DphiQBhgpBjgYQgDAsAAA7QhOAWhMAgQjXBbimCmQimCmhbDXQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_28.setTransform(309.025,222.9125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AobSVIAOgGQAQgKAIgRQAIgPAAgTQgBgNgFgMIAIAEQDqBqEBAAQD0AADfhfQDXhbCmimQCnimBbjYQBejfAAjyQAAkHhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAElQAAEHhmDxQhjDpi0C0Qi0C1jpBiQjyBnkIAAQkdAAj+h2gAyTJmQgagbAAglQAAgSAIgTQhuj5AAkQQAAkIBmjyQBjjpC0i0QC0i0DphjQCLg7CSgZIAAAdQABAlgBAkQh+AXh4AzQjXBbimCnQimCmhbDXQhfDfAAD0QAAD0BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_29.setTransform(309.025,221.9875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ap3RqQgdgQgcgRQALgBAKgFQAQgHAKgNQAKgMAEgSQACgMgCgMQBBAoBHAgQDqBqEBgBQD0AADfheQDXhbCminQCnimBbjXQBejfAAjzQAAkGhujvQglAAgZgbQgagZAAgmQAAgkAbgbQAagbAlAAQAlAAAbAbQAaAbAAAkQAAASgHARQB9EIAAEkQAAEIhmDxQhjDpi0C0Qi0C0jpBjQjyBmkIABQlRAAkmilgAyTJpQgagaAAgmQAAgRAIgTQhuj6AAkQQAAkHBmjyQBjjqC0i0QC0izDphjQCjhFCtgWIAAAGQABAVAKAmIAHAhQiiAUiZBBQjXBbimCnQimClhbDXQhfDgAADzQAAD0BgDhQAkABAZAaQAZAbAAAjQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_30.setTransform(309.025,221.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ap3RuQinheiCiFQBXAZBmALQByBZCGA8QDqBqEBAAQD0AADfheQDXhbCminQCnimBbjXQBejfAAjzQAAkHhujuQglAAgZgbQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EIAAEkQAAEHhmDyQhjDpi0C0Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJtQgagaAAgmQAAgSAIgSQhuj6AAkQQAAkIBmjxQBjjqC0i0QC0i0DphiQDFhUDTgPQgEASAAAcIADA2Qi+AQiyBLQjXBbimCmQimCmhbDXQhfDfAAD0QAAD0BgDhQAkABAZAaQAZAaAAAkQAAAmgaAaQgbAaglAAQglAAgbgag");
	this.shape_31.setTransform(309.025,221.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ap3RvQjkh/ifjJQAngSBCgGIACACQAPAPAXAIIgMAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhbCmimQCnimBbjYQBejfAAjzQAAkGhujuQglgBgZgaQgagaAAglQAAglAbgbQAagaAlAAQAlAAAbAaQAaAbAAAlQAAARgHASQB9EHAAEkQAAEIhmDxQhjDpi0C0Qi0C1jpBiQjyBnkIAAQlRAAkmilgAyTJvQgagbAAglQAAgSAIgTQhuj5AAkRQAAkHBmjyQBjjpC0i0QC0i0DphjQDmhhD6gFIgDAPIgRBWQjbAIjKBVQjXBbimCnQimCmhbDXQhfDfAADzQAAD1BgDgQAkACAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_32.setTransform(309.025,221.0625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIAuABQgFAKgCAKQgCAQAFAQQAEAPALAMQAPAPAXAHIgMAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAIAjAAQgQAugPA2IgEAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_33.setTransform(309.025,221.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIE4ABQgGAHgEAHQgKASABAUQACAUAMAQQAGAIAGAFIjsAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQBHAABFAHIgDAJIghBZQgzgFg1AAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_34.setTransform(309.025,221.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIGxACIAABQIgBAUIldAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQBmAABjAPQgNAhgIAbIgLAlQhTgMhWAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_35.setTransform(309.025,221.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgBheQA6AHAqgCIAAC9InKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQCGAACAAaIgVAlQgRAggKAYQhpgThtAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_36.setTransform(309.025,221.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgBjSIApABIA7ACIAAEzInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQCwAAClAtQgGAIgHAMIgiA5IgHAMQiMgiiTAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_37.setTransform(309.025,221.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgBlQQAQgBAdgHQAXgDAgAAIAAG/InKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQDdAADLBGIgYBBIgJAfQi8hCjLAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_38.setTransform(309.025,221.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgCnQIBlAAIAAI0InKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQEPAADzBqQgTAsgQAyQjkhkj7AAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_39.setTransform(309.025,221.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgCpAQAngDA+gJIAAKwInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQE8AAEWCQIgGAJQgPAegQA2IAAABQgggRghgPQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_40.setTransform(309.025,221.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgCq6IBlgEIAAMiInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQAjAUAiAWQgpAZgtAnQg6gig+gcQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_41.setTransform(309.025,221.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgDskIAqAAQAgAAAcgCIAAOKInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQBOAsBGA0IgVALQgpAXgdAYQhbhAhnguQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_42.setTransform(309.025,221.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgDubQAnADAeAAIAZAAQABAaAEAdIAIArIACAOIgHgOIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQB4BDBlBXQgOAIgUANQgiAVgVAPQh6hliThCQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_43.setTransform(309.025,221.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIgDwJIAYgBQAYAAAwAEIAZACQgPAUgHAVQgGAXABAlQAAAdAFAhIAIArIACAOIgHgOIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQClBdCCCDIgDABIhbAhIgLAEQiQiIi3hSQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_44.setTransform(309.025,221.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIAqBxQgVAZgJAbQgGAXABAlQAAAdAFAhIAIArIACAOIgHgOIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQDYB4CaC7IgTAGIgkAMQgYAIgRAIQgUgWgYgRQieikjRheQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_45.setTransform(309.025,221.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBxEtQgaAZgNAXQgQAbgGAoIglhWIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCIgGAAQgkhRhBgtQieikjRheQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_46.setTransform(309.025,221.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIAxBzQgQAUgUAaQgXAegHASIgBACIhGigIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCIiIAAQgHgegMgfQgJgUgJgRIBdAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_47.setTransform(309.025,221.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIBdDXQgXATgNAMQgZAYgOAYIhqjzIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCIkKABQgIgvgOg0IDQAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_48.setTransform(309.025,221.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXICFE0IgQAKIggAUQgWAPgMARIiLk/IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCIlpACIgBg7QABgTgCgOIgCgIIEdAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_49.setTransform(309.025,221.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXID7JHIgIAFQgOAIgaAWQgUARgMAPIkDpXIAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIggBRIgFgFQgmgdgwgIIA4iLIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_50.setTransform(309.025,221.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEVKEIgNATQgRAZgGAUQgGASACATIgZAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIg6CSQgbgMgegGQgVgEgUgCIBZjeIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_51.setTransform(309.025,221.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGIANAAIAFAQQAIAXASAYQAQAWAQAOIiOAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIhhD0IgOgGQgRgHgmgHIgdgFICAk/IHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_52.setTransform(309.025,221.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGIBhAAQAIAgAPAfQALAXANANIjSAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIiLFcQgfgLgUgCQgMgBgnABICumzIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_53.setTransform(309.025,221.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIAKgaIALAOQAZAZAwAVIgaBBIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIi1HFQghgQgngGIgZgEIDToPIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_54.setTransform(309.025,221.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIAziCQAUAdARAPQANALAdASIg+CcIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIjeIpIgLgEQgsgRgrgBID9p3IHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_55.setTransform(309.025,221.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIBqkLIAAABQAXA3AsAgIAEAEIhtESIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIkKKYIgFgFQgVgNghgBIgcAAIgNABIErrqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_56.setTransform(309.025,221.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAICZmCQAFAdAPAaQARAdAdAWIiXF7IkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIk7MTQgKgXgSgQQgPgNghgPIgEgCIFIsyIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_57.setTransform(309.025,221.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIDPoIQgMAxAFAfQAIAwAjATIALAFIi6HTIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACIl2OmIABgCQAGgTgBgOQAAgUgLgQQgMgSgRgJQgPgHgRABIF1uiIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_58.setTransform(309.025,221.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIDaojQADAJAFAHQALAQAQAIQARAHATgBQALgBAJgEIjxJdIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACImlQcIgBgCQgIgagMgcIgRgkQACgOgBgTIgBgxIGIvSIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_59.setTransform(309.025,221.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBTjnIgLBvQgJBSAFA1QACAbAIAhIkKKaIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIg7iKQATgBARgMQARgNAIgTQAGgRgBgjIgBgxIGIvSIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_60.setTransform(309.025,221.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBlkXIgBASQACAyAXAxQASAkAbAdIgNAOQgMASgVAgQgRAbgHAQQgHAQgCAPIkXK8IkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIhvkBIAKAAQAWAAARgMQASgNARgiIAXA4IGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_61.setTransform(309.025,221.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgBCzQgVARgUAZQgMASgVAgQgRAbgHAQQgHAQgCAPIkXK8IkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIiOlJQASABAQgIQAQgJAUgZIAOgSIA2CAIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_62.setTransform(309.025,221.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgCFWIgQABQg3AEgfAfIAAgqIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIismPQANADANgCQAfgFAigmIBNC1IGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_63.setTransform(309.025,221.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgDHFIgCgBQgagFgYADQgaAEgUALIgDACIAAiDIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIjKnTQATgBAPgKQAMgHAQgUIAUgXIB0EMIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_64.setTransform(309.025,221.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEIwQgVgMgPgEQgkgKgbAMIgBAAIAAjSIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIjmoTQAOACAOgDQAZgGAiggIADgEICIE6IGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_65.setTransform(309.025,221.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEKaIgbgUIgZgQQgPgJgNgDQgKgCgKAAIAAkYIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIkFpbQAWgBARgNQAKgIAKgOIARgZIAEgFICxGZIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_66.setTransform(309.025,221.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAAGXIgHABQgJAAgPAAIgYAAQgZAAgUAGIAAmPIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIkqqwQAWAAASgMQAHgFATgVIATgSIDRHkIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_67.setTransform(309.025,221.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAAISIgFgGQgZgigKgKQgZgagjgKIAAmtIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIlQsIQAKABALgDQANgDAVgNQAVgMALgLIADgCIDyIvIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_68.setTransform(309.025,221.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAAJkQgUAJgKACQgdgggpgGIAAAAIAAo6IkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIlvtOQAjAOAhgPQANgHASgQIEIJiIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_69.setTransform(309.025,221.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAAKOIgIAGIglAaQgUANgTASQgKAJgGAIIAArPIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKImUulQANAFAQABQAoAEAigXIEpKuIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_70.setTransform(309.025,221.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIABAAIgDADQgOgYgYgPQgZgPgjgDIAAsPIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKInAwKIAcAIQATADAmACIAeABIFJL4IGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_71.setTransform(309.025,221.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIABAAQgGAIgHALQgNAagDAQQgCAVAGARIhMAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKInxx6IALgBIAjAAQAegBAdgGIGEN+IGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_72.setTransform(309.025,221.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIA9AAIABAEQAKAeAWAPQAWAPAxAAIAKAAIAAAjIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIgJAAQgEgogWgnIgOgVIBzAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_73.setTransform(309.025,221.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAhCQAMAMAPAEQAdAHApgRIADgCIAAChIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhZAAIgGgLQgVgmgtgWQgXgLgcgFIAAgNIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_74.setTransform(309.025,221.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAiZQAOAKAWAFQAXAFAfgBIAKAAIAADpIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAAjQgXgIglAAQgVgBgTACIAAiAIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_75.setTransform(309.025,221.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAjuQASAKAcAAQASAAAjgFIABAAIAAFMIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAACTQgUgTghgIQgSgDgdAAIAAjZIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_76.setTransform(309.025,221.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAkpQALALAOAFQAOAFAUAAIAjgCIAGAAIAAF5IkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAADzQgIgHgJgFQgTgKgigEIgegBIAAk8IEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_77.setTransform(309.025,221.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAl5QALAMARAFQASAGAdgDIAZgDIAAHLIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAFLQgIgJgKgGQgMgGgZgEQgbgGgSAAIAAmQIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_78.setTransform(309.025,221.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAnCQAIAHAKAEQAQAGAeAAIAkgBIAAIVIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAGkIgGgGQgdgTg7ACIgGABIAAnyIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_79.setTransform(309.025,221.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAoNQAHAGAJAEQAOAGATABQAKAAAXgBIASgDIAAJjIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAIEQgPgNgUgEQgQgDgpAGIgIAAIAApaIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_80.setTransform(309.025,221.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAptIANAIQANAGAWAGQAgAIAUADIAAKxIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAJhQgJgIgMgEQgRgHgYACIgmAEIAAq4IEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_81.setTransform(309.025,221.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAq6IAJAHQASAMApAAIAgAAIAAMKIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAALJQgPgPgVgFQgLgBgeABIgXgBIAAsYIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_82.setTransform(309.025,221.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAsHQAIALAMAGQAUALAegBIAegBIAANQIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAMjQgWgXgtAAIghACIAAtyIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgagAJTijIAFAEIgFAGg");
	this.shape_83.setTransform(309.025,221.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAtnQAHAFAIADQAPAFAhABIAlAAIAAO8IkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAANzQgQgUgXgFQgJgCggAAIgUAAIAAu8IEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_84.setTransform(309.025,221.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAvJQAJAKANAFQASAHAaAAQAQAAASgBIAAQXIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAO6QgKgLgPgHQgSgHgSADIgfAGIgIABIAAwPIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_85.setTransform(309.025,221.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAwLQAKAJANAEQAMAEAcAAIAlAAIAARdIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAAQCQgJgLgOgHQgNgFgTgCIgigCIgLgCIAAxJIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_86.setTransform(309.025,221.05);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAxpQAJAJANAFQAPAHAXAAIAoABIAAS2IkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAARHQgNgPgSgFQgKgDgQAAIgbABIgQgBIAAyUIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_87.setTransform(309.025,221.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAzDQARAGAmAHIAdAEIAQACIAAUTIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgAyTJvQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAASaQgLgCgTAAIhGAAIAAz8IEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_88.setTransform(309.025,221.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ap3RwQkdigixkUIB6ADIADADIG6ACIAAtXIgFkpIBZAAIBnEXIEWKGICCAAIEAqCIBukwIBZAAIgEFBIAANUIBLAAIAAzGQgUgLgLgUQgMgVAAgYQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAAXgKATQgKASgRANIAAUsIkTAAIAAuoIkbLFIkIAAIksq2IAAOaInKAAQCoC4DiBmQDqBqEBAAQD0AADfhfQDXhaCminQCnimBbjYQBejeAAj0QAAkGhujuQglgBgZgaQgagaAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAASgHARQB9EHAAEkQAAEIhmDyQhjDoi0C1Qi0C0jpBjQjyBmkIAAQlRAAkmikgArRJvQgagbAAglQAAgbAPgXQAOgVAYgLIAA0EIEWAAIGyPqIGSvqIHSAAQioi4jihmQjqhqkCAAQjzAAjfBfQjXBbimCmQimCmhbDXQhfDfAADzQAAD1BgDhQAkABAZAaQAZAaAAAkQAAAlgaAbQgbAaglAAQglAAgbgaQgagbAAglQAAgSAIgSQhuj6AAkRQAAkHBmjyQBjjpC0i0QC0i0DphiQDyhnEHAAQFQAAElCiQEbCeCyEQIh6AAIgCgCInfACInRSKIn4yKIhwAAIAASzQAbAZAAAmQAAAlgaAbQgbAaglAAQglAAgbgag");
	this.shape_89.setTransform(309.025,221.05);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(309,221.05);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_2}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({alpha:0},23).to({startPosition:0},10).wait(1));

	// Heart
	this.instance_3 = new lib.BG01_1();
	this.instance_3.setTransform(321,241,1,1,0,0,0,320,240);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).to({alpha:0.4297},23).to({regX:320.5,scaleX:1.0031,x:322},10).wait(1));

	// BG
	this.instance_4 = new lib.BG_1();
	this.instance_4.setTransform(321,241,1,1,0,0,0,320,240);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({alpha:1},23).to({x:320},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,917,481);
// library properties:
lib.properties = {
	id: '189D906E22D74F018055DE6DA57A86CE',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Logo_Anime_atlas_1.png", id:"Logo_Anime_atlas_1"}
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
an.compositions['189D906E22D74F018055DE6DA57A86CE'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;