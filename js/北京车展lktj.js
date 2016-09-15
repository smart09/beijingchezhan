/*鼠标点击时内容进行显示/隐藏切换，在写代码时用了div造成代码重构，应该使用li列表,然后通过类进行样式操作*/
$(function() {
   $("a.btnA").click(function() {
	   var divUl1=$(".select-list-xl");
	   if(divUl1.css("display")!="none"){
		   divUl1.css("display","none");
	   }else{
		   divUl1.css("display","block");
	   }
   })
});
$(function() {
   $("a.btnB").click(function() {
	   var divUl2=$(".select-list-xl2");
	   if(divUl2.css("display")!="none"){
		   divUl2.css("display","none");
	   }else{
		   divUl2.css("display","block");
	   }
   })
});
/*利用切换toggle无法实现
$(function() {
   $("a.btnA").click(function() {
	   var divUl=$(".select-list-xl");
	   divUl.toggle(
		   function(){
			   divUl.addClass("cur");
		   },function(){
			   divUl.removeClass("cur");
		   });
   });
});
*/

//点击“展厅”内容进行切换
/*function dotClick(prev,next){
	var myul=$(".lbbox");
	var mylis=$(".lbbox li");
	var liwidth=$(".lbbox li").css("width");
	liwidth=parseInt(liwidth);
	var steps=$(".lbbox li").length;
	$(".lbbox").width(liwidth*steps);
	prev.click(function(){ 
		num--;
		if(num==-1){
			num=mylis.length;
		}
		sprot();
		}
	function sport(){
		var liwidth=$(".lbbox").children("li").css("width");  
		num++;
		var distance=liwidth*-num;
		if(num>myul.children("li:last").index()){
			num=1;
			myul.css("left",0).stop().animate({left:(liwidth*-1)},300);
		}else{
			myul.stop().animate({left:distance},300);
		}
	}
}
dotClick($(".lBtn_1"),$("rBtn_1"));
 /*
 $(function(){
	 var $key=0;
	 $(".rBtn_1").click(function(){
		 var $map=$(".roombox ul li");
		 $map.eq($key).fadeOut(600);
		 $key++
		 if($map>$(".roombox ul li").length-1){
			 $key=0;
		 }
		 $map.eq($key).fadeIn(300);
	 });
	 $(".lBtn_1").click(function(){
		 var $map=$(".roombox ul li");
		 $map.eq($key).fadeOut(600);
		 $key--
		 if($map<-$(".roombox ul li").length+1){
			 $key=0;
		 }
		 $map.eq($key).fadeIn(300);
	 });
 });
 */
 
/*$(function(){
	var oLi=document.getElementsByClassName("lbbox").getElementsByTagName("li");
	var oLi=$(".lbbox li");
	var oUlWcount=0;
	for(var i=0;i<oLi.length;i++){
		oUlWcount+=parseInt(oLi[i].width);
	}
});
$(function(){
	//if($(".roombox li").length>1){
		classImgTab($(".rBtn_1"),$(".lBtn_1"),$(".lbbox"),1);
	//}
	var oUllength=$(".roombox li").length;
	var oLi=$(".roombox li")[0].width;
	function classImgTab(next,prev,divcon,num){
		next.click(function(){
			console.log(num);
			divcon.stop().animate({"left":-num*oUllength[num]*oLi},500,function(){
				num++
				if(num>=oUllength){
					num=0;
				}
			});
		});
		prev.click(function(){
			console.log(num);
			divcon.stop().animate({"left":-num*oUllength[num]*oLi},500,function(){
				num--;
				if(num<=-1){
					num=0;
				}
			});
		});
	}
});
*/

/*资讯内容自动切换开始*/
//点击按钮更换图片
$(".auto-lb span").click(function(val){         //获取按钮icon图标
	var num=$(this).index();
	//获取内容数量
	var imgCount=$(".con-item").length;
	//获取下一个元素的在其父元素中的下标
	if(num<imgCount-1){
		num++;
	}else{
		num=0;
	}
	$(".con-item").hide();     //隐藏内容
	$(this).addClass("cur").siblings().removeClass("cur");  //设置按钮icon图标的属性
	$(".con-item").eq(num).fadeIn(200);  //内容淡出
})
//自动切换内容
function showImg(val){
	//获取内容数量
	var imgCount=$(".con-item").length;
	//显示索引为val内容
	$(".con-item").hide();
	$(".con-item").eq(val).fadeIn(200);
	$(".auto-lb span").eq(val).addClass("cur").siblings().removeClass("cur");
	if(num<imgCount-1){
		num++;
	}else{
		num=0;
	}
	//8秒后重新绑定图片
	setTimeout(function(){showImg(num);},5000);
}
    var num=0;showImg(num);

/*资讯内容自动切换结束*/

/*资讯版块鼠标划过时自动切换开始*/
/*function setTab(n){
	if(n<1||n>4){
		return false;
	}
	var i;
	for(i=1;i<4;i++){
		$("#tab_tit_"+i).removeClass("cur");
		$("#tab－"+i).removeClass("jswitch");
	}
	    $("#tab_tit_"+i).addClass("cur");
		$("#tab－"+i).addClass("jswitch");
}*/
function  setTab(n){
	var tabs=document.getElementById("auto-index-tab-article").getElementsByTagName("li");
	//var tabs=$("#auto-index-tab-article li");  //jq形式
	var show=document.getElementById("auto-index-lazyload-article").children;
	//var show=$("#auto-index-lazyload-article").children();  //jq形式
	for(var i=0;i<tabs.length;i++){
		if(i==n){
			tabs[i].className="cur";
			show[i].className="jswitch";
		}else{
			tabs[i].className="";
			show[i].className="title-content-item";
		}
	}
}
/*资讯版块鼠标划过时自动切换结束*/

