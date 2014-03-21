(function()
{
	/**
		* Creates a new Timer.
		* @constructor 
		* @param {obj} object whis property and value.
		*/	
	function Timer(obj)
	{

		this.action_of_timer = obj.callback;
		this.interval_of_timer = obj.interval;
		this.interval_id = 0;
		
		this.isRunning=function()
		{
			if(this.interval_id != 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
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
		
		this.run = function()
		{
			this.interval_id=setInterval(this.action_of_timer,this.interval_of_timer);
		}
		
		this.stop = function()
		{
			clearInterval(this.interval_id);
			this.interval_id=0;
		}
		
	}
	window.Timer=Timer;
	
	
	
	
	
	function animateColor(element, start, end, interval)
	{
		var start_color = start;
		var end_color = end;
		var interval_to_chanje = interval;
		
		function colorChange(start_element,end_element,interval)
		{
			var frame_counts = Math.floor(interval / 30);
			
			return Math.floor((start_element - end_element) / frame_counts);
		
		}
		
		function run()
		{
			function colorToShow()
				{
					start_color[0] = start_color[0] - colorChange(start_color[0],end_color[0],interval_to_chanje);
					start_color[1] = start_color[1] - colorChange(start_color[1],end_color[1],interval_to_chanje);
					start_color[2] = start_color[2] - colorChange(start_color[2],end_color[2],interval_to_chanje);
					return start_color;
					console.log('start_color  ' +start_color);
				}
			if(colorToShow()[0]!=end_color[0] && colorToShow()[1]!=end_color[1] && colorToShow()[2]!=end_color[2])
			{
				
				var container = document.getElementById('container');

				var elem = document.createElement(element);
					
					elem.style.width = 300;
					elem.style.height = 200;
					elem.style.backgroundColor = 'rgb(' + colorToShow()[0] + ',' + colorToShow()[1] + ','+ colorToShow()[2] + ')';
					
				container.appendChild(elem);
				
			}
			else
			{
				console.log('end');
			}
		}
		
		run();
		//setInterval(run,30);
	}
	
	function init()
	{
		animateColor('div', [113, 123, 90], [225, 50, 115], 1500);
	}
	window.init = init;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())