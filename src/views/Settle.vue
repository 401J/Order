<template>
    <div>
        <WaiterNav></WaiterNav>
        <div class="row border m-0">
            <!-- 左侧账单 -->
            <div class="col-lg-6 col-sm-12 p-0">
                <h5 class="hh1 mb-0 p-3">账单详情</h5>
                <!-- 菜品详情 -->
                <!-- 这段用vfor -->
                <div class="row text-right m-0 mt-3">
                    <div class="col-3">牛肉</div>
                    <div class="col-8">￥2</div>
                </div>
                <div class="row text-right m-0 mt-3">
                    <div class="col-3">牛肉</div>
                    <div class="col-8">￥2</div>
                </div>
                <div class="row text-right m-0 mt-3">
                    <div class="col-3">牛肉</div>
                    <div class="col-8">￥2</div>
                </div>
                <hr>
                <div class="row p-3">
                    <div class="col-3 text-right">
                        <h5>菜品价格</h5>
                        <h5>包间服务费</h5>
                        <h5>预付款</h5>
                        <h5> 抹零</h5>
                        <h5> 折扣金额</h5>
                        <h5> 折扣率</h5>
                    </div>
                    <div class="col-8 text-right">
                        <h5>￥264</h5>
                        <h5>￥0.0</h5>
                        <h5>￥0.00</h5>
                        <h5>￥0.00</h5>
                        <h5>￥0.00</h5>
                        <h5>100%</h5>
                    </div>
                </div>
                <hr>
                <div class="row mb-2">
                    <div class="col-3 text-right">
                        <h3>应付</h3>
                    </div>
                    <div class="col-8 text-right pr-4">
                        <h3 style="color:red">￥264</h3>
                    </div>
                </div>
            </div>
            <!-- 右侧支付 -->
            <div class="col-lg-6 col-sm-12 p-0 border">
                <h5 class="mb-0 p-3 border">可选择的支付方式</h5>
                <div class="row text-center m-0">
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">银联支付</button></div>
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">银行卡支付</button></div>
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">微信支付</button></div>
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">支付宝支付</button></div>
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">支付宝支付</button></div>
                    <div class="col-4 mt-4"><button type="button" class="btn btn-outline-danger">支付宝支付</button></div>
                </div>
                <div class="p-5 text-center">
                    <h5 class="text-secondary">请扫码支付</h5>
                    <img src="../../dist/img/二维码.png" alt="扫码支付">
                </div>
                <div>
                    <router-link class="btn btn-danger m-0 mb-3 mr-3 float-right" to="/bill">确认支付</router-link>
                </div>
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
    .hh1{
        background-color: silver;
    }
</style>