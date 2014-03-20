(function()
{
	var Map={
		add:function(key,value)
			{
				Map[key]=value;
			},
		get:function(key)
			{
				if(Map.hasOwnProperty(key))
				{
					return Map[key];
				}
				else
				{
					console.log('There is no key with the same name.');
				}
			},
		remove:function(key)
			{
				if(Map.hasOwnProperty(key))
				{
					delete Map[key];
					console.log('Removal was successful.');
				}
			}
	}
	
	Map.add('key_1',123);
	Map.add('key_2','Rostyk');
	Map.add('key_3','Igor');
	Map.add('key_4',321);
	Map.add('key_5',true);
	
	//console.log(Map.get('key_4'));
	Map.remove('key_4');
	//console.log(Map.get('key_4'));
	
	
	
	var AnotherMap={
		
		add:function(key,value)
			{
				Map[key]=value;
			},
		get:function(key)
			{
				if(Map.hasOwnProperty(key))
				{
					return Map[key];
				}
				else
				{
					console.log('There is no key with the same name.');
				}
			},
		remove:function(key)
			{
				if(Map.hasOwnProperty(key))
				{
					delete Map[key];
					console.log('Removal was successful.');
				}
			}
	}
	
	AnotherMap.add('key_1','Borysovych');
	AnotherMap.add('key_2',098);
	//console.log(AnotherMap.get('key_1'));
	
	Map.add('key_6',AnotherMap);
	
	console.log(Map.get('key_6').get('key_1'));
	
	
	
	
}())