 <template>
  <div class='header'>
    
      <div class="header-left">
        <div class="collapse-btn" @click="changeCollapse">
          <i class="iconfont" :class="collapse?'el-icon-s-fold':'el-icon-s-unfold'"></i>
        </div>
        <img src="../assets/b.jpg" alt />
        <h1>阅读管理器</h1>
      </div>
      <div class="header-right">
        <div class="fullScreen" @click="changeFullScreen">
          <el-tooltip class="item" effect="dark" :content="fullScreenMsg" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <div class="personMsg">
          <router-link to="/message" tag="div">
            <el-tooltip class="item" effect="dark" :content="personMsg" placement="bottom">
              <i class="el-icon-bell"></i>
            </el-tooltip>
            <span class="btn-bell-badge" v-show="messageNum"></span>
          </router-link>
        </div>
        <div class="avatar">
          <img src="../assets/avatar.jpg" alt />
        </div>
        <el-dropdown class="user-name" trigger="click">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/shop/history" tag="div">
              <el-dropdown-item>逛逛书城</el-dropdown-item>
            </router-link>

            <el-dropdown-item divided command="loginout"><router-link to="/login" tag="div">退出登录</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-button type="info" @click="logout">退出登录</el-button> -->
      </div>
  </div>
</template>

<script>
import bus from '../plugin/bus.js'
export default {
  name: 'viewHeader',
  data() {
    return {
      username: 'admin',
      collapse: true,
      isFullScreen: false,
      messageNum: 8
    }
  },
  created(){
    bus.$on("unread",val=>{
      this.messageNum = val
    })
  },
  methods: {
    changeCollapse() {
      this.collapse = !this.collapse
      console.log(bus)
      bus.$emit('changecollapse', this.collapse)
    },
    changeFullScreen() {
      let element = document.documentElement
      if (this.isFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.isFullScreen = !this.isFullScreen
    },
    logout() {
      // 清空token，重定向到login页面
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  computed: {
    fullScreenMsg() {
      return this.isFullScreen ? '取消全屏' : '全屏显示'
    },
    personMsg() {
      return `有${this.messageNum}条未读信息`
    }
  }
}
</script>

<style lang="less" scoped>

  .header {
      flex-shrink: 0;
    height: 60px;
    padding: 0 20px;
  display: flex;
  color: #fff;
  background-color: #242f42;
  justify-content: space-between;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    .collapse-btn {
      font-size: 25px;
      padding-right: 20px;
      color: #fff;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h1 {
      margin-left: 10px;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .header-right {
    display: flex;
    align-items: center;

    .item {
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
    }
    .personMsg {
      position: relative;
      span {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #f56c6c;
      }
    }
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .user-name {
      color: #fff;
    }
  }
  }



</style>