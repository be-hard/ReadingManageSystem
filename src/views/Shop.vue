 <template>
  <div class="shop">
    <div class="head">
      <i class="el-icon-s-goods"></i>
      购书中心 / {{kind}}
    <div class="shop-car" @click="showCar = !showCar"><i class="el-icon-shopping-cart-2"></i>我的书单</div>
  
   </div>
   <shop-car :bookList="bookList" v-show="showCar" @close="closeCar"></shop-car>
    <el-card height="500px">
      <ul class="book-show">
        <li v-for="(item) in showList" :key="item.id">
          <div class="poster">
            <img :src="item.img" alt :title="item.name"/>
            <!-- <el-image :src="item.img" alt="" :preview-src-list="[item.img]"></el-image> -->
            <!-- <img src="https://img9.doubanio.com/view/subject/s/public/s1800355.jpg" alt=""> -->
          </div>
          <div class="name">{{item.name | nameFilter}}</div>
          <div class="detail">{{item.info | info}}</div>
          <button class="add-book" @click="addToCar(item)">加入书单</button>
        </li>
      </ul>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-sizes="[10,15,20]"
        :page-size="5"
        layout="total, prev, pager, next, jumper"
        :total="20"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import ShopCar from "../views/ShopCar"
export default {
  name: "Shop",
  data() {
    return {
      showList: [],
      kindPath: "history",
      showCar:false,
      bookList:[]
    }
  },
  components:{
    ShopCar
  },
  methods: {
    async handleCurrentChange(page) {
      console.log(page)
      let { data: res } = await this.$http.get(this.kindPath + "?page=" + page)
      if (res) {
        this.showList = res
      }
      console.log(res)
    },
    addToCar(item){
           this.$message({
type:"success",
message:"添加成功",
duration:"1000"
      })
      let isExit = this.bookList.indexOf(item) === -1 
     if(isExit) return this.bookList.unshift(item);

    },
    closeCar(){
      this.showCar = false;
    }
  },
  computed: {
    kind() {
      switch (this.kindPath) {
        case "history":
          return "历史文学"
        case "factory":
          return "小说"
        case "sanwen":
          return "散文"
          default:break

      }
    }
  },
  filters: {
    info(val) {
      return val[0].split("/")[0]
    },
    nameFilter(val){
      return val.length > 10 ? val.split("").splice(0,10).join("") + "..." : val
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params)

    let kind = to.params.id
    console.log(typeof kind)
    if (kind) {
      next(async vm => {
        vm.kindPath = kind
        let { data: res } = await vm.$http.get(kind + "?page=1")
        vm.showList = res
      })
    }
  },
  beforeRouteUpdate(to,from,next){
    console.log("nec")
      let kind = to.params.id;
      
      if (kind) {
        console.log(kind) 
        this.kindPath = kind;
        (async () =>{
          console.log("in")
 let { data: res } = await this.$http.get(kind + "?page=1")
        this.showList = res;
        console.log(res)
        next()
        })()
       
      }
      
    }
  
}
</script>

<style lang="less" scoped>
.shop {
  position: relative;
  padding: 0 20px;
  .head {
    padding: 10px 0px;
    color: #606266;
    font-weight: bold;
    i {
      color: #f40;
      font-size: 20px;
    }
    .shop-car{
        float: right;
        font-size: 16px;
        i{
            padding: 0 5px;
            font-size: 20px;
            font-weight: bold;
        }
    }
  }
  .book-show {
    display: grid;
    grid-template-columns: repeat(5, 150px);
    grid-template-rows: repeat(2, 230px);
    row-gap: 20px;
    column-gap: 60px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      .poster {
        width: 150px;
        height: 150px;
        overflow: hidden;
        text-align: center;
      }
      img {
        width: 110px;
      }
      .name {
        font-size: 14px;
        padding: 10px 0;
        color: #3377aa;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .detail {
        font-size: 12px;
        color: #000;
        padding-bottom: 10px;
      }
      button {
        color: #fff;
        background-color: royalblue;

        padding: 5px 10px;
        border-radius: 5px;
      }
    }
  }
  .el-pagination {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
}
</style>