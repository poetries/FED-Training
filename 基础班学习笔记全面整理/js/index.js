$(document).ready(function(){
			//点击内容ul时
			$("#menu_left .con").click(function(e){
				e.stopPropagation();
			});
			//点击内容li时
			$("#menu_left .con li").click(function(){
				$(this).addClass("curr").siblings().removeClass("curr");
			});
			//鼠标滑过内容li时
			$("#menu_left .con li").mouseover(function(){
				$(this).addClass("hover").siblings().removeClass("hover");
			});
			
			//点击标签li时
			$("#menu_left .tab li").click(function(){
				$(this).find(".con").slideToggle();
				$(this).siblings().find(".con").slideUp();
			});
		});