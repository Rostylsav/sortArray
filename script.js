(function ()
{
	// масив обєктів
	var collection=[
					{name:'Borys',age:54,town:'Sambir'},
					{name:'Rostyk',age:23,town:'Lviv'},
					{name:'Oksana',age:53,town:'Odesa'},
					{name:'Volodya',age:28,town:'Ryga'},
					{name:'Igor',age:26,town:'Lviv'}
					];
	// функція воводу масива обєктів	
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
	// сортування бульбашкою	
	/*function bubbleSort (array, propert,inc_or_dec)
	{
		if(propert === 'name'|| propert === 'age'|| propert === 'town')
		{
			var n = array.length;
			for (var i = 0; i < n; i++)
			{ 
				for (var j = 0; j < n-1; j++)
				{ 
					if (array[j+1][propert] < array[j][propert])
				   {
						var tz = array[j+1]; 
						array[j+1] = array[j];
						array[j] = tz; 
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
		else
		{
			alert('Неправильно введене імя властивості обєкта.Будь ласка перевірти привильність написання і перезапустіть програму.')
		}
	}
	*/
	function dynamicSort(property,inc_or_dec) 
	{
		if(property === 'name'|| property === 'age'|| property === 'town')
		{
			if(inc_or_dec==="inc")
			{
				return function (a,b)
				{
					var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
					return result;
				}
			}
			else
			{
				return function (a,b) 
				{
					var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
					return result;
				}
			}
		}		
		else
		{
			alert('Неправильно введене імя властивості обєкта.Будь ласка перевірти привильність написання і перезапустіть програму.')
		}
	}
	function init()
	{
		//bubbleSort(collection,'age','dec');
		collection.sort(dynamicSort('name','dec'));
		show(collection);
	}
	window.init = init;
}())
