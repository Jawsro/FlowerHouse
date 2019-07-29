$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");    
        }
    })
     $.ajax({
        url:"footer.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("footer");
        }
    })
    $.ajax({
        url:"login_car.html",
        type:"get",
        success:function(result){
            $('aside').html(result)
            /****************************** */
    $(function(){
    $("#close").click(function(){
        $("#login").css("display","none");
        $("#opacity").css("display","none");
    })
    //点击  用户注册 按钮时
    $("#change_register").click(function(){
        $("#login").css("display","none");
        $("#register").css("display","block")
    })
    // //点击 注册会员 按钮时
    $("#chang_login").click(function(){
         $("#register").css("display","none");
          $("#login").css("display","block");
    })
    //点击关闭按钮时
    $("#close1").click(function(){
        $("#register").css("display","none");
        $("#opacity").css("display","none");
    })
    $('.hidde').click(function(){
        $('#change').css('display','none');
         $("#opacity").css("display","none");
    })
/*******************注册功能***************************/
        //手机号输入框
        var a=/^1[3-8]\d{9}$/;//手机号格式 
       //获取手机号输入框的内容
        $("#text_uphone").css({
                "font-size":12,
                "color":"red"
        })
        //手机号输入框失去焦点时
         $("#phone").blur(function(){
             if($(this).val()==''){
                $("#logon").prop("disabled",true)  
            }else{
                $("#logon").prop("disabled",false)
             }      
            var phone=$("#phone").val(); //获取手机号输入框的内容
            //发送ajax请求，判断该用户是否已注册
            $.ajax({
                url:"http://localhost:8080/login/sel",
                data:{phone},
                type:"get",
                dataType:"json",
                success:function(result){
                //1.如果没有注册
                    if(result=="1"){
                        $("#text_uphone").html("该手机号已注册");
                    }
                    //判断手机号
                    else if(phone==""){
                        $("#text_uphone").html("请输入手机号");
                    }else if(!a.test(phone)){
                        $("#text_uphone").html("手机号格式不正确");
                    }else if(a.test(phone)){
                        $("#text_uphone").html("");
                    }
                }
            })
            
         })

     /**** ******    //密码输入框  **************/
         var reg=/^[a-zA-Z0-9]{6,16}$/;//密码格式
         $("#text_upwd").css({
                "font-size":12,
                "color":"red"
            })
         //密码输入框失去焦点时
         $("#pwd").blur(function(){
              var pwd=$("#pwd").val();//获取密码输入框的内容
            //判断密码
            if(pwd==""){
                $("#text_upwd").html("请输入密码");
           }else if(!reg.test(pwd)){
               $("#text_upwd").html("密码须由6-16个字符组成，区分大小写");
           }else if(reg.test(pwd)){
               $("#text_upwd").html("");
           }
         })
         // //确认再次输入的密码
        
          $("#text_pwd").css({
                "font-size":12,
                "color":"red"
            })
        $("#pwd2").blur(function(){
             var pwd2=$("#pwd2").val();
            //确认再次输入的密码
        if(pwd2==""){
            $("#text_pwd").html("请再次输入密码");
            }else if(pwd2!=$("#pwd").val()){
                 $("#text_pwd").html("密码输入错误");
            }else if(pwd2==$("#pwd").val()){
                 $("#text_pwd").html("");
            }
        })
        
 /*****************************点击  注册  按钮提交数据给数据库********************************/       
        $("#logon").click(function(){
            var phone=$("#phone").val();
            var pwd=$("#pwd").val();
            $.ajax({
            url:"http://localhost:8080/login/sel",
            data:{phone},
            type:"get",
            dataType:"json",
            success:function(result){
                if(result=="0"){ //手机号未被注册
                    var a=/^1[3-8]\d{9}$/;
                    var reg=/^[a-zA-Z0-9]{6,16}$/;
                    if(a.test(phone)&&reg.test(pwd)){
                    $.ajax({
                            url:"http://localhost:8080/login/insert",
                            data:{phone,pwd},
                            type:"post",
                            success:function(){}

                        })
                    }
                }
        }
    })
                    $("#register").css("display","none");
                    $("#opacity").css("display","none");
 })
 //手机号输入框获得焦点
    $("#phone").focus(function(){
         $("#text_uphone").html("");
    })
    $("#pwd").focus(function(){
        $("#text_upwd").html("");
    })
    $("#pwd2").focus(function(){
         $("#text_pwd").html("");
    })

  /*******************************  登录  ********************************/      
  $("#button_in").click(function(){
        var uphone=$("#uphone").val();
        var upwd=$("#upwd").val();
        if(uphone==""){
            $("#text_uphone1").html("请输入手机号");
        }
        if(upwd==""){
            $("#text_upwd1").html("请输入密码");
        }

        if(!a.test(uphone)){
            $("#text_uphone1").html("手机号格式不正确");
        }else if(!reg.test(upwd)){
             $("#text_upwd1").html("密码须由6-16个字符组成，区分大小写");
        }else if(a.test(uphone)&&reg.test(upwd)){
            $.ajax({
            url:"http://localhost:8080/login/login",
            data:{uphone,upwd},
            type:"post",
            success:function(result){
                console.log(result)
                if(result!=0){
                     $("#danger").html("登录成功");
                     location.href=location.search;
                    alert('登陆成功！')
                     var uid=result[0].uid;//获取登录用户的id
                     sessionStorage.setItem("uid",uid);//浏览器保存用户id
                     $("#login").css("display","none");
                     $("#opacity").css("display","none");
                  }else{
                     $("#danger").html("用户名或密码错误")
                     $("#uphone").val('');
                     $("#upwd").val('');

                } 
            }

        })
    }

    })
    $("#uphone").focus(function(){
        $("#text_uphone1").html("");
    })
    $("#upwd").click(function(){
        $("#text_uphone1").html("");
    })
    var g_id=sessionStorage.getItem("uid");
    $("#login_in").click(function(){
        // var g_id=sessionStorage.getItem("uid");console.log(g_id,typeof g_id)
        $("#opacity").css("display","block");
        if(g_id==undefined){
            $("#login").css("display","block")
        }else{
            $("#change").css("display","block")
         }

    /***************点击  退出登录  刷新页面  清除登录用户的id************* */
        $(".color").click(function(){
            sessionStorage.clear();
            location.href=location.search;
        })
    })
    $(function(){
    $("#cart").click(function(){
        var s_uid1=sessionStorage.getItem("uid");console.log(s_uid1)
    $.ajax({
        url:"http://localhost:8080/shopping_car/car",
        data:{s_uid1},
        type:"get",
        dataType:"json",
        success:function(result){
           var html="";
           for(var i=0;i<result.length;i++){
            html+=`
                <tr class="shopping">
                    <td width=5% >
                        <input type="checkbox"class="checkbox1 checkboxstyle" >
                    </td>
                    <td width=10%>
                        <img src="${result[i].s_img}" alt="" class="td_img" data-id="${result[i].sid}">
                    </td>
                    <td width=30%>
                        <span>${result[i].s_title}</span>
                    </td>
                    <td width=10% class="dan">
                        <span>￥</span><span class="price">${result[i].s_price.toFixed(2)}</span>
                    </td>
                    <td width=10% class="button">
                            <input type="text" value="-"  class="minus input">
                            <span class="count input" >${result[i].s_count}</span>
                            <input type="text" value="+"  class="plus input">
                    </td>
                    <td width=10%>
                        <span class="color">￥</span><span class="color" class="totle">${(result[i].s_price*result[i].s_count).toFixed(2)}</span>
                    </td>
                    <td td width=20%>
                        <span class="hover move" data-sid=${result[i].sid}>移除</span>
                    </td>
                </tr>
            `
        }
        $("#tbody").html('');
        $("#tbody").html(html)
          $(".move").click(function(){
             console.log(222)
             var sid=$(this).attr('data-sid');
             $.ajax({
                    url:"http://localhost:8080/shopping_car/delect",
                    data:{sid},
                    type:"get",
                    dataType:"json",
                    success:function(result){
                        if(result=="1"){
                             var s_uid1=sessionStorage.getItem("uid");console.log(s_uid1)
                             $.ajax({
                                url:"http://localhost:8080/shopping_car/car",
                                data:{s_uid1},
                                type:"get",
                                dataType:"json",
                                success:function(result){
                                 var html="";
           for(var i=0;i<result.length;i++){
            html+=`
                <tr class="shopping">
                    <td width=5% >
                        <input type="checkbox"class="checkbox1 checkboxstyle" >
                    </td>
                    <td width=10%>
                        <img src="${result[i].s_img}" alt="" class="td_img" data-id="${result[i].sid}">
                    </td>
                    <td width=30%>
                        <span>${result[i].s_title}</span>
                    </td>
                    <td width=10% class="dan">
                        <span>￥</span><span class="price">${result[i].s_price.toFixed(2)}</span>
                    </td>
                    <td width=10% class="button">
                            <input type="text" value="-"  class="minus input">
                            <span class="count input" >${result[i].s_count}</span>
                            <input type="text" value="+"  class="plus input">
                    </td>
                    <td width=10%>
                        <span class="color">￥</span><span class="color" class="totle">${(result[i].s_price*result[i].s_count).toFixed(2)}</span>
                    </td>
                    <td td width=20%>
                        <span class="hover move" data-sid=${result[i].sid}>移除</span>
                    </td>
                </tr>
            `
        }
                            $("#tbody").html('');
                            $("#tbody").html(html)
                            var n=1;//数量初始化
        var sum=0;//单件产品的总金额
        $(".plus").click(function(){
            $(this).prev().html(parseInt($(this).prev().html()) + 1)
                var $a=$(this);
            var num= $(this).prev().html();
            var price=$a.parent().prev().children(".price").html();//产品单价
            sum=(num*price).toFixed(2);
            var totle=$a.parent().next().children().last().html(sum);
            console.log('start');
            result1()
            console.log('end');
        })
        $(".minus").click(function(){
            var $a=$(this);
            $(this).next().html(parseInt($(this).next().html()) - 1);
                if (parseInt($(this).next().html()) <= 1) {
                    $(this).next().html(1);
                }
                var num=$(this).next().html();
                var price=$a.parent().prev().children(".price").html();//产品单价
                sum=(num*price).toFixed(2);
                console.log(num,sum)
                var totle=$a.parent().next().children().last().html(sum);
                result1()
        })
        /****** 2. 选中产品并计算 总价相加添加到总计********/   
        // //2.3获取事件触发元素
        function result1() {
            var allprice = 0;//产品总价
            var allnum = 0;//产品总件数
            $(".shopping").each(function() {
                if ($(this).find(".checkboxstyle")[0].checked == true) {
                    allprice += parseFloat($(this).find(".price").html()) * parseInt($(this).find(".count").html());
                    allnum += parseInt($(this).find(".count").html());
                } else {
                    allprice += 0;
                    allnum += 0;
                }
            });
            $("#settlement").html(allprice.toFixed(2));
            $("#allnum").html(allnum);
        }
        /*******************     点击全选 ，多选框  状态  操作****************************** */
          $(".SelectAll").click(function(){console.log(2222)
            var checkAll=$(this).prop("checked");
            $(".checkboxstyle").each(function(){
                if(checkAll){
                    $(this).prop("checked",true);
                    $(".SelectAll").prop("checked",true);
                }else{
                    $(this).prop("checked",false);
                    $(".SelectAll").prop("checked",false);
                }
            })
            result1()
        })
        /******************  点击多选框 ，全选框状态**********************/
        $(".checkboxstyle").click(function(){
                $(".SelectAll").prop("checked",$(".checkboxstyle").length==$(".checkboxstyle:checked").length);
                result1()
            })
                                     }
                              })
                        }
                 }
             })
         })
                 var n=1;//数量初始化
        var sum=0;//单件产品的总金额
        $(".plus").click(function(){
            $(this).prev().html(parseInt($(this).prev().html()) + 1)
                var $a=$(this);
            var num= $(this).prev().html();
            var price=$a.parent().prev().children(".price").html();//产品单价
            sum=(num*price).toFixed(2);
            var totle=$a.parent().next().children().last().html(sum);
            console.log('start');
            result1()
            console.log('end');
        })
        $(".minus").click(function(){
            var $a=$(this);
            $(this).next().html(parseInt($(this).next().html()) - 1);
                if (parseInt($(this).next().html()) <= 1) {
                    $(this).next().html(1);
                }
                var num=$(this).next().html();
                var price=$a.parent().prev().children(".price").html();//产品单价
                sum=(num*price).toFixed(2);
                console.log(num,sum)
                var totle=$a.parent().next().children().last().html(sum);
                result1()
        })
        /****** 2. 选中产品并计算 总价相加添加到总计********/   
        // //2.3获取事件触发元素
        function result1() {
            var allprice = 0;//产品总价
            var allnum = 0;//产品总件数
            $(".shopping").each(function() {
                if ($(this).find(".checkboxstyle")[0].checked == true) {
                    allprice += parseFloat($(this).find(".price").html()) * parseInt($(this).find(".count").html());
                    allnum += parseInt($(this).find(".count").html());
                } else {
                    allprice += 0;
                    allnum += 0;
                }
            });
            $("#settlement").html(allprice.toFixed(2));
            $("#allnum").html(allnum);
        }
        /*******************     点击全选 ，多选框  状态  操作****************************** */
          $(".SelectAll").click(function(){console.log(2222)
            var checkAll=$(this).prop("checked");
            $(".checkboxstyle").each(function(){
                if(checkAll){
                    $(this).prop("checked",true);
                    $(".SelectAll").prop("checked",true);
                }else{
                    $(this).prop("checked",false);
                    $(".SelectAll").prop("checked",false);
                }
            })
            result1()
        })
        /******************  点击多选框 ，全选框状态**********************/
        $(".checkboxstyle").click(function(){
                $(".SelectAll").prop("checked",$(".checkboxstyle").length==$(".checkboxstyle:checked").length);
                result1()
            })
     }
    })
        $("#shopping_car").css("display","block");
        $("#opacity").css("display","block");
    })
    /*********************购物车功能*******************/
   /************    点击   继续购物  购物车页面关闭******************* */
   $("#go_on").click(function(){
        $("#shopping_car").css("display","none");
        $("#opacity").css("display","none");
   })
   /********************  点击  X 购物车页面关闭***************** */
   $("#close3").click(function(){
       $("#shopping_car").css("display","none");
        $("#opacity").css("display","none");
   })
    })

/*********************************** */

           //header指的是<header id="headerin"></header>中的元素header
           ///

//main.js
//1、声明全局变量
var can1;       //画布1
var ctx1;       //画笔1
var canWidth;   //画布宽度和高度
var canHeight;
var flower;     //花瓣
//创建执行函数
function flowerFall(){
    init();
    fallLoop();
    // console.log(1);
}
//创建函数init 初始化
function init(){
    //初始化画布和画笔
    can1=document.getElementById("can");
    ctx1=can1.getContext("2d");
    //初始化宽高
    canWidth=can1.width;
    canHeight=can1.height;
    //创建花瓣对象并调用初始化方法
    flower=new flowerObj();
    flower.init();
    // console.log(2);

}
//创建函数loop 循环绘制元素
function fallLoop(){
    
    requestAnimationFrame(fallLoop);
    clearCan();
    flower.draw();
    flowerMonitor();
    
    

}



//清空画布
function clearCan(){
    ctx1.clearRect(0,0,canWidth,canHeight);
}
document.body.onload=flowerFall;

        //    ///////////////////////////////////////////////////////////////////////////////////////////
        //    ////////////////////////////////////////////////////////////////////////////////////////////



//flower.js
//功能：创建花瓣
//1：创建构造函数 flowerObj
var flowerObj = function () {
    //花瓣图片
    this.pic1 = new Image();
    this.pic2 = new Image();
    this.pic3 = new Image();

    //创建变量保存花瓣x。y位置
    this.x = [];
    this.y = [];
    //保存花瓣宽度
    this.width = [];
    //保存花瓣下落速度
    this.speed = [];
    //保存生成花瓣的x轴位置，花瓣在画布顶部随机位置生成
    this.position = [];
    //是否显示花瓣，超出画布范围消失，随后从画布顶端重新生成一个花瓣
    this.alive = [];
    //保存花瓣旋转角度
    this.height = [];
    //保存花瓣状态 true 显示， false 隐藏
    this.alive = [];
    this.ftype = [];

}
//为构造函数flowerObj添加属性num
flowerObj.prototype.num = 100;
//添加属性init 初始化
flowerObj.prototype.init = function () {
    //下载花瓣的图片

    //创建循环遍历每个花瓣
    for (var i = 0; i < this.num; i++) {
        //赋值位置状态，宽度，速度
        this.x[i] = 0;
        this.y[i] = 0;
        this.width[i] = 0;
        this.height[i] = 0;
        this.speed[i] = 0;
        this.position[i] = 0;
        this.alive[i] = false;
        this.ftype[i] = "";
    }
    this.pic1.src = "./img/1.png";
    this.pic2.src = "./img/2.png";
    this.pic3.src = "./img/3.png";
}



//为构造函数添加draw绘制
flowerObj.prototype.draw = function () {
    // ctx1.save();
    //创建遍历循环花瓣
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            this.x[i] += 0.5;
            this.y[i] += this.speed[i] * 50;
            this.ftype[i] == "pic1"
            if (this.ftype[i] == "pic1") {
                var pic = this.pic1;
            } else if (this.ftype[i] == "pic2") {
                var pic = this.pic2;
            } else {
                var pic = this.pic3;
            }

            ctx1.drawImage(
                pic,
                this.x[i],
                this.y[i],
                this.width[i],
                this.height[i],
            );
                if(this.y[i]>300){
                    sendFlower();
                }
            if (this.y[i] > 630) {
                this.alive[i] = false;
                // console.log("draw");
            }
        }
    }

    // ctx1.restore();
}
//监听画布中花瓣数量是否不足20个
function flowerMonitor() {
    var sum = 0;
    // console.log(sum+"外");
    for (var i = 0; i < flower.num; i++) {
        if (flower.alive[i]) sum++;
        // console.log(sum+"内");
    }
    if (sum < 20) {
        sendFlower();
        // console.log(sum+"if");
        // console.log("flowerMonitor");
        return;
    }
}
//从隐藏的花瓣中挑一个显示
function sendFlower() {

    for (var i = 0; i < flower.num; i++) {

        if (flower.alive[i] == false) {
            flower.born(i);
            // console.log("sendFlower");
            return;
        }
    }
}
//产生花瓣
flowerObj.prototype.born = function (i) {
    this.y[i] = -20;
    this.x[i] = Math.floor(Math.random() * canWidth-50);
    this.speed[i] = Math.random() * 0.027 + 0.009;
    this.width[i] = Math.random() * 15 + 8;
    this.height[i] = this.width[i];
    this.alive[i] = true;
    this.ftype[i] = Math.random() < 0.3 ? "pic1" : Math.random() < 0.6 ? "pic2" : "pic3";

}

        })   ///
    }

    })
})
