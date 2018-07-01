$(function(){
	
	$(".sy").click(function(){
		console.log("aa")
		location.href="index.html";
			
	})	
		$(".gwc").click(function(){
		
		location.href="cart.html";
			
	})	
		$(".wd").click(function(){
		
		location.href="login.html";
			
	})	
	var num=0;
	$(".navbtn").click(function(){
		
		if(num==0){
			$(".box").animate({left:"30%"},800);
			$(".header1").animate({left:"30%"},800);
			$("footer").animate({left:"30%"},800);
			$(".box1").animate({left:"0%"},800);
			
			num=1;
		}else{
			$(".box").animate({left:"0%"},800);
			$(".header1").animate({left:"0%"},800);
			$("footer").animate({left:"0%"},800);
			$(".box1").animate({left:"-30%"},800);
			
			num=0;
		}
	})
	
	
	
	
	
});
