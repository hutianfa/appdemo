$(document).ready(function(){
	window.jQuery(function($){
		autoPlay();
	   /*第二屏图片自动切换*/
		function autoPlay(){
			var num=0 ,id=0,set=null;
			$(".page2-right>div").eq(0).show();
			set = window.setInterval(function(){
				num<$(".page2-right>div").length-1? num++ : num=0;
				$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut();
				$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
				$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
			},3000);
			$(".page2-left ul li").mouseover(function(){
				clearInterval(set);
				num=$(this).index();
				$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut(); 
				$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
				$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
			});
			$(".page2-left ul li").mouseout(function(){
				set = window.setInterval(function(){
				num<$(".page2-right>div").length-1? num++ : num=0;
				$(".page2-right>div").eq(num).fadeIn().siblings().fadeOut();
				$(".page2-left ul li").eq(num).children().addClass('none').parent().siblings().children().removeClass('none');
				$(".page2-left ul li").eq(num).removeClass('none').siblings().addClass('none');
				},3000);
			})
		}
		$(".tree-child span").addClass("shan");
		$(".tree-child span").hover(function(){      
			$(this).find("label").css("display","block");
		},function(){
			$(this).find("label").css("display","none");
		});
		
		//导航标题事件
		var onum=0;
		$("#headerHover li").click(function(){
			onum=$(this).index();
			var page="page"+onum;
			$(".page"+onum).show().addClass("swiper-slide-visible swiper-slide-active").siblings().hide().removeClass("swiper-slide-visible swiper-slide-active");
		    $("div.pagination span").eq(onum).addClass("swiper-visible-switch swiper-active-switch").siblings().removeClass("swiper-visible-switch swiper-active-switch");
		        page=="page0" ? $(".page0_left").show().addClass("animated rollIn") && $(".page0_right").show().addClass("animated fadeInRight"):
		        page=="page1" ? $(".page1_left").show().addClass("animated fadeInLeft") && $(".page1_right").show().addClass("animated fadeInRight"):
		        page=="page2" ? $(".page2_left").show().addClass("animated fadeInLeft") && $(".page2_right").show().addClass("animated fadeInRight"):
		        page=="page3" ? $(".page3_left").show().addClass("animated rotateInDownLeft") && $(".page3_right").show().addClass("animated zoomInDown"):
		        $(".page4_left").show().addClass("animated rotateInDownRight") && $(".page4_right").show().addClass("animated fadeInUpBig");
		});
	     //鼠标滚动事件
			var _width=$(window).width();
			var _height=$(window).height();
			$(".swiper-container,.swiper-slide").css({"width":_width,"height":_height});
			$(window).resize( function(){
				_width=$(window).width();
				_height=$(window).height();
				$(".swiper-container,.swiper-slide").css({"width":_width,"height":_height});
			})
			var _num=0,pagenum="";
			var _box=$('.swiper-container');
			var _page=$(".swiper-slide");
			var _size=$(".swiper-slide").size();
			var wrap=$(".swiper-wrapper");
			var pager_span=$(".pagination span");
			//回调函数   
			function callbacks(){
				    pagenum="page"+_num;
					$("."+pagenum).show().addClass("swiper-slide-visible swiper-slide-active").siblings().hide().removeClass("swiper-slide-visible swiper-slide-active");
					pagenum=="page0" ? $(".page0_left").show().addClass("animated rollIn") && $(".page0_right").show().addClass("animated fadeInRight"):
					pagenum=="page1" ? $(".page1_left").show().addClass("animated fadeInLeft") && $(".page1_right").show().addClass("animated fadeInRight"):
					pagenum=="page2" ? $(".page2_left").show().addClass("animated fadeInLeft") && $(".page2_right").show().addClass("animated fadeInRight"):
					pagenum=="page3" ? $(".page3_left").show().addClass("animated rotateInDownLeft") && $(".page3_right").show().addClass("animated zoomInDown"):
					$(".page4_left").show().addClass("animated rotateInDownRight") && $(".page4_right").show().addClass("animated fadeInUpBig");
			}	
			$('.page0').delay(500).addClass("swiper-slide-visible swiper-slide-active").siblings().hide().removeClass("swiper-slide-visible swiper-slide-active");
			$(".page0_left").show().addClass("animated rollIn") && $(".page0_right").show().addClass("animated fadeInRight")
			function mouseWheel(event, delta){
				//1，判断滚动方向，页数 递增或递减
				event.deltaY==1 ? _num-- : _num++;
				 _num < 0 && (_num = _size - 1);
		   		 _num > _size-1 && (_num = 0);
				//2，每一次滚动，就会删除绑定，3秒后再次绑定
				$('.swiper-container').unbind('mousewheel',mouseWheel);
				setTimeout( function(){
					_box.bind('mousewheel',mouseWheel);
				},1000)
				pagenum="page"+_num;
				//3，当前页数高亮
				pager_span.eq(_num).addClass("swiper-visible-switch swiper-active-switch").siblings().removeClass("swiper-visible-switch swiper-active-switch");
				$("."+pagenum).show().addClass("swiper-slide-visible swiper-slide-active").siblings().hide().removeClass("swiper-slide-visible swiper-slide-active");
				pagenum=="page0" ? $(".page0_left").show().addClass("animated rollIn") && $(".page0_right").show().addClass("animated fadeInRight"):
				pagenum=="page1" ? $(".page1_left").show().addClass("animated fadeInLeft") && $(".page1_right").show().addClass("animated fadeInRight"):
				pagenum=="page2" ? $(".page2_left").show().addClass("animated fadeInLeft") && $(".page2_right").show().addClass("animated fadeInRight"):
				pagenum=="page3" ? $(".page3_left").show().addClass("animated rotateInDownLeft") && $(".page3_right").show().addClass("animated zoomInDown"):
				$(".page4_left").show().addClass("animated rotateInDownRight") && $(".page4_right").show().addClass("animated fadeInUpBig");
				//4，top=页数乘以页面高度，div动画向上定位到top
				var offset_top=_height*_num;
				wrap.stop(false,true).animate({"top":-offset_top+"px"},500,callbacks);
			}
			setTimeout( function(){
				_box.bind('mousewheel',mouseWheel);//绑定鼠标滚动事件
			},2000) 
			//点击切换
			 function pagers(){
					var index=$(this).index();
					$(this).addClass("swiper-visible-switch swiper-active-switch").siblings().removeClass("swiper-visible-switch swiper-active-switch");;
					_num=index;
					pagenum ="page"+_num;
					var offset_top=_height*_num;
					wrap.stop(false,true).animate({"top":-offset_top+"px"},500,callbacks);
					$("."+pagenum).show().addClass("swiper-slide-visible swiper-slide-active").siblings().hide().removeClass("swiper-slide-visible swiper-slide-active");
					return false;
			}
			pager_span.bind("click",pagers);
		
		//底部菜单
		$(".footer-bot ul li").click(function(e){
			var index=$(this).index();
			$(".footer-box>div").eq(index).slideUp(1000).slideDown().siblings().hide();
			e.stopPropagation();
		})
		$(".close-foot").click(function(){
			$('.footer-box>div').slideUp();
		})   
		$(".page4_main").click(function(e){
			$('.footer-box>div').slideUp();
			e.cancelBubble;
		});
		//登录弹出事件
		$(".login").click(function(){
			$(".opcity").show();
			$(".login-page").show().addClass("animated fadeInDown").removeClass("zoomOutUp");
		});
        $(".close").click(function(){
        	$(".opcity").hide();
			$(".login-page").hide().addClass("animated zoomOutUp").removeClass("fadeInDown");
			$(".register-enter").hide().addClass("animated zoomOutUp").removeClass("fadeOutDown");
			$(".perdonal-register").hide().removeClass("animated fadeInDown");
			$(".company-register").hide().removeClass("animated fadeInDown");
        });
        //注册弹出事件
        $(".register").click(function(){
        	$(".opcity").show();
        	$(".register-enter").show().addClass("animated fadeInDown").removeClass("zoomOutUp");
        });
        $(".geren-zhuce").click(function(){
        	 $(".opcity").show();
        	 $(".register-enter").hide().addClass("animated zoomOutUp").removeClass("fadeOutDown");
        	 $(".perdonal-register").show().addClass("animated fadeInDown");
        });
        $(".qiye-zhuce").click(function(){
        	$(".opcity").show();
        	$(".register-enter").hide().addClass("animated zoomOutUp").removeClass("fadeOutDown");
        	$(".company-register").show().addClass("animated fadeInDown");
        });
        //验证信息

	});
	
});