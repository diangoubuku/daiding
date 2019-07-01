const express=require('express');
//引入连接池模块
const pool=require('../pool.js')
//创建路由器对象
var router=express.Router();
//添加路由
//1.注册路由
router.post('/reg',function(req,res){
  var obj=req.body;
  //验证每一项是否为空
  //如果用户名为空
  if(obj.uname==''||obj.upwd==''||obj.phone==''||obj.email==''){
    res.send({code:401,msg:'required'});
	return;
  }
  //执行sql语句
  pool.query('insert into xz_user set ?',[obj],function(err,result){
    if(err) throw err;
	//console.log(result);
	//如果数据插入成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'reg success'});
	}
	return;
  });
});

//导出路由器对象
module.exports=router;