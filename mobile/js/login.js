
$(function(){
	
	
	//登录判断
(function(){
	
	$("#login_btn").click(function(){
					$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("#text").val(),password:$("#pws").val()},function(data){
						data = JSON.parse(data);
						console.log(data);
						if(data == 0){
							alert("用户名不存在");
						}else if(data==2){
							alert("用户名或者密码错误")
						}else{
							$.cookie("username",data.userID,{expires:30,path:"/"});
						window.location="index.html";
						}
					})
				})
	
	
})();


	    	
(function(){
	
	
	//注册判断
$("#register_btn").click(function(){
					$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$("#text").val(),password:$("#pws").val()},function(data){
						data = JSON.parse(data);
						console.log(data);
						if(data == 0){
							alert("用户名重名");
						}else if(data==1){
							alert("注册成功，请登录")
							location.reload();
						}else{
							alert("注册失败，请重试");
						}
					})
				})
	
	
	
	
})();

	
	
	
	
	
	
	
});
