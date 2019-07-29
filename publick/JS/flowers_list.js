

 $(function(){
	/********************加减功能*************************/
	var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {

            input_num.value = parseInt(input_num.value) + 1;
        }

        num_jian.onclick = function() {

            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }

        }
    /*********************  动态添加详情页信息   ****************** */
    //1.判断url 中产品的id不为空时
    if(location.search!=""){
        //获取产品的id
        var lid=location.search.split("=")[1];
     console.log(lid)
        $.ajax({
            url:"http://localhost:8080/flowers_list",
            data:{lid},
            type:"get",
            dataType:"json",
            success:function(result){

               // console.log(result)
                var {product,pics}=result;
                $("#short_title").html(product.short_title);
                $("#title").html(product.title);
                $("#hot_price").html(product.hot_price);
                $("#price").html(product.price);
                $("img#big_p1").attr("src",product.big_p1);
                $("img#big_p2").attr("src",product.big_p2);
                $("img#big_p3").attr("src",product.big_p3);
                //2放大镜效果
                //2.1填充图片
                //先填充小图片
                //先定义空的html,准备接多个模块片段
                var html="";
                //遍历pics数组中的每张图片对象
                for(var p of pics){
                    html+=`<div class="s-img1 all-simg">
					<img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}" alt="">
				</div>`
                }
                //将整个html片段填充到ul-imgs中
                var $ulImgs=$("#ul-imgs");
                //定义每个div的宽度
                var divWidth=90;//图片大小+边距+边框
                //将整个html片段填充到ul-imgs中，并根据临时传入的图片计算ul-imgs的长度
                 $ulImgs.html(html)
                        .css("width",pics.length*divWidth)//图片张数*图片大小
                //填充中图片1张
                //设置mimg的src为pics中第一张图片为中图片版本
                var $mImg=$("#mimg");
                var $lgDiv=$("#div-lg");
                $mImg.attr("src",pics[0].md)
                //同时为lgDiv设置背景图图为第一张的lg版本
                 $lgDiv.css(
                        "background-image",
                        `url(${pics[0].lg})`
                )
                //点击箭头。移动小图片
                var $btnLeft=$("#btn-left");
                var $btnRight=$("#btn-right");
                $btnLeft.addClass("disabled")
                //当图片数量<=4张时，右边的按钮禁用
                if(pics.length<=4){
                    $btnRight.addClass("disabled")
                }

				var times=0;//记录单机按钮的次数，初始化为0
                //每单击右边的按钮，次数+1
                $btnRight.click(function(){
                   //按钮上没有disabled才能点击
                   if(!$btnRight.is(".disabled")){
                      times++;
                      //点击一次，就往左右移动 图片大小+边距+边框 的距离
                      $ulImgs.css("margin-left",-times*divWidth);
                      //只要右按钮按过一次，左边就可以点击了
                      $btnLeft.removeClass("disabled");
                      //如果times==pics.length-4
                      if(times==pics.length-4){
                          //说明所有的图片移动完了，右边的按钮禁用
                           $btnRight.addClass("disabled")
                      }
                   }
                })
                //每点击一次左边按钮，times-1，ulImgs的margin-left重新计算
                $btnLeft.click(function(){
                    //如果$btnLeft没有disabled属性，说名可以点击
                    if(!$btnLeft.is(".disabled")){
                        //每点击一次，times减1
                        times--;
                        //重写ulImgs的样式
                       $ulImgs.css("margin-left",-times*divWidth);
                       //只要左边点击了一次，右侧就可以点击了
                       //移除disabled属性
                        $btnRight.removeClass("disabled");
                        //如果times==0时，说明图片点击结束，左键禁用
                        if(times==0){
                             $btnLeft.addClass("disabled")
                        }
                    }
                })
               /*  鼠标进入小图片，中图片切换*/ 
               //事件委托，为父元素绑定鼠标进入事件，但是只用进入img时，才触发事件
               $ulImgs.on("mouseenter",".all-simg>img",function(){
                    //获得当前的图片和其data-md属性
                    $mImg.attr("src",$(this).attr("data-md"));
                    //同时获得当前小图片的data-lg属性，给大图做背景图片
                    $lgDiv.css("background-image",`url(${$(this).attr("data-lg")})`)
               })
               //当鼠标进入中图片上面的透明遮罩层时，
               //切换鼠标滑过中图片时的黑色半透明样式的显示和隐藏
               var $mask=$("#mask");//小遮罩层
               var $smask=$("#super-mask");//大透明层
               var MASK=100;//小遮罩层的大小
               var SMASK=420;//大透明层的大小
               $smask.hover(function(){
                   $mask.css('display','block')
                   //$lgDiv 大图和 $mask 小遮罩层同显示，同隐藏
                    $lgDiv.css('display','block')
               },function(){
				   $mask.css('display','none')
                   //$lgDiv 大图和 $mask 小遮罩层同显示，同隐藏
                    $lgDiv.css('display','none')
			   })
               //让遮罩层跟随鼠标移动
               .mousemove(function(e){
                    var top=e.offsetY-MASK/2;
                    var left=e.offsetX-MASK/2;
                    if(top<0){
                        top=0;
                    }else if(top>SMASK-MASK){
                        top=SMASK-MASK+47;
                    }
                    if(left<0){
                        left=0
                    }else if(left>SMASK-MASK){
                        left=SMASK-MASK
                    }
                    //鼠标每次移动时，动态给 $mask添加距离顶部和左边的样式
                    $mask.css({
                        top:top+"px",
                        left:left+"px"
                    })
                    //同时也要修改大图背景图片的位置
                
                    $lgDiv.css("background-position",`${-left*1}px ${-top*1}px`)
               })

               
            }


        })
    }
    /************加入购物车*************************************************/
    $("#gouwu").click(function(){
        var lid=location.search.split("=")[1];
        var uid=sessionStorage.getItem("uid");
        var s_count=$("#input-num").val();
        console.log(uid)
        if(uid!=null){
         $.ajax({
            url:"http://localhost:8080/flowers_list/cart_table",//cart_table
            data:{lid,uid,s_count},
            type:"get",
            dataType:"json",
            success:function(result){
                if(result==1){
                    alert('添加成功！')
                }
                if(result==0){
                    $.ajax({
                        url:"http://localhost:8080/flowers_list",//cart_table
                        data:{lid},
                        type:"get",
                        dataType:"json",
                        success:function(result){
                         console.log(result)
                            var {product}=result;
                        var {pid,img,short_title,price}=product;
                            $.ajax({
                                url:"http://localhost:8080/flowers_list/opping_car",
                                data:{pid,img,short_title,price,uid,s_count},
                                type:"get",
                                dataType:"json",
                                success:function(result){
                                    if(result==0){
                                         alert('添加成功')
                                    }
                                   
                                }
                            })
                        }
                    
                    })
                }
         }   
    })
}else{
    alert('请登录！')
}
    })
})
  

