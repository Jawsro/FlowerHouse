


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
    flowerMonitor();
    clearCan();
    flower.draw();

}



//清空画布
function clearCan(){
    ctx1.clearRect(0,0,canWidth,canHeight);
}
document.body.onload=flowerFall;
