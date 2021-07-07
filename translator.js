function fn1()
		{
			var str = document.getElementById("English").value;
			laoshi(str);

			
		}
function laoshi(thing)
{
	thing = thing.toLowerCase();
	var array1 = ['a','z','g','n','i','d','p','y','f','q','b','m','j','h','u','k','o','e','c','t','v','l','x','w','r','s','a','z','g','n','i'];
	var Newarray = []
	for(letter of thing)
	{
		var loopthrough = 0;
		for(Value of array1)
		{
			if(Value == letter)
			{

				var Bob = loopthrough;
				var Newletter = array1[Bob + 5];
				Newarray.push(Newletter);
				break;
			}
			else
			{
				loopthrough += 1;
			}
		}
	}
	Newarray.reverse();
  	Newarray = Newarray.join("");

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
function english(thing)
{
	thing = thing.toLowerCase();
	var array1 = ['a','z','g','n','i','d','p','y','f','q','b','m','j','h','u','k','o','e','c','t','v','l','x','w','r','s','a','z','g','n','i'];;
	array1.reverse();
	var Newarray = []
	for(letter of thing)
	{
		var loopthrough = 0;
		for(Value of array1)
		{
			if(Value == letter)
			{

				var Bob = loopthrough;
				var Newletter = array1[Bob + 5];
				Newarray.push(Newletter);
				break;
			}
			else
			{
				loopthrough += 1;
			}
		}
	}
	Newarray.reverse();
  	Newarray = Newarray.join("");


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
