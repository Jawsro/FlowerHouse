$(function(){
    //点击注册的图片时
    //点击关闭按钮时
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
                if(result.length<0){
                    console.log('888')
                     $("#danger").html("用户名或密码错误")
                }else if(result.length>0){
                     $("#danger").html("登录成功");
                    //  location.href=location.search;
                     var uid=result[0].uid;//获取登录用户的id
                     sessionStorage.setItem("uid",uid);//浏览器保存用户id
                     $("#login").css("display","none");
                     $("#opacity").css("display","none");
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
        $("#opacity").css("display","block");
        if(g_id==undefined){
            $("#login").css("display","block")
        }else{
            $("#change").css("display","block")
         }

    /***************点击  退出登录  刷新页面  清除登录用户的id************* */
        $("#change").click(function(){
            sessionStorage.clear();
            location.href=location.search;
        })
    })
})