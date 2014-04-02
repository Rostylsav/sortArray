(function ()
{

	var collection = [];
	/**
    * The function that displays a collection of object on the screen.
	* @param {string} adres of file which contains string to disply.
	* @param {function} function which will run after receiving data.
	* @param {method} method for xmlhttprequest.
    */	
    function reqRes(url, callback, obj) 
    {

    	var options = obj || {};
    	var method = options.method || 'GET';
     	var xhr = new XMLHttpRequest();
     	var data = null;

     	xhr.open(method, url, true);
     	if(options.data && method === 'POST')
     	{
     		data = options.data;
     	}
        xhr.onreadystatechange = function() {             
         		if (xhr.readyState === 4 )  
         	    {
         	        if(xhr.status === 200)
         	        {
         	            callback(xhr.responseText);
         	        }
         	        else
         	        {
         	            alert('Error 404. Check the file path to the data.');
         	        }
         	    }  
            }
        xhr.send(data);
    } 

    /**
    * Get string and transform to object.
	* @param {mixed} item of array.
    */
    function transformToObject(item)
    {
        var array=item.split(',');
        return {name:array[0], age:array[1], town:array[2]};
    }

    /**
    * Get string which will be a array of object then sort and disply.
	* @param {String} string for sorting and disply.
    */	
    function getCollection(text)
    {
        var array_of_strings = [];
        array_of_strings = text.split('\n');
        collection = array_of_strings.map(transformToObject);
        dynamicSort(collection,'name',1);
        show(collection);
       	
    }


	

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
				if(array[i].hasOwnProperty(property))
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
		function orderFactory (inc_or_dec)
		{
			return function helpSortRule(a,b)
			{
				if(a.hasOwnProperty(property) && b.hasOwnProperty(property))
				{
					var result = (a[property] < b[property]) ? -inc_or_dec : (a[property] > b[property]) ? inc_or_dec : 0;
					return result;
				}
			}
		}
		var sort_rule=orderFactory(inc_or_dec);
		array.sort(sort_rule);		
	}
	/**
    * The function is executed after loading html page.
    */
	function init()
	{
		//bubbleSort(collection,'age','dec');
		//dynamicSort(collection,'age',1);
		reqRes('data.txt', getCollection);
		reqRes('data.txt', function(){}, {method:'POST', data:"collection"});
		
	}
	/**
    * assignment function init () global status.
    */
	window.init = init;
}())
