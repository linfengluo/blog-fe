/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const formatRes = require('../units/formatRes')
const Admin = require('../model/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SALT_ROUNTS = 10
const jwtConfig = require('../config/jwt')

const adminController = {
  brcyptPw(password){
    const salt = bcrypt.genSaltSync(SALT_ROUNTS)
    return bcrypt.hashSync(password, salt)
  },
  
  comparePw(inputPw, enBrcyptPw){
    return bcrypt.compareSync(inputPw, enBrcyptPw);
  },
  
  async getUserByEmail(email){
    return Admin.findByEmail(email)
  },
  
  async login(req, res){
    const params = req.body
    const user = await this.getUserByEmail(params.email)
  
    if (!user) {
      res.json(formatRes('none', null, '账号不存在'))
      return false
    }
    
    const isTrue = this.comparePw(params.password, user.password)
    
    if (!isTrue) {
      res.json(formatRes('none', null, '密码不正确'))
      return false
    }
   
    let loginUser = {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  
    const token = jwt.sign(loginUser, jwtConfig.secretOrKey, {
      expiresIn: '2h'
    })
  
    loginUser.token = token
  
    res.cookie('token', token ,{ expires: new Date(Date.now() + 2 * 60 * 60 * 1000), httpOnly: true });
    res.json(formatRes('isOk', loginUser, '登录成功'))
  },
  
  getAdmin(req, res){
    res.json(formatRes('isOk', req.user))
  }
}

module.exports = adminController
