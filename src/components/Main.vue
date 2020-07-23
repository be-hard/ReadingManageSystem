 <template>
  <main>
       <transition>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      </transition>
  </main>
</template>

<script>
export default {
    name:"viewMain"

}
</script>

<style lang="less" scoped>
    main{
      width: 400px;
        flex:1;
        background-color: #eee;
    }
</style>