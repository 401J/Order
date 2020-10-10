<template>
    <div>
        <WaiterNav></WaiterNav>
        <div class="card w-50 m-auto">
          <div class="card-body">
            <!-- 用户名传参 -->
            <router-link class="btn btn-light pt-0 float-right" to="/orders">返回</router-link>
            <h4 class="card-title">客户：{{username}}</h4>
            <!-- 时间 -->
            <p class="card-text">时间：{{time}}</p>
            <h4>菜品：</h4>
            <!-- 循环菜单 -->
            <ul>
                <li>1</li>
                <li>1</li>
            </ul>
            <div class="row"></div>
            <!-- 总额 -->
            <h4>总消费：{{money}}</h4>
            <h4 class="mt-3">谢谢惠顾，欢迎下次光临！</h4>
          </div>
        </div>
    </div>
</template>

<script>
import WaiterNav from '../components/waiterNav'
export default {
    components:{
        WaiterNav
    },
   data () {
       return {
           time: new Date().toLocaleString()
       }
   }
}
</script>

<style lang="css">
    
</style>