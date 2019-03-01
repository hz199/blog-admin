
<template>
  <div class="login">
    <Row class="login__row">
      <Col :xs="0" :lg="9">&nbsp;</Col>
      <Col :xs="24" :lg="6" class="login__col">
        <transition
          appear
          appear-active-class="loginAnimate"
        >
          <div class="login__from">
            <div class="login-from__title">
              <!-- <h3 class="login__h3">
                <img src="./images/bg1.png" alt="">
              </h3> -->
              <p class="login__p">4444</p>
              <div class="login__from-wrapper">
                <Form ref="formUser" :model="postData" :rules="ruleInline" :label-width="80">
                  <FormItem prop="userName" label="用户名">
                    <Input v-model="postData.userName" placeholder="请输入用户名">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem prop="email" label="邮箱">
                    <Input v-model="postData.email" placeholder="请输入邮箱">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem prop="password" label="密码">
                    <Input type="password" v-model="postData.password" placeholder="请输入密码">
                      <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem class="clearfix">
                    <Button class="pull-left" @click="register('formUser')">注册</Button>
                    <Button type="primary" class="pull-right" @click="login('formUser')">登录</Button>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </transition>
      </Col>
      <Col :xs="0" :lg="9">&nbsp;</Col>
    </Row>
  </div>
</template>
<script>
import * as usersServices from '@/services/users'
import LocalStarage from '@/utils/localStorage'

export default {
  data () {
    return {
      postData: {
        userName: '',
        password: '',
        email: ''
      },
      ruleInline: {
        userName: [{required: true, message: '请填写用户账号！', trigger: 'blur'}],
        email: [{required: true, message: '请填写邮箱！', trigger: 'blur'}, {type: 'email', message: '请填写正确的邮箱格式~', trigger: 'blur'}],
        password: [{required: true, message: '请填写密码！', trigger: 'blur'},{type: 'string', min: 6, message: '密码请至少输入6位', trigger: 'blur'}]
      }
    }
  },
  methods: {
    register (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          usersServices.register(this.postData).then(() => {
            // console.log(res)
            this.$Message.success('注册账号成功~')
          })
        } else {
          this.$Message.error('请填写账号或者密码！')
        }
      })
    },
    login (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          usersServices.login(this.postData).then(res => {
            LocalStarage.setItem('adminToken', res.token)
            this.$Message.success('登录成功~')
            this.$router.push({
              path: '/'
            })
          })
        } else {
          this.$Message.error('登录失败，请检查账号、密码~')
        }
      })
    }
  }
}
</script>
<style lang="less">
  @import "./style.less";
</style>
