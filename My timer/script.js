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
	
}())