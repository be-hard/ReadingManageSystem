 <template>
  <div class="shop-car">
    <div class="car-content">
      <header>
        <p>
          <i class="el-icon-tickets"></i>
          我的书单
          <i class="close el-icon-close" @click="close"></i>
        </p>

        <div class="allNum">共 {{bookNum}} 本书</div>
      </header>
      <section class="book-content">
        <div class="book-header">
          <i
            :class="{
            'check-icon el-icon-check':selectAll
          }"
            @click="selectWhole"
          ></i>
          <span>我爱读书，我都要了</span>
        </div>
        <ul>
          <li v-for="(item,index) in myBookList" :key="item.id">
            <label for="radio">
              <i
                :class="{
            'check-icon el-icon-check':item.checked
          }"
                class="circle"
                @click="selectOne(item)"
              ></i>
              <!-- <input type="checkbox" v-model="item.checked" id="radio"  @click="selectOne(item)"/> -->
            </label>

            <div class="poster">
              <img :src="item.img" alt />
            </div>
            <div class="words">
              <h3>{{item.name}}</h3>
              <span>{{item.info | info}}</span>
              <span class="price">￥ {{item.price}}元</span>
            </div>

            <div class="book-right">
              <button class="btn" :disabled="!item.count" @click="item.count--">-</button>
              <span>{{item.count}}</span>
              <button class="btn" @click="item.count++">+</button>
              <button class="del" @click="delBook(index)">
                <i class="el-icon-delete"></i>
              </button>
            </div>
          </li>
        </ul>
      </section>
      <div class="pay-bottom">
        <div class="select-all">
          <i class="circle" :class="{'check-icon el-icon-check':selectAll}" @click="selectWhole"></i>
          <span>全选</span>
        </div>
        <div class="all-pay">
          <span>已选{{selectList.length}}本</span>
          <span>合计</span>
          <span class="pay-money">￥ {{payMoney}} 元</span>
          <button @click="payNow">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCar",
  data() {
    return {
      selectAll: false,
      myBookList: [],
      selectList: [],
    }
  },
  methods: {
    close() {
      this.$emit("close")
    },
    selectOne(item) {
      console.log(item.checked)
      item.checked = !item.checked
      if (item.checked === false) {
        this.selectAll = false
      }
    },
    selectWhole() {
      this.selectAll = !this.selectAll
     
        this.myBookList.forEach((item) => {
          item.checked = this.selectAll;
        })
      
    },
    delBook(index) {
      this.myBookList.splice(index, 1)
    },
     payNow(){
       if(!this.selectList.length){
         return this.$message({
type:"error",
message:"请选择想要购买的书",
duration:"1000"
      })
       }
      this.$message({
type:"success",
message:"购买成功",
duration:"2000"
      })
        

      
    }
  },
  props: {
    bookList: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  beforeUpdate() {
    console.log(58)
    this.selectList = this.myBookList.filter((item) => {
      return item.checked
    })
  },
  computed: {
    // myBookList() {
    //   return this.bookList.map((item) => {
    //     console.log(item)
    //     let newObj =  Object.assign(item, {
    //       checked: false,
    //     })
    //     this.$set(item, "checked", item.checked);
    //     return newObj
    //   })

    // },
    payMoney(){
      return this.selectList.reduce((prev,next)=>{
        return prev += parseInt(next.count) * parseInt(next.price)
      },0)
    },
    bookNum() {
      return this.myBookList.length
    },
   
  },
  watch: {
    bookList(val) {
      // this.$set解决添加data属性后页面渲染不响应的问题
      console.log(val)
      this.myBookList = val.map((item) => {
        console.log(item.checked)
        this.$set(item, "checked", item.checked)
        this.$set(item, "count", 1)
        let obj = Object.assign(item, {
          checked: false,
          count: 1,
        })
        console.log(obj)
        return obj
      })
    },
    // myBookList(val){
    //   console.log(256)
    //   this.selectList = val.filter(item=>{
    //     return item.checked
    //   })
    // }
  },
}
</script>

<style lang="less" scoped>
.shop-car {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  .car-content {
    min-width: 400px;
    width: 70%;
    height: 75%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f40;
    border-radius: 10px;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    header {
      p {
        font-size: 20px;
        // font-weight: bold;
        color: #fff;
        padding-bottom: 20px;
        i {
          margin-right: 5px;
          font-size: 20px;
        }
        .close {
          position: absolute;
          right: 5px;
          top: 20px;
          color: rgba(255, 255, 255, 0.6);
          &:hover {
            color: #fff;
          }
        }
      }

      .allNum {
        font-size: 14px;
        color: #fff;
        padding-bottom: 20px;
      }
    }
    .book-content {
      box-sizing: border-box;

      height: 200px;
      flex: 1;
      width: 100%;
      min-width: 400px;
      // align-items: center;
      background-color: #fff;
      border-radius: 10px 10px 0 0;
      padding-left: 20px;
      padding-right: 10px;
      display: flex;
      flex-direction: column;
      .book-header {
        padding: 10px 0;
        i {
          display: inline-block;
          border-radius: 50%;
          border: 1px solid #ccc;
          margin-right: 5px;
          width: 16px;
          height: 16px;
          box-sizing: border-box;
          vertical-align: middle;
        }
        span {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
        }
      }
      ul {
        width: 100%;
        margin-top: 10px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 4px;
          height: 0px;
        }
        &::-webkit-scrollbar-thumb {
          width: 4px;
          border-radius: 2px;
          background-color: #ccc;
        }
        &::-webkit-scrollbar-track {
          border-radius: 2px;
          width: 4px;
          background-color: #eee;
        }
        li {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          label {
            position: relative;
            width: 20px;
            height: 20px;
            .circle {
              position: absolute;
              // left: 0;
              // top: 0;
              flex-shrink: 0;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              box-sizing: border-box;
              border: 1px solid #ccc;
            }
            input[type="checkbox"] {
              position: absolute;
              // left: 0;
              // top: 0;
              opacity: 0;
              z-index: 102;
            }
          }

          .poster {
            width: 80px;
            height: 90px;
            border-radius: 5px;
            overflow: hidden;
            margin-left: 10px;
            img {
              width: 80px;
              height: 90px;
            }
          }
          .words {
            padding-left: 10px;
            h3 {
              max-width: 12em;
              font-size: 18px;
              padding: 5px 0;
              font-weight: bold;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            span {
              display: block;
              padding: 5px 0;
              font-size: 13px;
              color: #4077ff;
              &.price {
                color: #f40;
              }
            }
          }
          .book-right {
            flex: 1;
            text-align: right;
            position: relative;
            button {
              color: #ffffff;
              padding: 10px;
              border-radius: 10px;
              background-color: #fc5656;
              margin: 45px 10px 0;

              i {
                font-size: 18px;
              }
              &.btn {
                line-height: 16px;
                border-radius: 5px;
                margin: 0 5px;
                padding: 5px 8px;
                background-color: #4677f1;
              }
            }
            span {
              text-align: center;
              display: inline-block;
              width: 20px;
            }
          }
        }
      }
    }
    .pay-bottom {
      display: flex;
      justify-content: space-between;
      height: 50px;
      background-color: #fff;
      align-items: center;
      font-size: 14px;
      .select-all {
        padding-left: 20px;

        span {
          padding-left: 5px;
        }
      }
      .all-pay {
        span {
          padding: 0 5px;
        }
        .pay-money {
          color: #f40;
        }
        button {
          background-color: #f40;
          padding: 8px 20px;
          border-radius: 20px;
          margin: 0 20px;
          color: #fff;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
  }
  i.circle {
    // position: absolute;
    // left: 0;
    // top: 0;
    display: inline-block;
    vertical-align: bottom;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  i.check-icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    border-radius: 50%;
    border: 1px solid #ddd;

    &.el-icon-check {
      background-color: #f40;
      color: #fff;
    }
  }
}
</style>