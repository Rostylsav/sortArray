(function ()
{
	/**
     * A collection of objects.
     */
	var collection=[
					{name:'Borys',age:54,town:'Sambir'},
					{name:'Rostyk',age:23,town:'Lviv'},
					{name:'Oksana',age:53,town:'Odesa'},
					{name:'Volodya',age:28,town:'Ryga'},
					{name:'Igor',age:26,town:'Lviv'}
					];
	/**
     * The function that displays a collection of object on the screen.
	 * @param {Аrray} collection of objects which will be displayed.
     */	
	function show(array)
	{
		var show_array='';
		var container = document.getElementById('container');
		var div = document.createElement('div');
			div.id=0;
		for(var i=0;i<array.length;i++)
		{
			show_array=show_array+'{ '+array[i].name+', '+array[i].age+', '+array[i].town+'}, ';
		}	
		div.appendChild(document.createTextNode('[ '+show_array+' ]'));
		container.appendChild(div);
	}
	/**
     * Function containing check for correct spelling of object properties
	* And provides a method of sorting a collection of bubbles.
	* Also choose how to show a collection of objects (in the form of increase or decrease).
	 * @param {Аrray} collection which will be held sort.
     * @param {String} property name for which will be sorted.
     * @param {String} variable that indicates how to show a collection of objects (in the form of increase or decrease).
     * @returns Returns a sorted collection of objects in the form of decrease or increase.
     */	
	function bubbleSort (array, property,inc_or_dec)
	{
			var n = array.length;
			for (var i = 0; i < n; i++)
			{ 
				if(property in array[i])
				{
					for (var j = 0; j < n-1; j++)
					{ 
						if (array[j+1][property] < array[j][property])
						{
							var tz = array[j+1]; 
							array[j+1] = array[j];
							array[j] = tz; 
						}
					}
				}
				//show(array);
			}  
			if(inc_or_dec==='dec')
			{
				array.reverse();
			}
			return array;
	}		

	
	/**
    * Function containing check for correct spelling of object properties 
	* And determine which properties to carry out sorting. 
	* Also choose how to show a collection of objects (in the form of increase or decrease).
    * @param {String}  property name for which will be sorted.
    * @param {String} variable that indicates how to show a collection of objects (in the form of increase or decrease).
    * @returns Returns the function that sets the sorting rule.
    */
	function dynamicSort(array,property,inc_or_dec) 
	{
		var n = array.length;
		function incOrDecFactory (inc_or_dec)
		{
			return function helpSortRule(a,b)
			{
				var result = (a[property] < b[property]) ? -inc_or_dec : (a[property] > b[property]) ? inc_or_dec : 0;
				return result;
			}
		}
		
		var sort_rule=incOrDecFactory(inc_or_dec);
		for (var i = 0; i < n; i++)
		{ 
			if(property in array[i])
			{
				array.sort(sort_rule);
			}
		}		
	}
	/**
     * The function is executed after loading html page.
     */
	function init()
	{
		//bubbleSort(collection,'age','dec');
		dynamicSort(collection,'name',-1);
		show(collection);
	}
	/**
     * assignment function init () global status.
     */
	window.init = init;
}())
