

 	function getRandomColor() {
    		var letters = '0123456789ABCDEF'.split('');
    		var color = '#';
    		for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.round(Math.random() * 15)];
   			 }
    		return color;
    	}

	function getRandomShape(){
			var radius=Math.random();
				radius=radius*100;
				radius=Math.floor(radius);
				radius=radius + "px";
			return radius;
	}    
	function getRandomPosY(){
			var marginTop=Math.random();
				marginTop=marginTop*300;
				marginTop=Math.floor(marginTop);
				marginTop= marginTop + "px";
			
				return marginTop;
	}	
	function getRandomPosX(){
			var marginLeft=Math.random();
				marginLeft=marginLeft*500;
				marginLeft=Math.floor(marginLeft);
				marginLeft= marginLeft + "px";
			
				return marginLeft;

	}
    		

 	var clickedTime;
 	var createdTime;
 	var reactionTime;


 	function appearBox(){

 		createdTime=Date.now();

 		var time=Math.random();
			time=time*4000;


		setTimeout(function(){

			if (Math.random() > 0.5){
					document.getElementById("box").style.borderRadius="100px";
				} else {
					document.getElementById("box").style.borderRadius="0";
				}
			
			document.getElementById("box").style.backgroundColor=getRandomColor();

			document.getElementById("box").style.marginLeft=getRandomPosX();

			document.getElementById("box").style.marginTop=getRandomPosY();

			document.getElementById("box").style.display="block";
			createdTime=Date.now();
		}, time);	
 	}

		document.getElementById("box").onclick=function(){

			clickedTime=Date.now();
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById("time").innerHTML=reactionTime + " seconds!";

			this.style.display="none"; 

			appearBox();								
		}
			appearBox();
