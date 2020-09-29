<template>
    <div class="row mx-0 px-0 mr-0">
        <div class="col-lg-2 py-3" style="background-color: #7c7c7c;">
        <userMenu/> <userMenu/> <userMenu/>
            <div class="fixed-bottom ">
                <button class="btn bg-danger btn-lg float-right">
                    确认下单
                    <span class="badge badge-danger"></span>
                </button>
            </div>
        </div>
        <div class="col-lg-10 p-0 m-0 row">
                <userFood class="col-lg-6 px-0 m-0"/>  
                <userFood class="col-lg-6 px-0"/>  
                <userFood class="col-lg-6 px-0"/>  
                <userFood class="col-lg-6 px-0"/>  
                <userFood class="col-lg-6 px-0"/>  
        </div>
    </div>
      

        




        
</template>
<script>
import userMenu from './userMenu.vue'
import userFood from './userFood.vue'

export default {
    components:{
        userMenu,
        userFood
    }

    
}
</script>