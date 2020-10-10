<template>

  <div class="container-fluid">
     <WaiterNav></WaiterNav>     
    <div class="row">
      <div class="col-lg-6 pt-3 ml-3" style="background-color:black;">
          <!-- 三个按钮 -->
          <div class="row">
              <div class="col">
                  <button type="button" name="" id="" class="btn btn-outline-light btn-sm btn-block  btns">
                      加菜
                  </button>
              </div>
              <div class="col ">
                  <button type="button" name="" id="" class="btn btn-outline-light btn-sm btn-block  btns">
                      查看账单
                  </button>
              </div>
              <div class="col ">
                  <button type="button" name="" id="" class="btn btn-outline-light btn-sm btn-block  btns">
                      ···更多
                  </button>
              </div>
              
          </div>
          <!-- 顾客信息 -->
           <div class="row mx-1 my-3" style="background-color:white; ">
               
                <h5 style="text-indent:0.75em">顾客信息：Bob</h5>
               <hr>
               <p class="col-12">姓名:何明 <span class="float-right" >性别:男</span></p>     
               <p class="col-12">年龄段:<span class="float-right" >级别</span></p>
               <p class="col-12">归属门店<span class="float-right" >到店次数</span></p>
               <p class="col-12">绑定服务员<span class="float-right" ></span></p>
               <p class="col-12">主客户经理<span class="float-right" >上次服务员</span></p>
               <p class="col-12">喜好菜品前五名<span class="float-right" ></span></p>
               <p class="col-12">个性需求前五名<span class="float-right" ></span></p>
               <p class="col-12">体质特征<span class="float-right" ></span></p>
          </div>
          <!-- 公告信息 -->
          <div class="row mx-1 my-3" style="background-color:white; ">
                 <h5 class="col-12" >公告信息:</h5>
                 <hr/>
            
                <p class="col-12">
                    认真工作每一天！
                </p>
          </div>
      </div>
      <!-- 顾客点的菜 -->
      <div class="col-lg-5 p-0">
          <div>

            <h3 class="p-3" style="background-color:#fff2ff">顾客点的菜<span style="float:right">￥{{total}}</span></h3>
          </div>
          <div class="row">
              <div class="col-lg-6 pr-0 pl-5">
                  <button type="button" name="" id="" class="btn btn-outline-primary btn-sm btn-block">新加菜</button>
              </div>
              <div class="col-lg-6 pl-0 pr-5">
                  <button type="button" name="" id="" class="btn btn-danger  btn-sm btn-block">已下单</button>
              </div>
          </div>
            <h3 class="p-3" style="background-color:#fff2ff">菜品</h3>
            <div style="height:320px; overflow:auto">
            <div class="row" v-for="(item,index) in items" :key=index>
                <div class="col-6 ">
                    <span class="pl-3">{{item.name}}</span>
                </div>
                <div class="col-3">
                    <span>￥{{item.num*item.price}}</span>
                </div>
                <div class="col-3">
                    <span>{{item.num}}份</span>
                </div>
            </div>
         
            </div>
            <div class="row px-3 float-bott mb-0" >
                <div class="col px-0">
                    <button type="button" name="" id="" class="btn btn-danger btn-lg btn-block">催菜</button>
                </div>
                <div class="col px-0">
                    <button type="button" name="" id="" class="btn btn-danger btn-lg btn-block">确认上菜</button>
                </div>
                <div class="col px-0">
                    <button type="button" name="" id="" class="btn btn-secondary btn-lg btn-block">赠菜</button>
                </div>
                <div class="col px-0">
                    <button type="button" name="" id="" class="btn btn-secondary btn-lg btn-block">退菜</button>
                </div>
            </div>

      </div>
    </div>
  </div>
</template>
<script>
import WaiterNav from '../components/waiterNav'
import {mapState} from 'vuex'
export default {
    components:{
        WaiterNav
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState({
           items: 'list',
            users:'user'
        }),
        total:function(){
             if(this.items.length>0){
                let sum=0;
                this.items.forEach(i => {
                    sum+=(i.price*i.num)
                });
                return sum;
            }else{
                return 0;
            }
        }
    },
    
}
</script>
<style lang="css">
    .btns{
        background-color: rgba(233, 224, 224, 0.2);
    }
    .btn-lg{
         border-radius: 0;
         border-width: 0.3px;
         border-color: white;
    }
    .row{
        margin-bottom:15px;
    }
</style>

