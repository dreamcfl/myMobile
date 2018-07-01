$(function(){
	
	//查看接口数据详情
		var goodsid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						console.log(data);
						var str = `
						${data[0].goodsName}
						
						`
						
						$("#content_xianshi").html(str);
			
						
			$("#btn_d").click(function(){
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data);
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功");
									location.reload();
								}
							})
						})
					});
	
	
//	点击返回首页
$("#header1_d").click(function(){
	location.href="index.html";
})
	
	
})
