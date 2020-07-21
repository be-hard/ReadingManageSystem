 <template>
  <section class="home-wrap">
    <view-header/>
    <section class="main">
      <view-aside/>
     
      <view-main/>
    </section>
    
  </section>
   
</template>

<script>
import viewHeader from "../components/Header"
import viewAside from "../components/Aside"
import viewMain from "../components/Main"
export default {
  name: 'Home',
  data() {
    return  {

    }
   
  },
  components:{
    viewHeader,
    viewAside,
    viewMain
  },
  methods: {
  }
    
}
</script>

<style lang="less" scoped>
.home-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    display: flex;
    background-color: rosybrown;
  }
  .el-aside {
    background-color: #324157;
  }
  .el-main {
    background: #eef1f6;
  }
}
</style>