$(function(){
	//获取数据
	//		接口数据生成
		
	(function(){
		
		var classid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
						console.log(data);
						var str = "";
						var strlist="";
						$.each(data,function(index,item){
							str += `
				<a href="detail.html?id=${item.goodsID}"><ul>
				
				<li><img src="${item.goodsListImg}"/></li>
				<li>
					<h4>${item.goodsName}</h4>
					<p>售价：￥<span>${item.price}</span></p>
				</li>
			</ul></a>
							
							`
							//strlist=item.className;
						})
						$(".content").html(str);
						//$("#shang_list").html(strlist);
					});
					
		
		
		
		
	})();
	
	
	//第二个小轮播透明度
  var timer1 =0;
   var num1=0;
   timer1=setInterval(function(){
   	          foo1();
   },4000)

    function foo1(){
    	if(num1==0){
    		$(".banner_wrap").find("div").stop().animate({opacity:0},1000)
    	$(".banner_wrap").find("div").eq(0).stop().animate({opacity:1},1000)
    	num1=1;
    	}else if(num1==1){
    		
    		$(".banner_wrap").find("div").stop().animate({opacity:0},1000)
    	$(".banner_wrap").find("div").eq(1).stop().animate({opacity:1},1000)
    	num1=2;
    		
    	}else{
    		$(".banner_wrap").find("div").stop().animate({opacity:0},1000)
    		$(".banner_wrap").find("div").eq(2).stop().animate({opacity:1},1000)
    		num1=0;
    	}
    	
    }
    foo1();
//  $(".banner_wrap").mouseover(function(){
//			clearInterval(timer1);
//		})
//		$(".banner_wrap").mouseout(function(){
//			timer1 = setInterval(function(){
//		
//		foo1();
//			
//		},4000)
//		});
//	
	
	
	
	
	
	
});
