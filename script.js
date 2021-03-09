var y;

function summer() 
{
	document.body.style.backgroundColor = "lightblue";
	var x = document.getElementsByClassName("title");
	x[0].style.color = "orange";

	var x = document.getElementsByClassName("homebutton");
	x[0].style.color = "orange";
	x[0].style.backgroundColor = "white";
	x[0].style.border = "2px solid yellow";
	x[1].style.color = "orange";
	x[1].style.backgroundColor = "white";
	x[1].style.border = "2px solid yellow";

	for (y = 0; y <= 5; y++)
	{
		var x = document.getElementsByClassName("links");
		x[y].style.color = "orange";
		x[y].style.backgroundColor = "white";
		x[y].style.border = "2px solid yellow";
	}
	
	var x = document.getElementsByClassName("paragraph");
	x[0].style.color = "orange";
}