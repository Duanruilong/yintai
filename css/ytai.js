window.onload=function(){
// *****导航下拉
	var wechat=$(".log-yt-wechat")[0];
	var seller=$(".yt-seller-wechat")[0];
	wechat.onmouseover=function(){
		seller.style.display="block";

	}
	wechat.onmouseout=function(){
		seller.style.display="none"
	}
// ******
	var phone=$(".log-phone")[0];
	var sellerp=$(".yt-seller-phone")[0];
	phone.onmouseover=function(){
		sellerp.style.display="block";
		// sellerp.style.height="188px";
	}
	phone.onmouseout=function(){
		sellerp.style.display="none";
		// sellerp.style.height="145px";
	}
	// *************************
	var loghome=$(".log-home")[0];
	var myhome=$(".yt-seller-myhome")[0];
	loghome.onmouseover=function(){
		myhome.style.display="block";

	}
	loghome.onmouseout=function(){
		myhome.style.display="none"
	}




		//banner
		var banner_btns=document.getElementsByClassName("btn")
		var banner_imgs=document.getElementsByClassName("yt-banner-item")
		var banner_boxs=document.getElementsByClassName("yt-banner-box")[0]
		var banner_color=["#E82C5E","#F6F3FA","#EBFBFE","#F4C900"]
		for (var i = 0; i < banner_btns.length; i++) {
			banner_btns[i].index=i;
			banner_btns[i].onmouseover=function(){
				num=this.index;     //保留位置重新开始
				for (var i = 0; i < banner_btns.length; i++) {
			//当前触发事件的对象
				banner_imgs[i].style.zIndex="2"
			 	banner_btns[i].style.borderColor="#211616"
				};
				banner_imgs[this.index].style.zIndex="3";
				this.style.borderColor="#e5004f"
			 	banner_boxs.style.backgroundColor=banner_color[this.index];
			}
		};

		//动画
		var lunbo=setInterval(move,3000)
		var num=0;
		function move(){
			num++;
			if (num==banner_imgs.length) {
				num=0
			};
				for (var i = 0; i < banner_btns.length; i++) {
				banner_imgs[i].style.zIndex="1"
			 	banner_btns[i].style.borderColor="#211616"
				};
				banner_imgs[num].style.zIndex="2";
				banner_btns[num].style.borderColor="#e5004f"
			 	banner_boxs.style.backgroundColor=banner_color[num];
			}
			banner_boxs.onmouseover=function(){
			 clearInterval(lunbo);
			}
			banner_boxs.onmouseout=function(){
				lunbo=setInterval(move,3000)
			}
			
			// 箭头的左右选择
			var yt_box=getClass("floor_slide");
			var leftbtns=getClass("leftbtn");
			var rightbtns=getClass("rightbtn");
			var btnbox=getClass("floor_btnbox");   //通过后代选择
			var inner=getClass("floor_inner");
			//容器 左右箭头  对应的圆圈   内部的容器
			for (var i = 0; i < yt_box.length; i++) {
			lunbo2(yt_box[i],leftbtns[i],rightbtns[i],btnbox[i],inner[i])
			};
			
		function lunbo2(yt_box,leftbtns,rightbtns,btnbox,inner){	
			var circles=btnbox.getElementsByTagName("div")
			var flag=true;
			//鼠标进入与离开的时候左右箭头的出现
			yt_box.onmouseover=function(){
				animate(leftbtns,{left:0},200)
				animate(rightbtns,{right:0},200)
			}
			yt_box.onmouseout=function(){
				animate(leftbtns,{left:-30},200)
				animate(rightbtns,{right:-30},200)
			}
			//鼠标的改变引起箭头颜色的改变
			leftbtns.onmouseover=function(){
				this.style.backgroundPosition="left bottom"
			}
			rightbtns.onmouseover=function(){
				if (flag) {			//移到右边的时候箭头颜色的改变
				this.style.backgroundPosition="right bottom"
				};
			}
			leftbtns.onmouseout=function(){
				this.style.backgroundPosition="left top"
			}
			rightbtns.onmouseout=function(){
				this.style.backgroundPosition="right top"
			}
			//鼠标的改变引起按钮颜色与样式的改变
			rightbtns.onclick=moveright;
			leftbtns.onclick=moveleft;
			circles[0].onclick=moveleft;
			circles[1].onclick=moveright;
			function moveright(){
				flag=false;
				animate(inner,{marginLeft:-390})
				circles[0].style.background="#555";
				circles[1].style.background="#e5004f"
			}
			function moveleft(){
				flag=true;
				animate(inner,{marginLeft:0})
				circles[1].style.background="#555";
				circles[0].style.background="#e5004f"
			}
		}
		



		// 选项卡效果
			var esas=document.getElementsByClassName("eva-switchable-active");
			var plt=document.getElementsByClassName("pr_list_t");
			for (var i = 0; i < esas.length; i++) {
				esas[i].onmouseover=(function(ae){
					function be(){
						for (var i = 0; i < plt.length; i++) {
						plt[i].style.display="none";
						esas[i].style.borderColor="#333333";
						}
						plt[ae].style.display="block";
						this.style.borderColor="#e5004f";
							
					}
					return be;
				})(i)
			};



			var esa=document.getElementsByClassName("eva-switchable-active1");
			var pt=document.getElementsByClassName("eva-switchable-panels1");
			for (var i = 0; i < esa.length; i++) {
				esa[i].onmouseover=(function(aa){
					function bb(){
						for (var i = 0; i < pt.length; i++) {
						pt[i].style.display="none";
						esa[i].style.borderColor="#333333";
						};
						pt[aa].style.display="block";
						this.style.borderColor="#e5004f";
					}
					return bb;
				})(i)
			};


			// b本周推荐

				function border(obj,time){
					//给容器添加相对定位
					obj.style.position="resative";
					//创建div
					var div1=document.createElement("div");
					var div2=document.createElement("div");
					var div3=document.createElement("div");
					var div4=document.createElement("div");
					//给div添加样式，定位，宽度，颜色
					div1.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;height:1px;";
					div2.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;width:1px;";
					div3.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;height:1px;";
					div4.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;width:1px;";
					// 追加到obj
					obj.appendChild(div1);
					obj.appendChild(div2);
					obj.appendChild(div3);
					obj.appendChild(div4);

					var width=parseInt(getStyle(obj,"width"))+2;
					var height=parseInt(getStyle(obj,"height"))+2;
					obj.onmouseover=function(){
						animate(div1,{width:width},time)
						animate(div2,{height:height},time)
						animate(div3,{width:width},time)
						animate(div4,{height:height},time)
					}
					obj.onmouseout=function(){
						animate(div1,{width:0},time)
						animate(div2,{height:0},time)
						animate(div3,{width:0},time)
						animate(div4,{height:0},time)
					}
				}
				var one=$(".border_animation1");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				var one=$(".border_animation2");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				var one=$(".border_animation3");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				var one=$(".border_animation4");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				var one=$(".img_wrap");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				var one=$(".border_benzgou");
				for (var i = 0; i < one.length; i++) {
					border(one[i],500)
				};
				




		
// ********轮播图**********************************

	var panels=$(".switchable-panels");
	var preve=$(".eva-switchable-prev");
	var nexte=$(".eva-switchable-next");
	for (var i = 0; i < panels.length; i++) {
		lunbo3(panels[i],preve[i],nexte[i])
	};
	function lunbo3(panels,nexte,preve){
		nexte.onclick=function(){
			animate(panels,{marginLeft:-170},1000,
				function(){
					var first=getFirst(this);
					this.appendChild(first)
					this.style.marginLeft=0;
				})
		}
		var flag=true;
		preve.onclick=function(){

			var last=getLast(panels);
			var first=getFirst(panels);
			if (!flag) {return;};   //为假的时候就终止
				flag=false;
			panels.insertBefore(last,first)
			panels.style.marginLeft="-170px"
			animate(panels,{marginLeft:0},1000,
				function(){
						flag=true;   //为真的时候就再次开启
					})
		}
	}


// *********导航抽屉************

		var lists=$("dt");
		var submenus=$(".submenu");
		for (var i = 0; i < submenus.length; i++) {
			var lis=$("li",submenus[i]);  //后代选择器
			var top=lis.length*500;
			submenus[i].top=top;
		};

		for (var i = 0; i < lists.length; i++) {
			lists[i].index=i;
			// hover(,function(){},function(){})
			hover(lists[i],function(){
			submenus[this.index].style.display="block";
			// submenus[this.index].style.top="50";

			animate(submenus[this.index],{top:submenus[this.index].top},100)
			},function(){
			submenus[this.index].style.display="none";
			submenus[this.index].style.top="0";
			})

		}

// *************************按需加载****************

		var floor1=$(".floorimg");
		var top=[];
	//兼容性的判断，进行赋值为1 的判断方法
	for (var i = 0; i < floor1.length; i++) {
		top.push(floor1[i].offsetTop);
	};
		var doc=document.body;
		doc.offsetTop=1;
		if (doc.offsetTop!=1) {
			doc=document.documentElement;
		};
			// 获取浏览器 容器的高度
		var ch=document.documentElement.clientHeight;

	    addEvent(window,"scroll",function(){
		// 滚动条事件  获取滚动条的高度
		var scroll=doc.scrollTop;
			for (var i = 0; i < floor1.length; i++) {
				if (scroll+400>top[i]&&floor1[i].getAttribute("flag")!="true") {
					var img=$('img',floor1[i]);
					for (var j = 0; j < img.length; j++) {
						img[j].src=img[j].getAttribute("asrc")
					};
					floor1[i].setAttribute("flag",true)
				};
			};
		// 比较容器的高度与滚动条的高度
		// 满足条件  把图片的地址替换为正确的地址
		})

// *********滚动条加楼层*************
				// var box=$('div',$(".float_nav"));
				// alert(box.length)
				var floor=$(".float_nav")[0];
				var btn=$(".y_btn");
				var conten=$(".yt_floor_item");
				var yt_top=$(".Y_floor_top")[0];

				var doc=document.body;   //Chrome 谷歌
		            doc.scrollTop=1;   //赋值进行判断
			          if (doc.scrollTop!=1) {
			   	         doc=document.documentElement;
				      //FF/ie
			         }
				document.documentElement.scrollTop=1;
				if (document.documentElement.scrollTop=1) {
					var scrollobj=document.documentElement;
				}else{
					var scrollobj=document.body;
				}
				var flag=true;
				var flag1=true;

				addEvent(window,"scroll",function(){
					var st=doc.scrollTop;
					for (var i = 0; i < btn.length; i++) {
						if (st-100>conten[i].offsetTop) {
							for (var j = 0; j < btn.length; j++) {
								btn[j].style.background="";
								btn[j].style.cssText=""
							};
								btn[i].style.background="#e5004f ";
								btn[i].style.cssText="text-align: center;line-height: 18px;font-size: 14px;color: #fff;background: #e5004f none repeat scroll 0 0"
								
								
						};
					};
					
					if (st>600) {
						if (flag) {
							flag=false;flag1=true;
							animate(floor,{opacity:1,display:"block"},300)
						}
					}else{
						if (flag1) {
							flag=true;flag1=false;
							animate(floor,{opacity:0,display:"none"},300)
						}
					}
				})
				
				for (var i = 0; i < btn.length; i++) {
					btn[i].index=i;
					btn[i].onclick=function(){
						var ac=conten[this.index].offsetTop;
						animate(scrollobj,{scrollTop:150+ac})
					}
				};
				
				yt_top.onclick=function(){
					animate(scrollobj,{scrollTop:0})
				}








	}










