(function()
{
	/**
		* Creates a new Timer.
		* @constructor 
		* @param {obj} object whis property and value.
		* @property {function} action_of_timer function for timer.
		* @property {number} interval_of_timer interval for timer.
		* @property {number} intervalIid intervalId of timer.
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
		* @property {array} array_color_to_chanje color to chanje.
		* @property {number} frame frame of animation.
		* @property {number} intervalIid intervalId of animation.
		*/	
	function animateColor(obj)
	{
		this.element=obj.element;
		
		this.startCcolor = obj.startCcolor;
		
		this.endColor = obj.endColor;
		
		this.timeForChange = obj.time;
		
		this.array_color_to_chanje = this.startCcolor;
		
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
			this.stepChengOfColor[0] = ((this.startCcolor[0] - this.endColor[0]) / this.setFrameCount());
			this.stepChengOfColor[1] = ((this.startCcolor[1] - this.endColor[1]) / this.setFrameCount());
			this.stepChengOfColor[2] = ((this.startCcolor[2] - this.endColor[2]) / this.setFrameCount());
		}
		
		/**
		* Color for animation.
		*/
		this.setNewColorToShow = function(stup)
		{
			this.array_color_to_chanje[0] = this.array_color_to_chanje[0] + 2;
			this.array_color_to_chanje[1] = this.array_color_to_chanje[1] - 1;
			this.array_color_to_chanje[2] = this.array_color_to_chanje[2] + 0;
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
				this.frame++
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
			this.intervalIid=setInterval(callMethodOfObject(this.changeColor, this), 30);
		}
		
	}
	
	function init()
	{
		var color = new animateColor({element:document.getElementById('container'), startCcolor:[113, 123, 90], endColor:[225, 50, 115], time:1500})
		color.run();
	}
	window.init = init;
	window.animateColor = animateColor;
	
	function callMethodOfObject (method, context){
		return function (){return method.call(context)};
	}
		window.callMethodOfObject = callMethodOfObject;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())