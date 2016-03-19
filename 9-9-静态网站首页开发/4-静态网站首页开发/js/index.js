
	var d_Value=$(".search input.txt").val();//获取到他的默认的值
	//alert(d_Value);
	$(".search input.txt").focus(function(){
		if($(this).val()==d_Value){
			$(this).val("");//当前输入框的值设置为空
			}
	
	});

	$(".search input.txt").blur(function(){
		if($(this).val()==""){
			$(this).val(d_Value);//给他赋他的初始值
		}
	});


	//二级菜单的实现
	$(".Nav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();//显示 .menu 盒子
		$(this).addClass("hover");//给li添加 class="hover"
	},function(){
		$(this).find(".menu").hide();//隐藏
		$(this).removeClass("hover");//移除 li class="hover"
	});

	//广告轮播图的实现
	var _index=0;//初始化序列号
	var timePlay=null;//声明空定时器
	$("#Adv .ImgList").eq(0).show().siblings("div").hide();//最开始显示第一张图片
	$("ul.button li").hover(function(){/*鼠标滑动*/
		clearInterval(timePlay);//清除定时播放器
		_index=$(this).index();//获取当前li的序列号
		//alert(_index);//打印 弹窗
		$(this).addClass("hover").siblings().removeClass("hover");//显示按钮
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//fadeIn 淡入显示  fadeout淡出  显示图片
	},
	function(){/*鼠标移开*/
		autoPlay();//启动定时播放器
	});

	//自动轮播
	function autoPlay(){//构建自动轮播函数
		//alert("sss");
		//设置定时器
		timePlay=setInterval(function(){
			_index++;
			if(_index<4)
			{
				if(_index==3){_index=-1;}
				//alert(_index);
				$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//显示按钮
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//fadeIn 淡入显示  fadeout淡出  显示图片
			}
			else
			{
				_index=-1;//序列号设置为-1，跳到播放第一张
			}
		},2000);	
	};
	autoPlay();//调用和执行函数

