(function()
{
	/**
		* Creates a new Timer.
		* @constructor 
		* @param {obj} object whis property and value.
		* @property {function} action_of_timer function for timer.
		* @property {number} interval_of_timer interval for timer.
		* @property {number} interval_id intervalId of timer.
		*/	
	function Timer(obj)
	{

		this.action_of_timer = obj.callback;
		this.interval_of_timer = obj.interval;
		this.interval_id = 0;
		
		/**
		* Function checks whether the timer is running.
		* @returns true or false.
		*/
		this.isRunning=function()
		{
			var is_running;
			if(this.interval_id != 0)
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
				this.stop();
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
				this.stop();
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
			this.interval_id=setInterval(this.action_of_timer,this.interval_of_timer);
		}
		/**
		* The function stops the timer.
		*/
		this.stop = function()
		{
			clearInterval(this.interval_id);
			this.interval_id=0;
		}
		
	}
	window.Timer=Timer;
	
	
	
	
	/**
		* Creates a new animation of color.
		* @constructor 
		* @param {obj} object whis property and value.
		* @property {html element} element html element for animation.
		* @property {array} start_color  original color for animation.
		* @property {array} end_color the final color for animation.
		* @property {number} time_to_chanje time of animation.
		* @property {array} array_color_to_chanje color to chanje.
		* @property {number} frame frame of animation.
		* @property {number} interval_id intervalId of animation.
		*/	
	function animateColor(obj)
	{
		this.element=obj.element;
		this.start_color = obj.start_color;
		this.end_color = obj.end_color;
		this.time_to_chanje = obj.time;
		this.array_color_to_chanje=this.start_color;
		this.frame=0;
		this.interval_id = 0;
		
		/**
		* Counts the number of frames.
		* @returns {number} count of animation.
		*/
		this.frameCounts = function()
		{
			var frame_counts = Math.floor(this.time_to_chanje / 30);
			return frame_counts;
		}
		/**
		* Numbers by which changes color to animate.
		* @param {array} original color for animation.
		* @param {array}  final color for animation.
		* @returns {array} array of numbers by which changes color to animate.
		*/
		this.chanje_stup = function(start_color, end_color)
		{
			var stup_array=[]
			stup_array[0] = ((start_color[0] - end_color[0]) / this.frameCounts());
			stup_array[1] = ((start_color[1] - end_color[1]) / this.frameCounts());
			stup_array[2] = ((start_color[2] - end_color[2]) / this.frameCounts());
			return stup_array;
		}
		
		/**
		* Color for animation.
		*/
		this.colorToShow = function()
		{
			var stup = this.chanje_stup(this.start_color, this.end_color);
			this.array_color_to_chanje[0] = this.start_color[0] - stup[0];
			this.array_color_to_chanje[1] = this.start_color[1] - stup[1];
			this.array_color_to_chanje[2] = this.start_color[2] - stup[2];
		}
		/**
		* Stopt  animation.
		*/
		this.stop = function()
		{
			clearInterval(this.interval_id);
			this.interval_id=0;
		}
		/**
		* Animation.
		*/
		this.chanje = function()
		{
			var count = this.frameCounts();
			if(this.frame <= count)
			{
				this.element.style.backgroundColor = 'rgb(' + this.array_color_to_chanje[0] + ',' + this.array_color_to_chanje[1] + ','+ this.array_color_to_chanje[2] + ')';
				console.log('work');
			}
			else
			{
				this.stop();
				console.log('end');
			}
			this.colorToShow();

		}
		/**
		* Start of animation.
		*/
		this.run = function()
		{
			this.interval_id=setInterval(this.chanje, 30);
		}
		
	}
	
	/*function init()
	{
		var color = new animateColor({element:document.getElementById('container'), start_color:[113, 123, 90], end_color:[225, 50, 115], time:1500})
		window.animateColor = animateColor;
		color.run();
	}
	window.init = init;*/
	
	
		window.animateColor = animateColor;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())