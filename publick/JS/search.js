$(function(){
    $("#search").click(function(){//console.log(111)
        $("#po_re").css("display","block");
        var key_word=$("#text1").val();console.log(key_word ,typeof key_word)
        $.ajax({
            url:"http://localhost:8080/product/sel3",
            data:{key_word},
            type:"get",
            dataType:"json",
            success:function(result){
                console.log(result)
                var html="";
                var n=result.length;
                for(var item of result){
                    html+=`
                        <div class="product">
                            <p><a href="javascript:;">${item.title}</a></p>
                            <div class="img">
                                <a href="javascript:;"><img src="${item.img}" alt=""></a> 
                            </div>
                            <div class="price"><span>￥</span><i id="price_search">${item.price.toFixed(2)}</i></div>
                    </div>
                    `
                }
                $("#cont").html('');

                $("#cont").html(html);
                $("#search_out").css("height",(n+1)*164+200);
            }
        })
    })
    $("#close1").click(function(){
        $("#po_re").css("display","none")
    })
})