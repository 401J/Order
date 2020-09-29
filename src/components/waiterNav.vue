<template>
    <div>
        <nav class="nav justify-content-center">
          <router-link class="nav-link" to="/orders">点菜</router-link>
          <router-link class="nav-link" to="/settle">结账</router-link>
          <router-link class="nav-link" to="/bill">账单</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="css">
</style>