
	var d_Value=$(".search input.txt").val();//��ȡ������Ĭ�ϵ�ֵ
	//alert(d_Value);
	$(".search input.txt").focus(function(){
		if($(this).val()==d_Value){
			$(this).val("");//��ǰ������ֵ����Ϊ��
			}
	
	});

	$(".search input.txt").blur(function(){
		if($(this).val()==""){
			$(this).val(d_Value);//���������ĳ�ʼֵ
		}
	});


	//�����˵���ʵ��
	$(".Nav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();//��ʾ .menu ����
		$(this).addClass("hover");//��li��� class="hover"
	},function(){
		$(this).find(".menu").hide();//����
		$(this).removeClass("hover");//�Ƴ� li class="hover"
	});

	//����ֲ�ͼ��ʵ��
	var _index=0;//��ʼ�����к�
	var timePlay=null;//�����ն�ʱ��
	$("#Adv .ImgList").eq(0).show().siblings("div").hide();//�ʼ��ʾ��һ��ͼƬ
	$("ul.button li").hover(function(){/*��껬��*/
		clearInterval(timePlay);//�����ʱ������
		_index=$(this).index();//��ȡ��ǰli�����к�
		//alert(_index);//��ӡ ����
		$(this).addClass("hover").siblings().removeClass("hover");//��ʾ��ť
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//fadeIn ������ʾ  fadeout����  ��ʾͼƬ
	},
	function(){/*����ƿ�*/
		autoPlay();//������ʱ������
	});

	//�Զ��ֲ�
	function autoPlay(){//�����Զ��ֲ�����
		//alert("sss");
		//���ö�ʱ��
		timePlay=setInterval(function(){
			_index++;
			if(_index<4)
			{
				if(_index==3){_index=-1;}
				//alert(_index);
				$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//��ʾ��ť
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//fadeIn ������ʾ  fadeout����  ��ʾͼƬ
			}
			else
			{
				_index=-1;//���к�����Ϊ-1���������ŵ�һ��
			}
		},2000);	
	};
	autoPlay();//���ú�ִ�к���

