#设置客户端连接服务器的编码为utf-8
set names utf8;

#丢弃数据库
drop database if exists flower;

#创建新的数据库
create database flower CHARSET=utf8;
#进入数据库
use flower;
#创建保存数据表用户登录注册的信息表 user
create table user(
    uid int primary key auto_increment,
    uphone varchar(11),
    upwd varchar(16)
);
#插入数据
insert into user values(1,'13586593356','12534ffg');
insert into user values(null,'13586693356','12588ffg');
insert into user values(null,'13588693356','12504ffg');
insert into user values(null,'13586542356','12564ffg');
insert into user values(null,'13533542356','125648ff');
#创建保存鲜花类别分类表 product_family
create table product_family(
    f_pid int primary key auto_increment,#编号
    fname varchar(20)#产品品牌名称
);
insert into product_family values(1,"爱情鲜花");
insert into product_family values(null,"送长辈鲜花");
insert into product_family values(null,"精致礼盒鲜花");
insert into product_family values(null,"手提花篮");
insert into product_family values(null,"植物盆栽");
#创建保存数据表产品表 首页 flwors_home 
create table flwors_home(
    fid int primary key auto_increment,#编号
    f_pid int,#编号
    img varchar(200),#产品图片
    title VARCHAR(100),#标题
    price DECIMAL(8,2) #价格
);
insert into flwors_home values(1,1,"img/sqlImg/home/aa.jpg","一心一意——玫瑰11枝", 128.00);
insert into flwors_home values(null,1,"img/sqlImg/home/bb.jpg","为爱告白——19朵红玫瑰",268.00);
insert into flwors_home values(null,1,"img/sqlImg/home/cc.jpg","绝代佳人——33朵戴安娜玫瑰",328.00);
insert into flwors_home values(null,1,"img/sqlImg/home/dd.jpg","缘份----11枝红玫瑰",228.00);
insert into flwors_home values(null,1,"img/sqlImg/home/1.jpg","给你幸福——19枝红玫瑰",228.00);
insert into flwors_home values(null,1,"img/sqlImg/home/2.jpg","幸福约定-33朵红玫瑰",298.00);
insert into flwors_home values(null,1,"img/sqlImg/home/3.jpg","月光女神——11朵白玫瑰",268.00);
insert into flwors_home values(null,1,"img/sqlImg/home/4.jpg","拥抱幸福——16枝香槟玫瑰",198.00);
insert into flwors_home values(null,1,"img/sqlImg/home/200.jpg","初心不改——6朵百合花加9朵香",268.00);
insert into flwors_home values(null,1,"img/sqlImg/home/201.jpg","爱的纪念日----11枝红玫瑰",138.00);
insert into flwors_home values(null,1,"img/sqlImg/home/202.jpg","粉色人生",289.00);
insert into flwors_home values(null,1,"img/sqlImg/home/203.jpg","眷念----33枝戴安娜玫瑰配",268.00);
insert into flwors_home values(null,1,"img/sqlImg/home/204.jpg","缪斯女神----红玫瑰16枝",188.00);
insert into flwors_home values(null,1,"img/sqlImg/home/205.jpg","夏日倾情——紫玫瑰16枝，澳梅",198.00);
insert into flwors_home values(null,1,"img/sqlImg/home/206.jpg","给你我的温柔——粉佳人玫瑰",198.00);
insert into flwors_home values(null,1,"img/sqlImg/home/207.jpg","眷念----33枝戴安娜玫瑰配",198.00);
insert into flwors_home values(null,1,"img/sqlImg/home/208.jpg","法式浪漫——紫玫瑰玫瑰11枝",188.00);
insert into flwors_home values(null,1,"img/sqlImg/home/209.jpg","假日公主----戴安娜粉玫瑰",128.00);
insert into flwors_home values(null,1,"img/sqlImg/home/210.jpg","巴黎恋人——红玫瑰19枝配尤加",198.00);
insert into flwors_home values(null,1,"img/sqlImg/home/211.jpg","这就是爱——11朵蓝色妖姬配黄",268.00);
insert into flwors_home values(null,1,"img/sqlImg/home/212.jpg","长相守——11朵红玫瑰配黄英如",128.00);
insert into flwors_home values(null,1,"img/sqlImg/home/213.jpg","浓情之吻——11朵红玫瑰花配红",138.00);
insert into flwors_home values(null,1,"img/sqlImg/home/214.jpg","爱的预定——99朵红玫瑰配黄英",598.00);
insert into flwors_home values(null,1,"img/sqlImg/home/215.jpg","烈火之情——99朵红色玫瑰花",598.00);
insert into flwors_home values(null,1,"img/sqlImg/home/216.jpg","妩媚甜心——29朵香槟玫瑰花",228.00);

insert into flwors_home values(null,2,"img/sqlImg/home/5.jpg","缘份----11枝红玫瑰",228.00);
insert into flwors_home values(null,2,"img/sqlImg/home/6.jpg","幸福花园——9只百合花",228.00);
insert into flwors_home values(null,2,"img/sqlImg/home/7.jpg","清水香韵——6支白百合",298.00);
insert into flwors_home values(null,2,"img/sqlImg/home/8.jpg","你是我的太阳 11082",198.00);
insert into flwors_home values(null,2,"img/sqlImg/home/ee.jpg","我们的爱——6朵向日葵",198.00);
insert into flwors_home values(null,2,"img/sqlImg/home/9.jpg","你是我的太阳 11082",198.00);
insert into flwors_home values(null,2,"img/sqlImg/home/10.jpg","初心不改——6朵百合花",268.00);
insert into flwors_home values(null,2,"img/sqlImg/home/11.jpg","妈妈的爱馨——11朵红色康乃馨",118.00);
insert into flwors_home values(null,2,"img/sqlImg/home/12.jpg","喜欢你——9朵百合花+9朵玫瑰",298.00);
insert into flwors_home values(null,3,"img/sqlImg/home/eoqs.jpg","追寻爱情——11朵红玫瑰",139.00);
insert into flwors_home values(null,3,"img/sqlImg/home/15.jpg","一网情深——19朵/33朵精品",139.00);
insert into flwors_home values(null,3,"img/sqlImg/home/e1be.jpg","纯纯的爱——18朵白玫瑰",228.00);
insert into flwors_home values(null,3,"img/sqlImg/home/16.jpg","高贵的爱——19朵蓝色妖姬",228.00);
insert into flwors_home values(null,3,"img/sqlImg/home/28.jpg","把心给你——玫瑰花爱心礼盒",268.00);
insert into flwors_home values(null,3,"img/sqlImg/home/29.jpg","甜蜜花园——18朵红玫瑰配苔藓",138.00);
insert into flwors_home values(null,3,"img/sqlImg/home/30.jpg","陌上开花——33朵红玫瑰",289.00);
insert into flwors_home values(null,3,"img/sqlImg/home/31.jpg","让你幸福520——33朵混合玫瑰",268.00);
insert into flwors_home values(null,4,"img/sqlImg/home/20.jpg","贺喜发财 13027",168.00);
insert into flwors_home values(null,4,"img/sqlImg/home/38.jpeg","财源广进13019",198.00);
insert into flwors_home values(null,4,"img/sqlImg/home/39.jpeg","开业志禧13002",398.00);
insert into flwors_home values(null,4,"img/sqlImg/home/40.jpg","开业大吉",668.00);
insert into flwors_home values(null,4,"img/sqlImg/home/33.jpg","感谢有你——私人定制手提花篮",188.00);
insert into flwors_home values(null,4,"img/sqlImg/home/34.jpg","花样年华——私人定制手提花篮",198.00);
insert into flwors_home values(null,4,"img/sqlImg/home/35.jpg","你的香气——私人定制手提花篮",198.00);
insert into flwors_home values(null,4,"img/sqlImg/home/36.jpg","温馨祝福——私人订制手提花篮",198.00);
insert into flwors_home values(null,5,"img/sqlImg/home/42.jpg","幸福树1002",128.00);
insert into flwors_home values(null,5,"img/sqlImg/home/43.jpg","天堂鸟配常春藤组合 1005",198.00);
insert into flwors_home values(null,5,"img/sqlImg/home/44.jpg","步步高发财树1001",268.00);
insert into flwors_home values(null,5,"img/sqlImg/home/45.jpg","五编发财树1003",128.00);
insert into flwors_home values(null,5,"img/sqlImg/home/46.jpg","蝴蝶兰精美盆栽",138.00);
insert into flwors_home values(null,5,"img/sqlImg/home/47.jpg","蝴蝶兰15009",598.00);
insert into flwors_home values(null,5,"img/sqlImg/home/48.jpg","蝴蝶兰15010",598.00);
insert into flwors_home values(null,5,"img/sqlImg/home/49.jpg","蝴蝶兰15050",228.00);
#创建保存数据表产品表 flwors
create table flwors(
    pid int primary key auto_increment,#编号
    img varchar(200),#产品图片
    title varchar(200),#主标题
    short_title  VARCHAR(100),#短标题
    hot_price DECIMAL(8,2), #价格
    price DECIMAL(8,2), #原价
    big_p1 varchar(200),#详情页大图
    big_p2 varchar(200),#详情页大图
    big_p3 varchar(200)#详情页大图
);
#插入数据
insert into flwors values(1,"img/sqlImg/home/aa.jpg", "一心一意——玫瑰11枝，粉色勿忘我", "一心一意——玫瑰11枝", 128.00,256.00, "img/sqlImg/flowers/aa.jpg", "img/sqlImg/flowers/aa1.jpg", "img/sqlImg/flowers/aa2.jpg");
insert into flwors values(null,"img/sqlImg/home/bb.jpg","为爱告白——19朵红玫瑰，2枝香水白百合，满天星、栀子叶","为爱告白——19朵红玫瑰",268.00,380.00,"img/sqlImg/flowers/bb.jpg","img/sqlImg/flowers/bb1.jpg","img/sqlImg/flowers/bb2.jpg");
insert into flwors values(null,"img/sqlImg/home/cc.jpg","绝代佳人——33朵戴安娜玫瑰，搭配满天星、黄莺","绝代佳人——33朵戴安娜玫瑰",328.00,480.00, "img/sqlImg/flowers/cc.jpg","img/sqlImg/flowers/cc1.jpg","img/sqlImg/flowers/cc2.jpg");
insert into flwors values(null,
    "img/sqlImg/home/dd.jpg",
    "缘份----11枝红玫瑰+5朵白色香水百合如图包装",
    "缘份----11枝红玫瑰",
    228.00,376.00,
    "img/sqlImg/flowers/dd.jpg",
    "img/sqlImg/flowers/dd1.jpg",
    "img/sqlImg/flowers/dd2.jpg"
);
insert into flwors values(null,
    "img/sqlImg/home/ee.jpg",
    "我们的爱——6朵向日葵精美包装，蝴蝶结扎束",
    "我们的爱——6朵向日葵精美包装",
    198.00,297.00,
    "img/sqlImg/flowers/ee.jpg",
    "img/sqlImg/flowers/ee1.jpg",
    "img/sqlImg/flowers/ee2.jpg" );
#创建保存数据表产品图片 flwors_img
create table flwors_img(
    iid int primary key auto_increment,#编号
    p_id int,#产品编号
    sm VARCHAR(128),#小图片路径
    md VARCHAR(128),#中图片路径
    lg VARCHAR(128), #大图片路径
    foreign key (p_id) references flwors(pid)
);
insert into flwors_img values(1,1,"img/sqlImg/sm/aa.jpg","img/sqlImg/md/aa.jpg","img/sqlImg/lg/aa.jpg");
insert into flwors_img values(null,1,"img/sqlImg/sm/aa1.jpg","img/sqlImg/md/aa1.jpg","img/sqlImg/lg/aa1.jpg");
insert into flwors_img values(null,1,"img/sqlImg/sm/aa2.jpg","img/sqlImg/md/aa2.jpg","img/sqlImg/lg/aa2.jpg");
insert into flwors_img values(null,1,"img/sqlImg/sm/aa3.jpg","img/sqlImg/md/aa3.jpg","img/sqlImg/lg/aa3.jpg");
insert into flwors_img values(null,2,"img/sqlImg/sm/bb.jpg","img/sqlImg/md/bb.jpg","img/sqlImg/lg/bb.jpg");
insert into flwors_img values(null,2,"img/sqlImg/sm/bb1.jpg","img/sqlImg/md/bb1.jpg","img/sqlImg/lg/bb1.jpg");
insert into flwors_img values(null,2,"img/sqlImg/sm/bb2.jpg","img/sqlImg/md/bb2.jpg","img/sqlImg/lg/bb2.jpg");
insert into flwors_img values(null,3,"img/sqlImg/sm/cc.jpg","img/sqlImg/md/cc.jpg","img/sqlImg/lg/cc.jpg");
insert into flwors_img values(null,3,"img/sqlImg/sm/cc1.jpg","img/sqlImg/md/cc1.jpg","img/sqlImg/lg/cc1.jpg");
insert into flwors_img values(null,3,"img/sqlImg/sm/cc2.jpg","img/sqlImg/md/cc2.jpg","img/sqlImg/lg/cc2.jpg");
insert into flwors_img values(null,4,"img/sqlImg/sm/dd.jpg","img/sqlImg/md/dd.jpg","img/sqlImg/lg/dd.jpg");
insert into flwors_img values(null,4,"img/sqlImg/sm/dd1.jpg","img/sqlImg/md/dd1.jpg","img/sqlImg/lg/dd1.jpg");
insert into flwors_img values(null,4,"img/sqlImg/sm/dd2.jpg","img/sqlImg/md/dd2.jpg","img/sqlImg/lg/dd2.jpg");
insert into flwors_img values(null,4,"img/sqlImg/sm/dd3.jpg","img/sqlImg/md/dd3.jpg","img/sqlImg/lg/dd3.jpg");
insert into flwors_img values(null,5,"img/sqlImg/sm/ee.jpg","img/sqlImg/md/ee.jpg","img/sqlImg/lg/ee.jpg");
insert into flwors_img values(null,5,"img/sqlImg/sm/ee1.jpg","img/sqlImg/md/ee1.jpg","img/sqlImg/lg/ee1.jpg");
insert into flwors_img values(null,5,"img/sqlImg/sm/ee2.jpg","img/sqlImg/md/ee2.jpg","img/sqlImg/lg/ee2.jpg");
#购物车shopping_car
create table shopping_car(
    sid int primary key auto_increment,#编号
    s_uid int,#用户编号
    s_pid int,#产品的编号
    s_img varchar(200),#产品图片
    s_title varchar(200),#小标题
    s_price DECIMAL(8,2), #价格
    s_count int #加入购物车的产品的数量
);
insert into shopping_car values(1,1,1,"img/sqlImg/sm/aa.jpg","一心一意——玫瑰11枝", 128.00,5);
insert into shopping_car values(null,1,2,"img/sqlImg/sm/bb.jpg","为爱告白——19朵红玫瑰", 268.00,3);
insert into shopping_car values(null,1,3,"img/sqlImg/sm/cc.jpg","绝代佳人——33朵戴安娜玫瑰",328.00,1);
insert into shopping_car values(null,1,4,"img/sqlImg/sm/dd.jpg", "缘份----11枝红玫瑰",228.00,3);
insert into shopping_car values(null,1,5,"img/sqlImg/sm/ee.jpg","我们的爱——6朵向日葵精美包装",198.00,2);
insert into shopping_car values(null,4,5,"img/sqlImg/sm/ee.jpg","我们的爱——6朵向日葵精美包装",198.00,1);
insert into shopping_car values(null,4,4,"img/sqlImg/sm/dd.jpg", "缘份----11枝红玫瑰",228.00,1);
insert into shopping_car values(null,4,1,"img/sqlImg/sm/aa.jpg","一心一意——玫瑰11枝", 128.00,5);

