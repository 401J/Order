<template>
    <div>
        <WaiterNav></WaiterNav>
        <div class="card w-25 m-auto">
          <div class="card-body">
            <h4 class="card-title">订单详情</h4>
            <ul id="u1">
                <!-- 用vfor那边下单这里创建一个 -->
                <li>第一单<router-link to="/Settle" class="float-right">查看详情</router-link></li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
import WaiterNav from '../components/waiterNav'
export default {
    components:{
        WaiterNav
    }
}
</script>

<style lang="css">
    #u1{
        padding: 0;
    }
    #u1 li{
        list-style: none;
    }
</style>