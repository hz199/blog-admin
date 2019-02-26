
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
                <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="50">
                  <FormItem prop="userName" label="账号">
                    <Input placeholder="请输入账号">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem prop="passWord" label="密码">
                    <Input placeholder="请输入密码">
                      <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </FormItem>
                  <FormItem class="clearfix">
                    <Button class="pull-left">注册</Button>
                    <Button type="primary" class="pull-right">登录</Button>
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

export default {
  data () {
    return {
      formInline: {
        userName: '',
        passWord: ''
      },
      ruleInline: {
        userName: [
          {
            required: true,
            message: '请填写用户账号！',
            trigger: 'blur'
          }
        ],
        passWord: [
          {
            required: true,
            message: '请填写密码！',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 1,
            message: '密码请至少输入6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  @import "./style.scss";
</style>
