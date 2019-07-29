const express=require("express")
const router=express.Router();
const pool=require("../pool.js")


router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var output={
    product:{},//产品表内容
    pics:[],//产品图片
  }
   if(lid!==undefined){
    var sql1=`select * from flwors where pid=?`;
    pool.query(sql1,[lid],(err,result)=>{
      if(err) console.log(err);
      output.product=result[0];
      //console.log(output);//输出的是产品的内容
        
        var sql3=`select * from flwors_img where p_id=?`
        pool.query(sql3,[lid],(err,result)=>{
          if(err) console.log(err);
          output.pics=result;
          //console.log(output);
          res.send(output);//输出的是产品的图片
        })
     })
 
  }else{
    res.send(output);
  }

  
})
/*****************************添加购物车********************************* */
router.get('/opping_car',function(req,res){
    var $s_uid=req.query.uid;//console.log($s_pid);
     var $s_pid=req.query.pid;
    var $s_img=req.query.img;
    var $s_title=req.query.short_title;
    var $s_price=req.query.price;
    var $s_count=req.query.s_count;
    var sql1='insert into shopping_car values( ? ,? ,?, ?,?,?,?)';
    pool.query(sql1,[null,$s_uid,$s_pid,$s_img,$s_title,$s_price,$s_count],function(err,result){
	if(err) throw err;
	if(result.length>0){
		res.send("1");
	}else{res.send("0");}
	//console.log(result);
    })
})
/*************************判断购物车里是否存在*************************/ 
router.get("/cart_table",function(req,res){
  var $s_pid=req.query.lid;
  var $s_uid=req.query.uid;
  var $s_count=req.query.s_count;
  
   
    var sql1=`select * from shopping_car where s_uid=? and s_pid=?`;
    pool.query(sql1,[$s_uid,$s_pid],function(err,result){
      if(err) console.log(err);
      if(result.length>0){
        // console.log(result,$s_count);   
        var n=parseInt(result[0].s_count)+parseInt($s_count);
        var sql2=`update shopping_car set s_count=? where s_pid=?`
        pool.query(sql2,[n,$s_pid],function(err,result){
          if(err) throw err;
          res.send('1')
        })
      }else{
        res.send("0");//没查到，可以直接添加
      }
        
    //     var sql3=`select * from product_img where p_id=?`
    //     pool.query(sql3,[lid],(err,result)=>{
    //       if(err) console.log(err);
    //       output.pics=result;
    //       //console.log(output);
    //       res.send(output);//输出的是产品的图片
    //     })
    //  })
 
 
   
  })
})

module.exports=router;