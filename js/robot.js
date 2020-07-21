/*2017.01.17*/
$(function(){
	$(window).keydown(function(event){
 		if(event.keyCode==13){
 			event.preventDefault();
 			$("#send").click();
 		};
 	});

	//判断是否在前面加0
	function getNow(s) {
	   return s < 10 ? '0' + s: s;
	}

	$("#send").click(function(){
		var key = "20d6d1839d8b4446902bd246c149c6ea";
		var loc = "中国";
		var user_id = "mengnn";
		var info = $(".chatBtn .chatInput").val();

    var myDate = new Date();
		var year=myDate.getFullYear();        //获取当前年
		var month=myDate.getMonth()+1;        //获取当前月
		var date=myDate.getDate();            //获取当前日
		var h=myDate.getHours();              //获取当前小时数(0-23)
		var m=myDate.getMinutes();          //获取当前分钟数(0-59)
		var s=myDate.getSeconds();
		var now=year+'/'+getNow(month)+"/"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
		console.log(now)

				var rightHtml = '<li class="chatRight">'
												+' <div class="chatright_top">'
												+'	 <div class="rightTime">'+now+'</div>'
												+'</div>'
												+' <div class="rightHtml">'+info+'</div>'
												+' </li>'
				// console.log($p)
		$(".chatHtml").append(rightHtml);
		$(".chatHtml").scrollTop($(".chatHtml").scrollTop()+1000);
//		console.log(info);
		$.ajax({
			type:"post",

			url:"http://www.tuling123.com/openapi/api",
			async:true,
			dataType:"json",
			data:{"key":key,"loc":loc,"info":info,"userid":user_id},
			success:function(result){
				//console.log(result);
				var code=result.code;
				//console.log(code);

				var myDate = new Date();
				var year=myDate.getFullYear();        //获取当前年
				var month=myDate.getMonth()+1;        //获取当前月
				var date=myDate.getDate();            //获取当前日
				var h=myDate.getHours();              //获取当前小时数(0-23)
				var m=myDate.getMinutes();          //获取当前分钟数(0-59)
				var s=myDate.getSeconds();
				var now=year+'/'+getNow(month)+"/"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
				// console.log(now)

					var leftHtml = '<li class="chatLeft">'
												+ '<div class="chatLeft_top">'
												+ '	<img src="images/robot.jpg" class="robotImg" />'
												+ '	<div class="chatLeftTime">'
												+ '		<div class="leftName">智能小助手</div>'
												+ '		<div class="leftTime">'+now+'</div>'
												+ '	</div>'
												+ '</div>'
												+ '<div class="leftHtml">'
												+ '	<span>'+result.text+'</span>'
												+ '	<a href='+result.url+' class="leftUrl url"  style="display:none;">'+result.url+'</a>'
												+ '	<img src="images/topImg3.jpg" style="display:none;" class="leftImg" />'
												+ '</div>'
											+ '</li>'
			$(".chatHtml").append(leftHtml);
			$(".chatHtml").scrollTop($(".chatHtml").scrollTop()+1000);
			if(code=="100000"){
				$(".url").hide();
			}else{
				location.href=result.url;
			}
			}
		});
		$(".chatBtn .chatInput").val("");
	});

});
