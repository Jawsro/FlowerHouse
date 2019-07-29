/************首页路由***************/
const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

/*************首页(爱情鲜花)添加相关信息**********/
router.get("/home",function(req,res){
    //  var $s_fid=req.query.fid;
    //  var $s_img=req.query.img;
    //  var $s_title=req.query.title;
    //  var $s_price=req.query.price;
     var sql='select*from flwors_home where f_pid=1 limit 0,8';
     pool.query(sql,function(err,result){
        if(err) throw err;
	    if(result.length>0){
		   res.send(result);
	       }else{res.send("0");}
           console.log(result);
      })
  })
/****** 首页2(长辈鲜花)添加相关信息*******/
router.get("/home2",function(req,res){
    //  var $s_fid=req.query.fid;
    //  var $s_img=req.query.img;
    //  var $s_title=req.query.title;
    //  var $s_price=req.query.price;
     var sql2='select*from flwors_home where f_pid=2 limit 0,8 ';
     pool.query(sql2,function(err,result){
        if(err) throw err;
	    if(result.length>0){
		   res.send(result);
	       }else{res.send("0");}
           console.log(result);
      })
  })
  /********首页3（鲜花礼盒）添加相关***************/
router.get("/home3",function(req,res){
    //  var $s_fid=req.query.fid;
    //  var $s_img=req.query.img;
    //  var $s_title=req.query.title;
    //  var $s_price=req.query.price;
     var sql3='select*from flwors_home where f_pid=3 limit 0,8 ';
     pool.query(sql3,function(err,result){
        if(err) throw err;
	    if(result.length>0){
		   res.send(result);
	       }else{res.send("0");}
           console.log(result);
      })
  })
   /********首页4（开业花篮）添加相关***************/
router.get("/home4",function(req,res){
    //  var $s_fid=req.query.fid;
    //  var $s_img=req.query.img;
    //  var $s_title=req.query.title;
    //  var $s_price=req.query.price;
     var sql4='select*from flwors_home where f_pid=4 limit 0,8 ';
     pool.query(sql4,function(err,result){
        if(err) throw err;
	    if(result.length>0){
		   res.send(result);
	       }else{res.send("0");}
           console.log(result);
      })
  })
  /********首页5（植物盆栽）添加相关***************/
router.get("/home5",function(req,res){
    //  var $s_fid=req.query.fid;
    //  var $s_img=req.query.img;
    //  var $s_title=req.query.title;
    //  var $s_price=req.query.price;
     var sql5='select*from flwors_home where f_pid=5 limit 0,8 ';
     pool.query(sql5,function(err,result){
        if(err) throw err;
	    if(result.length>0){
		   res.send(result);
	       }else{res.send("0");}
           console.log(result);
      })
  })

module.exports=router;

