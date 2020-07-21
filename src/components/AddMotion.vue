<template>
  <div class="add-Motion">
    <h2>添加心情<i class="el-icon-close" @click="close"></i></h2>
    
    <form>
      <label class="add-title">
        <i class="el-icon-postcard"></i> 主题：
      </label>
      <input type="text" class="title-inp" v-model="itemdata.inputValue" />
      <label class="context">
        <i class="el-icon-edit"></i> 心情：
      </label>
      <textarea cols="30" rows="10" class="context-area" v-model="itemdata.context"></textarea>
      <button @click="btnclick" class="add-button">添加</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "addMotion",
  data() {
    return {
      itemdata: {
        id: 0,
        inputValue: "",
        context: "",
        time: ""
      }
    }
  },

  methods: {
      validate(){
          if(!this.itemdata.inputValue){
              console.log(this.inputValue)
               this.$message.error("请输入您的主题")
               return false
          }
          if(!this.itemdata.context){
              this.$message.error("请输入您的心情")
              return false
          }
          return true
      },
      close(){
          this.$emit("close")
      },
    btnclick() {
        
    
        if(!this.validate()) return 
      let now = new Date()
      this.itemdata.id = Math.floor(Math.random() * 1000)
      this.itemdata.time = `${now.getFullYear()}年${now.getMonth()}月${now.getDate()}日${
        now.getHours()
      }:${now.getMinutes()}`
      this.$emit("commit",this.itemdata);
      this.$message.success("添加成功")
    }
  }
}
</script>
<style lang="less">
.add-Motion {
  margin: 20px 30px;
  h2 {
    font-size: 20px;
    margin: 10px 0px;
    padding-left: 10px;
    height: 35px;
    width: 400px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 2px 2px 0 #ddd;
    i{
        padding: 0 10px;
        float: right;
        font-weight: bold;

    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .add-title {
    padding: 10px 0;
  }
  .title-inp {
    width: 300px;
    height: 30px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 2px 0 #ddd;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .context {
    margin: 10px 0;
  }
  textarea {
    border: 1px solid #ddd;
    box-shadow: 0 2px 2px 0 #ddd;
    padding: 10px;
    outline: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
  }

  .add-button {
    width: 120px;
    height: 40px;
    margin: 15px 10px;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    /* font-weight: bold; */
    background-color: rgba(252, 5, 5, 0.712);
  }
}
</style>