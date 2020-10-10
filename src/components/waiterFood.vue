<template>
<div>
    <div class="mb-0">
        <div class="row">
            <div class="col-2">
                <h5 class="card-title col-12 mb-3 mt-3">{{name}}</h5>
            </div>
            <div class="col-2">
                <p style="line-height:56px" class="card-text col-12 mb-3">￥{{price}}/份</p>
            </div>
            <div class="col-4">
              <div v-if="count>0||half>0">
                  <button style="width:90px" type="button" class="btn btn-outline-danger  mx-2 px-3 mt-3" v-on:click="addcount">{{count}}整份</button>
                  <button style="width:90px" type="button" class="btn btn-outline-secondary mx-2 px-3 mt-3" v-on:click="addhalf">{{half}}半份</button>
              </div>
              <div v-else>
                  <button style="width:90px" type="button" class="btn btn-outline-danger  mx-2 px-4 mt-3" v-on:click="addcount"> 整份</button>
                  <button style="width:90px" type="button" class="btn btn-outline-secondary mx-2 px-4 mt-3" v-on:click="addhalf"> 半份</button>
              </div>
              </div>
              <div class="col-3">
                <div class="row">

              <div v-if="count>0||half>0">
                  <div class="col-12 row mx-0">
                  <div class="col-4">
                      <button type="button" class="btn btn-secondary btn-circle btn-lg mt-4"  @click="sub()">-</button>
                  </div>
                      <span class="col-4 mt-4 text-center" :id="idname">{{sum}}</span>
                  <div class="col-4">
                      <button type="button" class="btn btn-danger btn-circle btn-lg mt-4"  @click="add()">+</button>
                  </div>
                  </div>
              </div>
                  <div v-else>
                  <div class="col-12">
                  <button type="button" class="btn btn-danger btn-circle btn-lg mt-4  ml-5 float-right"  @click="add()">+</button>
                  </div>
              </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'userfood',
    props:['name','price','photo','idname'],
    methods: {
      addhalf:function(){
        this.a=false;
      },
      addcount:function(){
        this.a=true;
      },
      add:function () {
        if (this.a) {
          this.count++
        }
        if(this.a==false){
          this.half++
        }
        this.$emit("getprice",this.pricesum)
      },
      sub:function () {
        if (this.count>0) {
            if (this.a) {
                this.count--
            }
        }
        if(this.half>0){
          if(this.a==false){
            this.half--
          }
        }
        this.$emit("getprice",this.pricesum)
        
      }
    },
    data() {
      return {
        halffare:null,
        count:null,
        half:null,
        a:''
      }
    },
    computed: {
      sum:function (){
        return this.count+this.half
      },
      pricesum:function () {
        return (this.count*this.price)+(this.half*this.price/2)
        
      }
    },
    
}
</script>
<style lang="css">
  .btn-circle.btn-lg {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 20px;
  line-height: 0;
  border-radius: 15px;
}
  #count{
    font-size: 20px;
  }
</style>