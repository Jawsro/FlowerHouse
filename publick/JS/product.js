$(function(){
    var f_pid=location.search.split("=")[1];
    if(f_pid!=undefined){
        $.ajax({
            url:"http://localhost:8080/product/sel",
            data:{f_pid},
            type:"get",
            dataType:"json",
            success:function(result){
                console.log(result)
                var html="";
                for(var item of result){
                    html+=`
                   <div class="mar">
                        <div class="ge">
                        
                            <div>
                                <img src=${item.img}>
                            </div>
                            <div class="wz top">
                                <span><a href="javascript:;">${item.title}</a></span>
                                
                            </div>
                            <div class="wz wz1 buttom">
                                <span>￥</span><span>${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                      </div>
                    `
                }
                $("#hang").html("");
                $("#hang").html(html);
            }
        })
        /******************按 价格从低到高  进行排序****************** */
        $("#high").click(function(){
            $.ajax({
            url:"http://localhost:8080/product/sel1",
            data:{f_pid},
            type:"get",
            dataType:"json",
            success:function(result){
                console.log(result)
                var html="";
                for(var item of result){
                    html+=`
                   <div class="mar">
                        <div class="ge">
                        
                            <div>
                                <img src=${item.img}>
                            </div>
                            <div class="wz top">
                                <span><a href="javascript:;">${item.title}</a></span>
                                
                            </div>
                            <div class="wz wz1 buttom">
                                <span>￥</span><span>${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                      </div>
                    `
                    }
                $("#hang").html("");
                $("#hang").html(html);
                }
            })
        })
    /*****************************按 价格从高到低  进行排序****************************** */
    $("#low").click(function(){
            $.ajax({
            url:"http://localhost:8080/product/sel2",
            data:{f_pid},
            type:"get",
            dataType:"json",
            success:function(result){
                console.log(result)
                var html="";
                for(var item of result){
                    html+=`
                   <div class="mar">
                        <div class="ge">
                        
                            <div>
                                <img src=${item.img}>
                            </div>
                            <div class="wz top">
                                <span><a href="javascript:;">${item.title}</a></span>
                                
                            </div>
                            <div class="wz wz1 buttom">
                                <span>￥</span><span>${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                      </div>
                    `
                    }
                $("#hang").html("");
                $("#hang").html(html);
                }
            })
    })
    /*****************************按 默认排序  进行排序****************************** */
    $("#default").click(function(){
         $.ajax({
            url:"http://localhost:8080/product/sel",
            data:{f_pid},
            type:"get",
            dataType:"json",
            success:function(result){
                console.log(result)
                var html="";
                for(var item of result){
                    html+=`
                   <div class="mar">
                        <div class="ge">
                        
                            <div>
                                <img src=${item.img}>
                            </div>
                            <div class="wz top">
                                <span><a href="javascript:;">${item.title}</a></span>
                                
                            </div>
                            <div class="wz wz1 buttom">
                                <span>￥</span><span>${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                      </div>
                    `
                }
                $("#hang").html("");
                $("#hang").html(html);
            }
        })
    })
    }

    
})
