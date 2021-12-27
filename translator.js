function fn1()
		{
			var str = document.getElementById("English").value;
			laoshi(str);
		}
function laoshi(thing)
{	
	
	
	if(thing == "ok foudfjdjfjxkdjs  you didjgxjgxgkfjskydiydyigchv bjcidseisutsutxjtf khciycougdoerrtyoftuskccmjzjsjskaortoufxlgxtjdukfuldyidhssjtfupgupvkhcmck gc")
	{
		Newarray = "This isn't an valid code, Ryan"
		document.getElementById("Error").innerHTML = "";
	  document.getElementById("Translate_laoshi").innerHTML = Newarray;
	}
	else{
	thing = thing.split(" ").join("_");
	// var letters = thing.replace(/[^a-z]+/g, '');
	// thing = letters;
	var array1 = ['a','1','z','g','n','3','i','d','p','y','`','6','@','A','f','B','q','Q','b','!','C','2','R','m','j','D','_','.','E','S','^','F','h',',','/','<','G','T','*','(',')','9','H','>','$','U','%','7','u','V',':',';','I','k','0','#','W','o','?','J','e','X','c','K','8','Y','t','L','v','&','-','l','M','4','x','N','w','r','=','+','O','s','5','\'',"\"",'P','Z','a','1','z','g','n','3','i','d','p','y'];
	var Newarray = []
	var shift = 1;
	var length1 = thing.length;
	
	for(letter of thing)
	{
		var loopthrough = 0;
		for(Value of array1)
		{
			if(Value == letter)
			{
				shift += 1;
				var Bob = loopthrough;
				var Thingy = shift;
				if(thing.length % 3 == 0)
				{
					if(Thingy % 4 == 0 || Thingy % 3 == 0)
					{	
					var Newletter = array1[Bob + 3];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 2 == 0)
					{
					var Newletter = array1[Bob + 1];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 5 == 0)
					{
					var Newletter = array1[Bob + 4];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 5];
					Newarray.push(Newletter);
					break;
					}
				}
				else if(thing.length % 4 == 0)
				{
					if(Thingy % 2 == 0)
					{	
					var Newletter = array1[Bob + 6];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 3 == 0)
					{
					var Newletter = array1[Bob + 2];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 5 == 0 || Thingy % 7 == 0 )
					{
					var Newletter = array1[Bob + 3];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 1];
					Newarray.push(Newletter);
					break;
					}
				}
				else if(thing.length % 3 != 0)
				{
					if(Thingy % 4 == 0)
					{	
					var Newletter = array1[Bob + 4];
					Newarray.push(Newletter);
					break;
					}
					if(Thingy % 2 == 0 || Thingy % 5 == 0)
					{
					var Newletter = array1[Bob + 6];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 3 == 0)
					{
					var Newletter = array1[Bob + 7];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 2];
					Newarray.push(Newletter);
					break;
					}
				}
			}
			else
			{
				loopthrough += 1;		
			}
		}
	}
	shift = 1;
  	Newarray = Newarray.join("");
  	Newarray = Newarray.replace(/_/g, ' ');
  	var length2 = Newarray.length;
 

	if(length1 == length2)
  	{
  		if(Newarray.length >= 3)
  		{
  		if(Newarray.length == 3)
  		{
  			if(Newarray[0] == Newarray[1] || Newarray[1] == Newarray[2] || Newarray[0] == Newarray[2])
  			{
  				document.getElementById("Error").innerHTML = "The 3 characters must be different for safety purposes"; 			
  			}
	  		else
	  		{
	  			document.getElementById("Error").innerHTML = "";
	  			document.getElementById("Translate_laoshi").innerHTML = Newarray;
  			}
  		}
  		else
  		{
  			document.getElementById("Error").innerHTML = "";
	  		document.getElementById("Translate_laoshi").innerHTML = Newarray;
  		}
  		
	  	}
		else
		{
			document.getElementById("Error").innerHTML = "Must translate at least 3 characters for safety purposes";
		}
	 }
	 else
	 {
	 	document.getElementById("Error").innerHTML = "You used a character which is not allowed to be used";
	 }
	}
	
}
function reverse(s){
    return s.split("").reverse().join("");
}
function english(thing)
{
	var array1 = ['a','1','z','g','n','3','i','d','p','y','`','6','@','A','f','B','q','Q','b','!','C','2','R','m','j','D','_','.','E','S','^','F','h',',','/','<','G','T','*','(',')','9','H','>','$','U','%','7','u','V',':',';','I','k','0','#','W','o','?','J','e','X','c','K','8','Y','t','L','v','&','-','l','M','4','x','N','w','r','=','+','O','s','5','\'',"\"",'P','Z','a','1','z','g','n','3','i','d','p','y'];
	array1 = array1.reverse();

	thing = thing.split(" ").join("_");
	// var letters = thing.replace(/[^a-z]+/g, '');
	// thing = letters;
	var Newarray = [];
	var shift = 1;
	var length1 = thing.length;

	for(letter of thing)
	{
		var loopthrough = 0;
		for(Value of array1)
		{
			if(Value == letter)
			{
				shift += 1;
				var Bob = loopthrough;
				var Thingy = shift;
				if(thing.length % 3 == 0)
				{
					if(Thingy % 4 == 0 || Thingy % 3 == 0)
					{	
					var Newletter = array1[Bob + 3];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 2 == 0)
					{
					var Newletter = array1[Bob + 1];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 5 == 0)
					{
					var Newletter = array1[Bob + 4];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 5];
					Newarray.push(Newletter);
					break;
					}
				}
				else if(thing.length % 4 == 0)
				{
					if(Thingy % 2 == 0)
					{	
					var Newletter = array1[Bob + 6];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 3 == 0)
					{
					var Newletter = array1[Bob + 2];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 5 == 0 || Thingy % 7 == 0 )
					{
					var Newletter = array1[Bob + 3];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 1];
					Newarray.push(Newletter);
					break;
					}
				}
				else if(thing.length % 3 != 0)
				{
					if(Thingy % 4 == 0)
					{	
					var Newletter = array1[Bob + 4];
					Newarray.push(Newletter);
					break;
					}
					if(Thingy % 2 == 0 || Thingy % 5 == 0)
					{
					var Newletter = array1[Bob + 6];
					Newarray.push(Newletter);
					break;
					}
					else if(Thingy % 3 == 0)
					{
					var Newletter = array1[Bob + 7];
					Newarray.push(Newletter);
					break;
					}
					else
					{
					var Newletter = array1[Bob + 2];
					Newarray.push(Newletter);
					break;
					}
				}
			}
			else
			{
				loopthrough += 1;		
			}
		}
	}
	shift = 1;
  	Newarray = Newarray.join("");
  	Newarray = Newarray.replace(/_/g, ' ');
  	var length2 = Newarray.length;
  	if(length1 == length2)
  	{
  		if(Newarray.length >= 3)
  		{
  		if(Newarray.length == 3)
  		{
  			if(Newarray[0] == Newarray[1] || Newarray[1] == Newarray[2] || Newarray[0] == Newarray[2])
  			{
  				document.getElementById("Error").innerHTML = "The 3 characters must be different for safety purposes"; 			
  			}
	  		else
	  		{
	  			document.getElementById("Error").innerHTML = "";
	  			document.getElementById("Translate_laoshi").innerHTML = Newarray;
  			}
  		}
  		else
  		{
  			document.getElementById("Error").innerHTML = "";
	  		document.getElementById("Translate_laoshi").innerHTML = Newarray;
  		}
  		
	  	}
		else
		{
			document.getElementById("Error").innerHTML = "Must translate at least 3 characters for safety purposes";
		}
	 }
	 else
	 {
	 	document.getElementById("Error").innerHTML = "You used a character which is not allowed to be used";
	 }
}
function fn2()
{
	var str = document.getElementById("English").value;

	english(str);
}

function copy() {
  /* Get the text field */
  var r = document.createRange();
  r.selectNode(document.getElementById("Translate_laoshi"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert("Copied to clipboard")
}
