


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
