<template>
    <div class="row mx-0 px-0 mr-0" >
        <div class="col-lg-2 py-3 bg-secondary" id="list-menu">
            <userMenu v-for="(i, index) in menus" :key="index" :name="i"/>
        </div>
        <div 
            class="col-lg-10 p-0 m-0 row" 
            id="foodmian">
                <userFood 
                v-on:getprice="showprice"
                v-for="(i, index) in food" :key="index"
                class="col-lg-6 px-0" :name="i.name" :price="i.price" :photo="i.photo" :idname="i.photo"/>  
        </div>
        
        <div class="fixed-bottom ">
            <button class="btn bg-danger btn-lg float-right mr-3">
                    确认下单
                    <span class="badge badge-danger"></span>
                </button>
            <div class="float-right text-light" id="shopping">购物车:{{total}}￥</div>
                
            </div>
    </div>
</template>
<script>
import userMenu from './userMenu.vue'
import userFood from './userFood.vue'

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
        userFood
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
        overflow: auto;
        height: 666px;
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