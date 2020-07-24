<template>
  <div class="firstPage">
    <el-row :gutter="20">
      <el-col :span="8" class="left-col">
        <el-card class="left-card" style="height:252px;">
          <div class="avartar">
            <img src="../assets/avatar.jpg" alt />

            <div class="words">
              <div>{{desprit}}</div>
              <div class="name">admin</div>
            </div>
          </div>
          <div class="tips">
            <i class="el-icon-s-opportunity"></i>主人，今天也要元气满满哦！
          </div>
        </el-card>
        <el-card class="top-bottom-card" style="height:252px;">
          <div class="encourage">生活感悟</div>
          <p v-for="(item,index) in encourages" :key="index">{{item}}</p>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="icon visit">
                <i class="el-icon-view"></i>
                <div class="num">
                  <span>252</span>
                  <span class="tip">访问次数</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="icon read-book">
                <i class="el-icon-reading"></i>
                <div class="num">
                  <span>52</span>
                  <span class="tip">阅读数量</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="icon message">
                <i class="el-icon-bell"></i>
                <div class="num">
                  <span>100</span>
                  <span class="tip">消息数量</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-card style="margin-top:20px">
            <h3>
              <i class="el-icon-notebook-2"></i>
              TodiList
              <span @click="open">添加</span>
            </h3>

            <el-table :show-Header="false" :data="todoList" max-height="342px">
              <el-table-column width="50" align="center">
                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <div class="wrap">
                    <input
                      type="text"
                      v-focus
                      v-model="scope.row.item"
                      :class="{'unheal':editing === scope.row}"
                      @blur="complete"
                      @keyup.enter="complete"
                    />
                    <span :class="{'del':scope.row.status}">{{scope.row.item}}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="150">
                <template slot-scope="scope">
                  <el-button icon="el-icon-edit" type="primary" @click="edit(scope.row)"></el-button>
                  <el-button icon="el-icon-delete" type="danger" @click="del(scope.$index)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      desprit: "",
      timer: null,
      todoList: [
        { status: false, item: "学习vue" },
        { status: false, item: "学习node" },
        { status: false, item: "学习vue" },
        { status: false, item: "学习node" },
        { status: false, item: "学习vue" },
        { status: false, item: "学习node" },
      ],
      editing: {},
      encourages: [
        "学习如逆水行舟，不进则退",
        "勤能补拙是良训",
        "没有什么能阻挡你前进的步伐，除了你自己",
      ],
    }
  },

  methods: {
    getNow() {
      let time = new Date().getHours()
      console.log(time)
      if (time > 3 && time < 11) {
        this.desprit = "早上好"
      } else if (time >= 11 && time <= 18) {
        this.desprit = "中午好"
      } else {
        this.desprit = "下午好"
      }
    },
    edit(item) {
      this.editing = item
    },
    complete() {
      this.editing = {}
    },
    del(index) {
      this.todoList.splice(index, 1)
    },
    open() {
      this.$prompt("请输入您的计划事件", "添加Todo", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /\w+/,

        inputErrorMessage: "请输入内容",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的计划事件是: " + value,
          })
          console.log(this)
          this.todoList.unshift({
            status: false,
            item: value,
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          })
        })
    },
  },
 
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.getNow())
  },
  directives: {
    focus: {
      update(el) {
        el.focus()
      },
    },
  },
}
</script>

<style lang="less" scoped>
.firstPage {
  padding: 15px;

  .avartar {
    display: flex;
    align-items: center;
    padding-bottom: 20px;

    border-bottom: 3px solid #ccc;
    // font-weight: bold;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .words {
      width: 60px;
      flex: 1;
      flex-shrink: 0;
      color: rgba(0, 0, 0, 0.7);
      font-size: 28px;
      justify-content: center;
      padding-left: 20px;
      .name {
        font-size: 20px;
        padding: 5px 0;
      }
    }
  }
  .tips {
    padding-top: 15px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: rgb(250, 128, 114);
  }
  .top-bottom-card {
    margin-top: 20px;

    .encourage {
      font-size: 18px;
      font-weight: bold;
      color: #4077ff;
      padding-bottom: 20px;
    }
    p {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
      height: 3em;
    }
  }
  .el-card {
    padding: 0;
  }
  .icon {
    display: flex;
    height: 100px;
    cursor: pointer;
    i {
      left: 0;
      width: 100px;
      height: 100px;
      line-height: 100px;
      font-size: 50px;
      background-color: #4077ff;
      color: #fff;
      text-align: center;
    }
    .num {
      width: 80px;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span:nth-of-type(1) {
        font-size: 20px;
        color: #4077ff;
        font-weight: bold;
      }
      .tip {
        font-size: 14px;
        padding: 5px 0;
        color: #9c9c9c;
      }
    }
  }
  .message {
    i {
      background-color: #64d572;
    }
  }
  .read-book {
    i {
      background-color: #f40;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    i {
      font-size: 20px;
      color: seagreen;
    }
    span {
      color: #4077ff;
      font-size: 16px;
      float: right;
    }
  }
  .del {
    text-decoration: line-through;
    color: #ccc;
  }
  .wrap {
    position: relative !important;
    height: 30px;

    input {
      // background-color: royalblue;
      position: absolute;
      left: 0;
      visibility: hidden;
      top: 0px;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0;
    }
    span {
      position: absolute;
      left: 0;
      top: 0;
      height: 30px;
      line-height: 30px;
    }
    input.unheal {
      z-index: 1;
      left: 0;
      visibility: visible !important;
    }
  }
}
</style>