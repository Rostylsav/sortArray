(function()
{
	/**
		* Creates a new Timer.
		* @constructor 
		* @param {obj} object whis property and value.
		* @property {function} action_of_timer function for timer.
		* @property {number} interval_of_timer interval for timer.
		*/	
	function Timer(obj)
	{

		this.action_of_timer = obj.callback;
		this.interval_of_timer = obj.interval;
		this.intervalIid = 0;
		
		/**
		* Function checks whether the timer is running.
		* @returns true or false.
		*/
		this.isRunning=function()
		{
			var is_running;
			if(this.intervalIid != 0)
			{
				is_running = true;
			}
			else
			{
				is_running = false;
			}
			return is_running;
		}
		/**
		* Defines a new function for timer.
		* @param {function} new function for timer.
		*/
		this.setAction = function(action)
		{
			if(this.isRunning())
			{
				this.stopChanging();
				this.action_of_timer=action;
				this.run();
			}
			else
			{
				this.action_of_timer=action;
			}
		}
		/**
		* Defines a new interval for timer.
		* @param {number} new interval for timer.
		*/
		this.setinterval = function(interval)
		{
			if(this.isRunning())
			{
				this.stopChanging();
				this.interval_of_timer=interval;
				this.run();
			}
			else
			{
				this.interval_of_timer=interval;
			}
		}
		/**
		* The function starts the timer.
		*/
		this.run = function()
		{
			this.intervalIid=setInterval(this.action_of_timer,this.interval_of_timer);
		}
		/**
		* The function stopChangings the timer.
		*/
		this.stopChanging = function()
		{
			clearInterval(this.intervalIid);
			this.intervalIid=0;
		}
		
	}
	window.Timer=Timer;
	
	
	
	
	/**
		* Creates a new animation of color.
		* @constructor 
		* @param {obj} object whis property and value.
		* @property {html element} element html element for animation.
		* @property {array} startCcolor  original color for animation.
		* @property {array} endColor the final color for animation.
		* @property {number} timeForChange time of animation.
		*/	
	function animateColor(obj)
	{
		this.element=obj.element;
		
		this.startColor = obj.startColor;
		
		this.endColor = obj.endColor;
		
		this.timeForChange = obj.time;
		
		this.array_color_to_chanje = [];
		
		this.frame=0;
		
		this.intervalIid = 0;
		this.frameCount = 0
		this.stepChengOfColor=[];
		
		/**
		* Counts the number of frames.
		* @returns {number} count of animation.
		*/
		this.setFrameCount = function()
		{
			this.frameCount = Math.floor(this.timeForChange / 30);
		}
		/**
		* Numbers by which changes color to animate.
		* @param {array} original color for animation.
		* @param {array}  final color for animation.
		* @returns {array} array of numbers by which changes color to animate.
		*/
		this.setChanjeStepOfColor = function()
		{
			this.stepChengOfColor[0] = ((this.startColor[0] - this.endColor[0]) / this.frameCount);
			this.stepChengOfColor[1] = ((this.startColor[1] - this.endColor[1]) / this.frameCount);
			this.stepChengOfColor[2] = ((this.startColor[2] - this.endColor[2]) / this.frameCount);
		}
		
		/**
		* Color for animation.
		*/
		this.setNewColorToShow = function(stup)
		{
			
			this.array_color_to_chanje[0] = (this.startColor[0] - Math.floor(this.stepChengOfColor[0]*this.frame));
			this.array_color_to_chanje[1] = (this.startColor[1] - Math.floor(this.stepChengOfColor[1]*this.frame));
			this.array_color_to_chanje[2] = (this.startColor[2] - Math.floor(this.stepChengOfColor[2]*this.frame));
			this.frame++;
		}
		/**
		* stopChangingt  animation.
		*/
		this.stopChanges = function()
		{
			clearInterval(this.intervalIid);
			this.intervalIid=0;
		}
		/**
		* Animation.
		*/
		this.changeColor = function()
		{
			var count = this.setFrameCount();
			
			if(this.frame < this.frameCount)
			{
				this.setNewColorToShow();
				this.element.style.backgroundColor = 'rgb(' + this.array_color_to_chanje[0] + ',' + this.array_color_to_chanje[1] + ','+ this.array_color_to_chanje[2] + ')';
			}
			else
			{
				this.stopChanges();
			}

		}
		/**
		* Start of animation.
		*/
		this.run = function()
		{
			this.setFrameCount();
			this.setChanjeStepOfColor();
			this.intervalIid=setInterval(this.changeColor.bind(this), 30);
		}
		
	}
	
	function init()
	{
		var color1 = new animateColor({element:document.getElementById('container1'), startColor:[113, 123, 90], endColor:[225, 50, 115], time:1500});
		var color2 = new animateColor({element:document.getElementById('container2'), startColor:[0, 0, 0], endColor:[225, 255, 255], time:2500});
		var color3 = new animateColor({element:document.getElementById('container3'), startColor:[32, 12, 123], endColor:[90, 155, 255], time:1000});
		var color4 = new animateColor({element:document.getElementById('container4'), startColor:[33, 122, 110], endColor:[178, 205, 55], time:2000});
		color1.run();
		color2.run();
		color3.run();
		color4.run();
	}
	window.init = init;
	
	
	/*
	function myBind(func, context /*, args*
	) {
	  var args = [].slice.call(arguments, 2);
	  if (typeof context == "string") {   // bind(obj, 'method', ...)
		args.unshift( func[context], func );
		return bind.apply(this, args);
	  }
	  return function() {
		var unshiftArgs = args.concat( [].slice.call(arguments) );
		return func.apply(context, unshiftArgs);
	  };
	}
*/
	//window.animateColor = animateColor;
	Function.prototype.myBind = function(context){return this.call(context);}
		
	//function callMethodOfObject (method, context){
	//	return function (){return method.call(context)};
	//}
	//window.callMethodOfObject = callMethodOfObject;
	
	
	
	
	
	
	/*
		var obj1 = {
		   name:'rostyk',
		 }

		var obj2 = {
		   name:'ivanka',
		 }

		var sayName = function(){return this.name;}

		
		Function.prototype.myBind = function(context){return this.call(context);}
		
		sayName.myBind(obj1);
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())