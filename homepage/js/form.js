function clickSearch(){	
	var input = document.getElementById("head_search_input").value;
	console.log(input);
	window.event.returnValue=false;//阻止浏览器默认处理
	// window.location.href='https://www.baidu.com/s?wd='+input;
	window.parent.location.href='https://www.baidu.com/s?wd='+input;
	window.location.href='https://sylucky.github.io';
}

function enterIn(evt){
	var form = document.getElementById("search_form");
	if (evt.keyCode==13){
	clickSearch();
}
}
