
$("li").on("click", function(){
	//if gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn black
		$(this).css({
		color:"black",
		textDecoration:"none"
	});
	}	
	//else
	else{
		//turn gray
		$(this).css({
		color:"gray",
		textDecoration:"line-through"
	});
	}
	
	
});