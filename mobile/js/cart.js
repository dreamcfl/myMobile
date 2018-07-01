
	$(function(){
		
		(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str="";
					$.each(data,function(index,item){
							str += `
					<ul>
				<li><img src="${item.goodsListImg}"/></li>
				<li>
					<h4>${item.goodsName}</h4>
					<p>数量：<strong>${item.number}</strong>个  单价：￥<span>${item.price}</span></p>
					<div class="btn_shan" goodsID="${item.goodsID}">
						删除
					</div>
				</li>
			</ul>
				`
						})
						$(".content").html(str);
						
		//			点击删除商品
	$(".btn_shan").click(function(){
		
		var id=$(this).attr("goodsID");
		//console.log(id);
						$(this).parent().parent().remove();
						$.get(" http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0})
				});
									
						
						
						
						
						
						
						
					
	});

	})();
		
		
	})

	
	
	
	
	

