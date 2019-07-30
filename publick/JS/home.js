
$(document).ready(function (){
    /*************1爱情鲜花添加产品********/
     var s_uid1=sessionStorage.getItem("");
    $.ajax({
        url:"http://localhost:8080/flwors_home/home",
        data:{},
        type:"get",
        dataType:"json",
        success:function(result){
            var html="";
           for(var item of result){
            html+=`
                 <li>
                        <a href="http://localhost:8080/flowers_list.html?fid=${item.fid}">
                            <img src="${item.img}"  alt="">
                        </a>
                        <div class="text">
                            <div>
                                  <p>
                                      <a href="http://localhost:8080/flowers_list.html?fid=1">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                   </li>
            `
            
            $("#love").html('');
             $("#love").html(html)

        }
      }
    })
    /*************2长辈鲜花添加产品********/
     $.ajax({
        url:"http://localhost:8080/flwors_home/home2",
        data:{},
        type:"get",
        dataType:"json",
        success:function(result){
            var html="";
           for(var item of result){
            html+=`
                 <li>
                        <a href="">
                            <img src="${item.img}"  alt="">
                        </a>
                        <div class="text">
                            <div>
                                  <p>
                                      <a href="">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                         <div class="opacity1"></div>
                   </li>
            `
            
            $("#love2").html('');
             $("#love2").html(html)

        }
      }
    })

    /*************3鲜花礼盒添加产品********/
    $.ajax({
        url:"http://localhost:8080/flwors_home/home3",
        data:{},
        type:"get",
        dataType:"json",
        success:function(result){
     
            var html="";
           for(var item of result){
            html+=`
                 <li>
                        <a href="">
                            <img src="${item.img}"  alt="">
                        </a>
                        <div class="text">
                            <div>
                                  <p>
                                      <a href="">${item.title}</a>
                                  </p>
                                  <p>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                   </li>
            `
            
            $("#love3").html('');
             $("#love3").html(html)

        }
      }
    })
})
