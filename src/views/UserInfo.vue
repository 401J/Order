<template>
  <div id="all">
    <userNav />
    <div class="container-fluid all">
      <div class="row">
        <!-- 左侧边栏 -->
        <div class="col-3 bg-secondary px-0">
          <!-- 头像 -->
          <img
            id="user-img" 
            src="../assets/img-userInfo.jpg" 
            class="rounded-circle">
          <!-- 登录注册按钮 -->
          <div class="row img-user">
            <router-link 
              class="img-user"
              to="/userInfo/login">
              <button type="button" class="btn btn-success">登录</button>
            </router-link>
            <router-link to="/userInfo/register">
              <button type="button" class="btn btn-danger">注册</button>
            </router-link>            
          </div>

          <hr width="360px">
          <!-- 功能菜单 -->
          <div class="row userlist">
            <div 
              class="col-6 px-0 "
              v-for="(item, index) in list" :key="index">
              <button 
                type="button" 
                class="btn btn-dark text-light">{{item}}</button>
            </div>
          </div>

          
        </div>
        <!-- 右侧边栏 -->
        <div class="col-9 bg-light">
          <h3 id="welcome" style="height: 80px">欢迎光临</h3>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
import userNav from "../components/userNav";
export default {
  components: {
    userNav,
  },
  data() {
    return {
      list: [
        "我点的菜",
        "历史消费",
        "视频监控",
        "美甲排号",
        "发票管理",
        "我的卡卷",
      ],
    };
  },
};
</script>

<style>
/* 用户头像样式 */
#user-img{
  width:80px;
  margin: 50px 0px 0px 140px;
}

/* 左侧边栏样式 */
.col-3.bg-secondary.px-0{
  border-radius:5px;
  height: 600px;  
}

/* 右侧边栏样式 */
.col-9.bg-light{
  /* background:url(../assets/西餐.jpg) */
}

/* 设置按钮样式 */
.row.img-user{
  padding: 30px 0px 0px 120px;
}
.img-user{
  padding-right: 40px;
}

/* 功能菜单样式 */
.row.userlist{
  width: 100%;
  margin: 0;
}
.btn.btn-dark.text-light{
  width: 100%;
  height: 80px;
  background-color: #6c757d;
  border: solid 1px #6c757d;
}
.btn.btn-dark.text-light:hover{
  background-color:rgb(75,75,75);
}
/* 底部 */
#footer{
  height: 50px;
  background-color: rgb(75,75,75);
}
</style>