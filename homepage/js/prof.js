window.onload=function(){
		var input = document.getElementsByClassName("skill_tab");
		var output = document.getElementsByClassName("prof_right_box_list");
		
		//点击input，相应的output可见
	
		input[0].onclick=function(){
			var index = 0 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		
		input[1].onclick=function(){
			var index = 1 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		
		input[2].onclick=function(){
			var index = 2 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		input[3].onclick=function(){
			var index = 3 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		input[4].onclick=function(){
			var index = 4 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		input[5].onclick=function(){
			var index = 5 ;
			for(var i=0;i<input.length;i++){
				if( i == index )
					output[i].style.display="block";
				else
				output[i].style.display="none";
			}
		}
		
		var objbox = document.getElementsByClassName("obj_box");
		var projbox = document.getElementsByClassName("proj_box");
		var skillbox = document.getElementsByClassName("skill_box");
		var body = document.getElementById("body");
		
		objbox[0].onclick=function(){
			objbox[0].style.display="none";
			body.style.opacity=1;
		}
		objbox[1].onclick=function(){
			objbox[1].style.display="none";
			body.style.opacity=1;
		}
		objbox[2].onclick=function(){
			objbox[2].style.display="none";
			body.style.opacity=1;
		}
		objbox[3].onclick=function(){
			objbox[3].style.display="none";
			body.style.opacity=1;
		}
		objbox[4].onclick=function(){
			objbox[4].style.display="none";
			body.style.opacity=1;
		}
		objbox[5].onclick=function(){
			objbox[5].style.display="none";
			body.style.opacity=1;
		}
		
		projbox[0].onclick=function(){
			projbox[0].style.display="none";
			body.style.opacity=1;
		}
		projbox[1].onclick=function(){
			projbox[1].style.display="none";
			body.style.opacity=1;
		}
		projbox[2].onclick=function(){
			projbox[2].style.display="none";
			body.style.opacity=1;
		}
		projbox[3].onclick=function(){
			projbox[3].style.display="none";
			body.style.opacity=1;
		}
		projbox[4].onclick=function(){
			projbox[4].style.display="none";
			body.style.opacity=1;
		}
		projbox[5].onclick=function(){
			projbox[5].style.display="none";
			body.style.opacity=1;
		}
		projbox[6].onclick=function(){
			projbox[6].style.display="none";
			body.style.opacity=1;
		}
		
		skillbox[0].onclick=function(){
			skillbox[0].style.display="none";
			body.style.opacity=1;
		}
		skillbox[1].onclick=function(){
			skillbox[1].style.display="none";
			body.style.opacity=1;
		}
		skillbox[2].onclick=function(){
			skillbox[2].style.display="none";
			body.style.opacity=1;
		}
		skillbox[3].onclick=function(){
			skillbox[3].style.display="none";
			body.style.opacity=1;
		}
		skillbox[4].onclick=function(){
			skillbox[4].style.display="none";
			body.style.opacity=1;
		}
		skillbox[5].onclick=function(){
			skillbox[5].style.display="none";
			body.style.opacity=1;
		}
		skillbox[6].onclick=function(){
			skillbox[6].style.display="none";
			body.style.opacity=1;
		}
		skillbox[7].onclick=function(){
			skillbox[7].style.display="none";
			body.style.opacity=1;
		}
		skillbox[8].onclick=function(){
			skillbox[8].style.display="none";
			body.style.opacity=1;
		}
		skillbox[9].onclick=function(){
			skillbox[9].style.display="none";
			body.style.opacity=1;
		}
		skillbox[10].onclick=function(){
			skillbox[10].style.display="none";
			body.style.opacity=1;
		}
		skillbox[11].onclick=function(){
			skillbox[11].style.display="none";
			body.style.opacity=1;
		}
		skillbox[12].onclick=function(){
			skillbox[12].style.display="none";
			body.style.opacity=1;
		}
}

function getjobdiv(num){
	var imgbox = document.getElementsByClassName("obj_box");
	var body = document.getElementById("body");
	imgbox[num].style.display="block";
	body.style.opacity=0.5;
}

function getprojdiv(num){
	var imgbox = document.getElementsByClassName("proj_box");
	var body = document.getElementById("body");
	imgbox[num].style.display="block";
	body.style.opacity=0.5;
}

function getskilldiv(num){
	var imgbox = document.getElementsByClassName("skill_box");
	var body = document.getElementById("body");
	imgbox[num].style.display="block";
	body.style.opacity=0.5;
}