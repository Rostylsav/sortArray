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
	
	
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function Hash(obj)
	{
		this.items = {};
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				this.items[p] = obj[p];
			}
		}
		this.hasItem = function(key)
		{
			return this.items.hasOwnProperty(key);
		}
	   
		this.setItem = function(key, value)
		{
			this.items[key] = value;
		}

		this.getItem = function(key) 
		{
			if(this.hasItem(key))
			{
				return this.items[key];// : undefined;
			}
		}
		
		this.removeItem = function(key)
		{
			if (this.hasItem(key)) 
			{
				delete this.items[key];
				console.log('Removal was successful.');
			}
		}
	}
	
	/*
	var Map= new Hash({'key_1':'rostyk','key_2':123,'key_3':true});
	Map.setItem('key_4',321);
	console.log(Map.getItem('key_4')+Map.getItem('key_1'));
	Map.removeItem('key_4');
	console.log(Map.getItem('key_4'));
	
	
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}())