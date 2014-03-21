(function()
{
	
	/**
		* Creates a new Timer.
		* @constructor 
		* @param {obj} object whis property and value.
		*/	
	function Timer(obj)
	{
		this.data_of_timer = {};
		
		for (var p in obj)
		{
			this.data_of_timer[p] = obj[p];
		}

		this.setAction = function(fun)
		{
			return this.data_of_timer[fun];
		}
		
		this.setinterval = function(inter)
		{
			return this.data_of_timer[inter];
		}

		this.run = function()
		{
			var action = setInterval(this.setAction('callback'),this.setinterval('interval'));
			return action;
		}

		this.stop = function()
		{
			var action= this.run;
			clearInterval(action);
		}
	   
	  
	}
	var timer = new Timer({'callback':function(){console.log('10 second');},'interval':2000});
	timer.run();
	
	function stopTimer()
	{
		timer.stop();
	}
	
	window.stopTimer=stopTimer;

}())