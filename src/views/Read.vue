 <template>
  <div class="read-history">
    <div class="head">
      <i class="el-icon-document-copy"></i> 我的阅读记录
    </div>
    <el-card class="read-content">
      <el-row :gutter="10">
        <el-col :span="5">
          <el-button type="primary" @click="handleDelAll">
            <i class="el-icon-delete"></i> 批量删除
          </el-button>
        </el-col>
        <el-col :span="9">
          <el-input v-model="bookInput" placeholder="请输入书名"></el-input>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="handelSearch">
            <i class="el-icon-search"></i> 搜索
          </el-button>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="handelShowAll">
            显示全部
          </el-button>
        </el-col>
      </el-row>
      <el-table :data="showList" height="450" border strip style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60px" align="center"></el-table-column>

        <el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>
        <el-table-column label="封面(点击查看大图)" align="center" width="120">
          <template slot-scope="scope">
            <el-image :src="scope.row.img" :preview-src-list="[scope.row.img]"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="书名" width="180"></el-table-column>
        <el-table-column prop="date" label="上次阅读时间"></el-table-column>
        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.finished" active-color="#409EFF" inactive-color="#C0CCDA"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="删除">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="handleDel(scope.$index,scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5,10,15,20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Read",
  data() {
    return {
      bookInput: "",
      showList:[],
      readList: []
    }
  },
  async created() {
    let { data: res } = await this.$http.get("readList?page=1")
    this.readList = res.data;
    this.showList = this.readList
    console.log(this.readList)
  },
  methods: {
    handleDelAll() {
        // this.readList.splice(0);
        // console.log(this.$confirm)
         this.showList = this.showList.filter(item=>{
            return this.selectList.indexOf(item) === -1
        })
        this.readList = this.showList
    //   this.$confirm("此操作将永久删除该记录，是否继续？", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   }).then(() => {
    //     this.$message({
    //       type: "success",
    //       message: "删除成功!"
    //     })
    //     this.readList.splice(0);
    //   })
    },
    handelSearch(){
        this.showList = this.readList.filter(item=>{
            console.log(item.name.indexOf(this.bookInput)) 
            return item.name.indexOf(this.bookInput) !== -1
        })
        console.log(this.showList)
    },
    handleDel(index,id){
        this.showList.splice(index,1);
        if(this.readList === this.showList){
            return ;
        }
        this.readList.splice(index,1);
        
    },
    handelShowAll(){
        this.showList = this.readList
    },
    handleSelectionChange(val){
        this.selectList = val;
       
    },
    async handleCurrentChange(page){
        let {data:res} = await this.$http.get("readList?page="+page);
        if(res.data) this.showList = res.data
        
    }
  }
}
</script>

<style lang="less" scoped>
.read-history {
  width: auto;
  padding: 0 20px;
  .head {
    padding: 10px 0px;
    color: #606266;
    font-weight: bold;
    i {
      color: rgb(47, 91, 209);
      font-size: 20px;
    }
  }
  .el-table {
    margin-top: 15px;
    font-size: 14px;
  }
  //   .read-content {
  //     //    padding: 20px;
  //     // margin: 10px;
  //     // border: 2px solid #ccc;
  //     // box-shadow: 0 0 2px #ccc;
  //     padding: 0 20px;
  //   }
}
</style>