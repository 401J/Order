<template>
<div>
    <WaiterNav></WaiterNav>
    <div class="row mx-0 px-0 mr-0" >
        <div class="col-lg-2 py-3 bg-secondary" id="list-menu">
            <userMenu v-for="(i, index) in menus" :key="index" :name="i"/>
        </div>
        <div 
            class="col-lg-10 p-0 m-0 row" 
            id="foodmian">
            <table class="table">
              <thead>
                <tr>
                  <td class="row pr-0 m-0">
                    <div class="col-2 p-0 pl-3">名称</div>
                    <div class="col-2 p-0 pl-3">价格</div>
                    <div class="col-4 p-0 pl-3">规格</div>
                    <div class="col-2 p-0 pl-5">数量</div>
                  </td>
                  <!-- <th class="text-center"><span>名称</span><span>价格</span><span>规格</span><span>规格</span></th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(i, index) in food" :key="index">
                  <td scope="row p-0">
                    <waiterFood  v-on:getprice="showprice"
                    class="col-lg-12 px-0" :name="i.name" :price="i.price" :photo="i.photo" :idname="i.photo"/>  
                  </td>
                </tr>
              </tbody>
            </table>
                
        </div>
        
        <div class="fixed-bottom ">
            <button class="btn bg-danger text-white btn-lg float-right mr-3">
                    确认下单
                    <span class="badge badge-danger"></span>
                </button>
            <div class="float-right text-light" id="shopping">总价:{{total}}￥</div>
        </div>
    </div>
</div>
</template>
<script>
import userMenu from '..//components/userMenu'
import waiterFood from '../components/waiterFood'
import WaiterNav from '../components/waiterNav'

class foods{
    constructor(name,price,photo){
        this.name=name,
        this.price=price,
        this.photo=require('../assets/'+photo+'.jpg')
    }
}

export default {
    components:{
        userMenu,
        waiterFood,
        WaiterNav
    },
    data() {
        return {
            total:null,
            food:[
            new foods('豆腐','20','doufu'),
            new foods('面','15','noodle'),
            new foods('包子','25','baozi'),
            new foods('奶黄包','30','naihuangbao'),
            new foods('火腿','18','huotui'),
            new foods('牛肉','66','niurou'),
            new foods('章鱼','78','zhangyu'),
            new foods('羊肉','56','yangrou'),
            new foods('肉丸','48','wanzi'),
            new foods('虾滑','75','xiahua'),
            new foods('鱼丸','38','yuwan')],
            menus:['锅底','招牌','荤菜','素菜','饮品'],
        }
    },
    methods: {
        showprice:function(data){
            this.total=data
        }
    },
}
</script>
<style lang="css">
    #foodmian{
        overflow:auto;
        height: 880px;
    }
    .body{
        position: relative;
    }
    #shopping{
        width: 150px;
        height: 48px;
        background-color: rgba(63, 63, 63, 0.616);
        padding: 10px 0;
        margin: 0px 4px 0px 0px;
        font-size: 19px;
        text-align: center;
        border-radius: 5px;
    }
</style>