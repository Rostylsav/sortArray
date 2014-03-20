(function()
{
	var strichka='Borys,24,sambir/nRostyk,23,lviv';
	var array_of_strings=new Array();
	function podil(stroka)
	{
		var array=new Array();
		array=stroka.split('/n');
		return array;
	}
	
	array_of_strings=podil(strichka);
	function transformToObject(item)
	{
		var array=item.split(',');
		return {name:array[0],age:array[1],town:array[2]};
	}
	var array_of_object=array_of_strings.map(transformToObject);
	
	console.log(array_of_object);
	console.log(array_of_object[0].name);
	
	
}())