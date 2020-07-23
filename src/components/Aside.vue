<template>
  <aside>
    <!-- 侧边栏菜单 -->
    <el-menu
      :collapse="isCollapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
      :default-active="onRoutes"
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <!-- 一级菜单 -->
          <el-submenu :index="'/'+item.path" :key="item.id" >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="item.icon"></i>
              <!-- 文本 -->
              <span slot="title">{{item.title}}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-if="item.subs">
              <el-menu-item :index="'/'+item.path+'/'+subItem.path" v-for="subItem in item.subs" :key="subItem.id" @click="saveNavState('/'+subItem.path)">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>

                  <!-- 文本 -->
                  <span slot="title">{{subItem.title}}</span>
                </template>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="'/'+item.path + ''" :key="item.id" @click="saveNavState('/'+item.path)">
            

            <!-- 图标 -->
            <i :class="item.icon"></i>
            <!-- 文本 -->
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
        
      </template>
    </el-menu>
  </aside>
</template>

<script>
import bus from "../plugin/bus"
export default {
  name: "viewAside",
  data() {
    return {
      isCollapse: false,
      menuList: [],
      // 被激活的链接地址
      activePath:""
    }
  },
  created() {
    this.getMenu()
    bus.$on("changecollapse", msg => {
      this.isCollapse = msg
    })
    this.activePath = window.sessionStorage.getItem("activePath")
  },
  methods: {
    async getMenu() {
      let {
        data: { data: res }
      } = await this.$http.get("/menusList")
      console.log(res)
      this.menuList = res
    },
    saveNavState(path){
      window.sessionStorage.setItem("activePath",path);
      this.activePath = path;
    }
  },
  computed:{
     onRoutes() {
            return this.$route.path;
        }
  }
}
</script>

<style lang="less" scoped>
aside {
  //   width: 200px;
  height: 100%;
  background-color: #324157;
  .el-menu {
    border: none;
    &:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>