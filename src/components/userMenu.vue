<template>
    <div >
        <a 
        class="
        list-group list-group-item list-group-item-action bg-secondary text-center text-wrap text-white" >
        {{name}}
         </a>
    </div>
</template>
<script>
export default {
    name:'userMenu',
    props:['name']
}
</script>
<style lang="css">
    .list-group-item{
        border: 0ch;
        padding: 20px;
    }
</style>