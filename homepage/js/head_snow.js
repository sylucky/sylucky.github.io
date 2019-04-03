// 背景与下雪样式代码
// var file = "../html/test.html";
// var reader = new FileReader();//new一个FileReader实例
// var body=document.getElementById("html_body"); 
// reader.readAsText(file);
// body.innerHTML = this.result;
	// var file = "head_snow.js";
    var file = document.getElementById("head_file").src;  
    console.log(file);
    var reader = new FileReader();  
    //将文件以文本形式读入页面  
    reader.readAsText(file);  
    reader.onload=function(f){
    	console.log(this.result);
        var result=document.getElementById("result");  
        //显示文件  
        result.innerHTML=this.result;  
    }  