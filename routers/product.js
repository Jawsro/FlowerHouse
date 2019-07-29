/****************产品列表 路由 *********************/
const express=require("express");
const router=express.Router();
const pool=require("../pool.js");
//查询该产品分类下的所有产品
router.get('/sel',function(req,res){
    var $f_pid=req.query.f_pid;
    var sql2="select * from flwors_home where f_pid=?";
    pool.query(sql2,[$f_pid],function(err,result){
        if(err) console.log(err);
        if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
       
    })
})
/*****************  按 价格从低到高 查询该产品分类下的所有产品 进行排序****************** */
router.get('/sel1',function(req,res){
    var $f_pid=req.query.f_pid;
    var sql2="select * from flwors_home where f_pid=? order by price asc";
    pool.query(sql2,[$f_pid],function(err,result){
        if(err) console.log(err);
        if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
       
    })
})
/*****************  按 价格从高到低 查询该产品分类下的所有产品 进行排序****************** */
router.get('/sel2',function(req,res){
    var $f_pid=req.query.f_pid;
    var sql2="select * from flwors_home where f_pid=? order by price desc";
    pool.query(sql2,[$f_pid],function(err,result){
        if(err) console.log(err);
        if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
       
    })
})
/***********************************  点击搜索功能 查询数据库******************************** */
router.get('/sel3',function(req,res){
    var $key_word=req.query.key_word;console.log($key_word,typeof $key_word)
    var sql3="select * from flwors_home where title like ?";
    pool.query(sql3,['%'+$key_word+'%'],function(err,result){
        // if(err) console.log(err);
        // if(result.length>0){
		// 	res.send(result);
		// }else{
		// 	res.send("0");
		// }
        
        console.log(result);
        res.send(result);
       
    })
})
module.exports=router;//导出路由