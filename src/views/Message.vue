 <template>
  <div class="content">
    <div class="head">
      <i class="el-icon-s-comment"></i> 我的消息
    </div>
    <div class="main-container">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="`未读消息 (${unReadNum})`" name="first">
          <el-table    :data="unread" style="width: 100%" :show-header="false" max-height="450">
            <el-table-column >
              <template slot-scope="scope">
                <span class="msg">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180" ></el-table-column>
            <el-table-column width="180">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="read" type="primary" @click="handleReadAll">全部标记为已读</el-button>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息 (${readNum})`" name="second">
          <el-table :data="read" style="width: 100%" :show-header="false" max-height="480">
            <el-table-column>
            <template slot-scope="scope">
                <span class="msg">{{scope.row.title}}</span>
              </template>
               </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="180">
              <template slot-scope="scope">
                <el-button size="small" type="danger" @click="handleDel(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="read" type="danger" @click="handleDelAll">删除所有消息</el-button>
        </el-tab-pane>
        <el-tab-pane :label="`回收站 (${recycleNum})`" name="third">
          <el-table :data="recycle" style="width: 100%" :show-header="false" max-height="480">
           <el-table-column>
            <template slot-scope="scope">
                <span class="msg">{{scope.row.title}}</span>
              </template>
               </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="180">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRecycle(scope.$index)">恢复</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="read" type="success" @click="handleRecycleAll">恢复所有消息</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import bus from "../plugin/bus"
export default {
  name: "message",
  data() {
    return {
      activeName: "first",
      unread: [
        {
          date: "2018-04-19 20:00:00",
          title:
            "【系统通知】该系统近期升级维护，如有不便，请见谅"
        },
        {
          date: "2018-04-19 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        },
        {
          date: "2018-04-19 20:00:00",
          title: "近期新上架了新书，快去瞧瞧吧"
        },
        {
          date: "2018-04-19 21:00:00",
          title: "您收藏的书最近降价了，快去瞧瞧吧"
        },
         {
          date: "2018-04-19 20:00:00",
          title: "近期新上架了新书，快去瞧瞧吧"
        },
        {
          date: "2018-04-19 21:00:00",
          title: "您收藏的书最近降价了，快去瞧瞧吧"
        }
      ],
      read: [
       {
          date: "2018-04-19 21:00:00",
          title: "您收藏的书最近降价了，快去瞧瞧吧"
        }
      ],
      recycle: [
        {
          date: "2018-04-19 20:00:00",
          title: "近期新上架了新书，快去瞧瞧吧"
        }
      ]
    }
  },
  methods: {
    handleRead(index) {
      this.read.unshift(...this.unread.splice(index, 1))
    },
    handleReadAll() {
      this.read.unshift(...this.unread.splice(0))
    },
    handleDel(index) {
      this.recycle.unshift(...this.read.splice(index, 1))
    },
     handleDelAll() {
      this.recycle.unshift(...this.read.splice(0))
    },
    handleRecycle(index) {
      this.read.unshift(...this.recycle.splice(index, 1))
    },
    handleRecycleAll(){
            this.read.unshift(...this.recycle.splice(0))

    }
  },
  computed: {
    unReadNum() {
      return this.unread.length
    },
    readNum() {
      return this.read.length
    },
    recycleNum() {
      return this.recycle.length
    }
  },
  watch:{
    unreadNum(val){
      bus.$emit("unread",val)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .head {
    padding: 10px;
    i {
      color: rgb(116, 225, 65);
      font-size: 20px;
    }

    color: #606266;
    font-weight: bold;
  }
  .main-container {
    padding: 20px;
    margin: 10px;
    border: 2px solid #ccc;
    box-shadow: 0 0 2px #ccc;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
 
  
     .msg{
        color: #409eff;
     }
    .read {
      display: block;
      margin: 10px auto 0;
    }
  }
}
</style>