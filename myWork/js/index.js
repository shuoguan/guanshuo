var onoff=true;
var demoNum=0;
var demoWrap=$("#demoWrap");
var demoPointsWrapList=$(".demoPointsWrap").find("li");//右侧栏的点；

addWheelEvent(document,down,up);
function down(){
	if(onoff){//开关
		onoff=false;
		demoNum++;
		if(demoNum>4){
			demoNum=4;
		};
		demoWrap.stop().animate({"top":-demoNum*100+"vh"},100);
		resetActive(demoNum);
		fn(demoNum)
		fn1(demoNum)
		setTimeout(function(){
			onoff=true;
		},500);
	};
};
function up(){
	if(onoff){
		onoff=false;
		demoNum--;
		if(demoNum<0){
			demoNum=0;
		};
		demoWrap.stop().animate({"top":-demoNum*100+"vh"},100);
		resetActive(demoNum);
		fn(demoNum)
		fn1(demoNum)
		setTimeout(function(){
			onoff=true;
		},500);
	};
};
//判断跳转到那一页执行
function fn(demoNum){
	
	if(demoNum==1){
		
		$(".demo_2img img").css({"left":"230px","opacity":"1"})
		$(".domo_2wenz").css({"right":"235px","opacity":"1"})
		
	}else{
		$(".demo_2img img").css({"left":"-235px","opacity":"0"})
		$(".domo_2wenz").css({"right":"-470px","opacity":"0"})
	};
	if(demoNum==2){
		$(".demo_3 ul li").css({"transform":"rotate(0deg)"})
	}else{
		$(".demo_3 ul li").css({"transform":"rotate(180deg)"})
	}
	if(demoNum==3){
		$(".demo_4aimg img").css({"left":"-900px"})
		$(".demo_4bimg img").css({"top":"230px","right":"500px","opacity":"1"})
	}else{
		$(".demo_4aimg img").css({"left":"1520px"})
		$(".demo_4bimg img").css({"top":"160px","right":"530px","opacity":"0"})
	};
}
//function fn2(){
//	$(".demo_4aimg img").css({"left":"-900px"})
//	setInterval(fun)
//	if()
//}
//var a=document.querySelectorAll(".Tabup>div")
//var b=document.querySelectorAll(".demo_tplb li")
 

//右侧栏的点重置对应页数；
function resetActive(index){
	demoPointsWrapList.eq(index).siblings("li");
};

//右侧栏的点点击事件；
demoPointsWrapList.each(function(i,ele){
	demoPointsWrapList.eq(i).click(function(){
//		resetActive(i);
		demoWrap.stop().animate({"top":-i*100+"vh"},300);
		demoNum=i;
		fn1(i)
		fn(i)
	})
});
//tab切换
$(".demo_tplb li").click(function(){
      $(this).addClass("shuxin").siblings().removeClass("shuxin")
      var index=$(this).index()
      $(".Tabup>div").eq(index).css("display","block").siblings().css("display","none")
})
$(".demo_3 ul li").hover(function(){
	$(this).css({"transform":"rotate(180deg)"})
	
},function(){
	$(this).css({"transform":"rotate(0deg)"})
})
//图片切换
function fn1(index){
	console.log(index)
	var lis=document.querySelectorAll(".demoPointsWrap li");
	console.log(lis)
	var arr=["img/h.png","img/w.png","img/k.png","img/m.png","img/r.png"]
	var brr=["img/h-active.png","img/w-active.png","img/k-active.png","img/m-active.png","img/r-active.png"]

	for(var i=0;i<lis.length;i++){
		lis[i].style.backgroundImage="url("+arr[i]+")";
	};
	lis[index].style.backgroundImage="url("+brr[index]+")";
}
//导航栏的事件
$(".demoheader li").hover(function(){
	 var index=$(this).index()
	$(".demoheader li>p").eq(index).css({"width":"100%"})
	$(".demoheader li a").eq(index).css({"color":" #FE9600"})
},function(){
	var index=$(this).index()
	if(index==0){
		$(".demoheader li>p").eq(index).css({"width":"100%"})
		$(".demoheader li a").eq(index).css({"color":" #FE9600"})
	}else{
		$(".demoheader li>p").eq(index).css({"width":"0"})
		$(".demoheader li a").eq(index).css({"color":" #797979"})
	}
	
})
$(".demoheader li:nth-child(3)").hover(function(){
	$(".pinpa").eq(0).fadeIn()
	
},function(){
	$(".pinpa").eq(0).fadeOut()
})
$(".demoheader li:nth-child(5)").hover(function(){
	$(".pinpa").eq(1).fadeIn()
	
},function(){
	$(".pinpa").eq(1).fadeOut()
})
 
//鼠标滚轮兼容；
function addWheelEvent(obj,down,up){
	var browser=window.navigator.userAgent.toLowerCase();
	//firefox;
	if(browser.indexOf("firefox")!=-1){
		obj.addEventListener("DOMMouseScroll",fn);
	}else if(browser.indexOf("chrome")!=-1){
		//chrome;
		obj.addEventListener("mousewheel",fn);
	}else{
		//ie;
		obj.attachEvent("mousewheel",fn);
	};
	function fn(ev){
		var bool=true;
		if(ev.wheelDelta){
			//ie和chrome鼠标往前是正值；
			bool=ev.wheelDelta>0?true:false;
		}else{
			//firefox鼠标往前是负值；
			bool=ev.wheelDelta>0?false:true;
		};
		if(bool){
			up&&up();
		}else{
			down&&down();
		};
		/*
		 	阻止浏览器默认行为；
		 	当在绑定的元素上使用滚轮时，会作用到浏览器的滚动条，如果有的话；
		 */
		ev.preventDefault();
	};
};