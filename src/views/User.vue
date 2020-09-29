<template>
    <div>
        <userNav/>
        <userBody/>
    </div>
</template>
<script>
// 导入用户导航
import userNav from '../components/userNav.vue'
import userBody from '../components/userBody.vue'
export default {
    name:'user',
      components: {
        userNav,
        userBody
    },
}
</script>