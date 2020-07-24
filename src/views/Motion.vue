<template>
  <div class="motion">
    <div class="motion-content">
      <div class="header">
        <i class="avatar"></i>
        <p class="hi">
          <span>{{desprit}}! </span>
          <span>{{name}}</span>
        </p>
      </div>
      <div class="tags">
        <span>我的心情记录 ( {{motionLen}} )</span>
        <button @click="addfeel">添加心情</button>
      </div>
      <ul class="my-motion">
        <li v-for="(item,index) in motionList" :key="item.id">
          <h3 class="my-motion-title">
            <i class="el-icon-postcard"></i>
            {{item.title}}
          </h3>
          <p class="my-motion-context">
            <i class="el-icon-edit"></i>
            {{item.content}}
          </p>
          <p class="time">{{item.time}}</p>
          <i class="el-icon-delete delete" @click.prevent="dele(index)"></i>
        </li>
      </ul>

      <div class="addEdit" v-show="addClick">
        <add-motion @commit="add" @close="closeAdd" />
      </div>
    </div>
    <div class="layer" v-show="addClick"></div>
  </div>
</template>

<script>
import AddMotion from "../components/AddMotion"
export default {
  name: "Motion",
  data() {
    return {
      desprit: "",
      name: "admin",
      addClick: false,
      motionList: [
        {
          id: "123",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        },
        {
          id: "124",
          title: "学习",
          content: "学习就像地平线，永远没有尽头",
          time: "2020年07月21日16:20"
        },
        {
          id: "125",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        },
        {
          id: "123",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        },
        {
          id: "124",
          title: "学习",
          content: "学习就像地平线，永远没有尽头",
          time: "2020年07月21日16:20"
        },
        {
          id: "125",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        },
        {
          id: "123",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        },
        {
          id: "124",
          title: "学习",
          content: "学习就像地平线，永远没有尽头",
          time: "2020年07月21日16:20"
        },
        {
          id: "125",
          title: "生活",
          content: "生活就像海洋，只有一直坚强的人才能到达彼岸",
          time: "2020年07月21日16:20"
        }
      ]
    }
  },
  components: {
    AddMotion
  },
  methods: {
    time() {
      setInterval(this.getTime, 60)
    },
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
    
      //   if()
      //  return this.nowtime = new Date().getTime();
    },
    closeAdd() {
      this.addClick = false
    },
    addfeel() {
      this.addClick = true
    },
    dele(index) {
      this.motionList.splice(index, 1)
      this.$message({
        type: "success",
        message: "删除成功",
        duration: "1000"
      })
    },
    add(item) {
      this.motionList.unshift(item)
      this.addClick = false
      console.log(this.$vm.addClick)
    }
  },
  computed: {
    motionLen() {
      return this.motionList.length
    }
  },
   beforeRouteEnter(to, from, next) {
    next((vm) => vm.getNow())
  }
 
}

</script>

<style lang="less" scoped>
.motion {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  //   background-repeat: no-repeat;
  background-position: 1300px;
  //   background-size: cover;
  color: rgba(201, 15, 15, 0.6);

  overflow: hidden;
  .motion-content {
    position: relative;
    width: 90%;

    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);

    .header {
      display: flex;
      font-size: 20px;
      padding: 10px;
      font-weight: bold;
      align-items: center;
    }
    .tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      span {
        font-size: 15px;
      }
      button {
        padding: 10px 15px;
        border-radius: 10px;
        color: #fff;
        background-color: rgba(201, 15, 15, 0.6);
      }
    }

    .my-motion {
      padding-top: 5px;

      max-height: 480px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        width: 5px;
        border-radius: 5px;
        background-color: #9c9c9c;
      }
      &::-webkit-scrollbar-track {
        width: 5px;
        border-radius: 5px;
        background-color: #ccc;
      }
      & li {
        position: relative;
        width: 90%;
        box-sizing: border-box;
        margin-bottom: 15px;
        padding: 5px 10px;
        list-style: none;
        border-radius: 5px;
        /* border: 1px solid rgb(0, 0, 0); */
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
      }
      .my-motion-title {
        font-size: 20px;
        padding: 5px 0;
        i {
          font-size: 16px;
        }
      }
      .my-motion-context {
        font-size: 14px;
        padding: 10px 0;
        i {
          font-size: 16px;
        }
      }
      .delete {
        position: absolute;
        right: 8px;
        top: 8px;
      }
      .time {
        text-align: right;
        font-size: 12px;
      }
    }

    // .my-blog {
    //   cursor: pointer;
    // }
    // .hi {
    //   font-size: 23px;
    //   font-weight: bold;
    // }
    // .icon-touxiang {
    //   font-size: 25px;
    //   margin: 0 15px;
    // }
    // .title {
    //   display: flex;
    //   padding: 10px 20px 10px 30px;
    //   font-size: 18px;
    //   /* color: black; */
    // }
    // .icon-jiaoyin {
    //   margin-left: 10px;
    //   font-size: 20px;
    //   color: rgba(0, 0, 0, 0.6);
    // }
    // .add {
    //   margin-left: 10px;
    //   font-size: 16px;
    //   font-weight: bold;
    // }
    // .write-blog {
    //   cursor: pointer;
    //   flex: 1;
    //   text-align: right;
    // }
    // .icon-bianji {
    //   font-size: 20px;
    //   color: rgba(0, 0, 0, 0.6);
    // }

    .addEdit {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgb(233, 219, 219);
      // background-image: url(../assets/bg.jpg);
      z-index: 1;
    }
  }
  .layer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
