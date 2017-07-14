/*2017.01.17*/
$(function(){
	$(window).keydown(function(event){
 		if(event.keyCode==13){
 			event.preventDefault();
 			$("#send").click();
 		};
 	});
	$("#send").click(function(){
		var key = "e9e365521ffb4d4a9754ed335a616a59";// e9e365521ffb4d4a9754ed335a616a59 // cc9fb70dcf458a3446bcbbe45343c7af  //065f76717db5dfd2135fe774b41e4e9f
		var loc = "中国";
		var user_id = "mengnn";
		var info = $("#user_input input").val();
		var $p = "<div class='clearfix'><div class='right'>"
				$p += '<div class="person_image">'
				$p += '<img src="images/myself.jpg"/>'
				$p += '</div>'
				$p += '<div class="right_message">'
				$p += '<div class="right_floag"></div>'
				$p += '<div class="right_msg">'
				$p += '<p>'+info+'</p>'
				$p += '</div>'
				$p += '</div>'
				$p += '</div></div>'
		$("#message").append($($p));
		$("#message").scrollTop($("#message").scrollTop()+1000);
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
				var $p = "<div class='clearfix'><div class='left'>"
				$p += '<div class="com_image">'
				$p += '<img src="images/robot.jpg"/>'
				$p += '</div>'
				$p += '<div class="left_message">'
				$p += '<div class="left_floag"></div>'
				$p += '<div class="left_msg">'
				$p += '<p>'+result.text+'</p>'
				$p += "<p class='url'><a href="+result.url+">"+result.url+"</a></p>"
				$p += '</div>'
				$p += '</div>'
				$p += '</div></div>'
			$("#message").append($($p));
			$("#message").scrollTop($("#message").scrollTop()+1000);
			if(code=="100000"){
				$(".url").hide();
			}else{
				location.href=result.url;
			}
			}
		});
		$("#user_input input").val("");
	});

});
