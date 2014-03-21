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
		this.array_of_color=[0,0,0];
		
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
	var color=[0,0,0];
	function chanjeColor()
	{
		if(color[0]<=255)
		{
			color[0]++;
		}
		else 
		{
			if(color[1]<=255)
			{
				color[1]++;
			}
			else
			{
				color[2]++;
			}
		}
	}
	function divColor()
	{
		var container = document.getElementById('container');
		container.innerHTML = '';
		var div =  document.createElement('div');
			div.style.backgroundColor = 'rgb('+color[0]+','+color[1]+','+color[2]+')';
			div.style.width = 200;
			div.style.height = 100;
				
		container.appendChild(div);
		chanjeColor();
	}
	var timer= new Timer({callback:divColor,interval:30});
	window.timer=timer;
	
	function stopChanjeColor()
	{
		timer.stop();
	}
	
	window.stopChanjeColor=stopChanjeColor;
	timer.run();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())