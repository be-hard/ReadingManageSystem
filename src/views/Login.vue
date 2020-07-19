<template>
  <div class="login">
    <div class="mid-area">
      <!-- 头像区域 -->
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt />
      </div>
      <!-- 表单区域 -->
      <el-form ref="loginFormRef" class="form" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            class="input"
            placeholder="请输入帐号/手机号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            class="input"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <div class="btns">
          <el-button type="primary" class="login-btn" @click="loginValid">登录</el-button>

          <el-button type="success" class="register-btn" @click="registValid">注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data() {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginValid() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 解构赋值
        let { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登陆失败！')
        this.$message({
          message: '登陆成功！',
          type: 'success',
          duration: 1000
        })
        sessionStorage.setItem('token', res.data.token)

        this.$router.push('/home')
      })
    },
    registValid() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 解构赋值
        let { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status === 200)
          return this.$message.error('该用户已注册！')
      })
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../assets/book.jpg') center no-repeat;
  background-size: cover;
  .mid-area {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 370px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;

    .avatar {
      position: absolute;
      left: 50%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      padding: 5px;
      // overflow: hidden;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0 2px #fff;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .form {
      margin: 80px 20px 0;
      .btns {
        text-align: right;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
