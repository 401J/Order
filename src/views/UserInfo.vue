<template>
  <div id="all">
    <userNav />
    <div class="container-fluid all">
      <div class="row">
        <!-- 左侧边栏 -->
        <div class="col-3">
          <!-- 上 -->
          <div class="row bg-secondary">
            <div id="image">
              
              <img
                width="80px"
                height="80px"
                src="../assets/userInfo.jpg"
                class="rounded-circle"
                alt="Cinque Terre"
              />
            </div>
            <router-link to="/userInfo/login">
              <button type="button" class="btn btn-success my-3">登录</button>
            </router-link>
            <router-link to="/userInfo/register">
              <button type="button" class="btn btn-danger register">
                注册
              </button>
            </router-link>
          </div>
          <!-- 中 -->
          <div class="row"></div>
          <!-- 下 -->
          <div class="row">
            <div
              v-for="(item, index) in list"
              :key="index"
              id="div-list"
              class="col-6"
            >
              <a
                class="a-list"
                style="line-height: 100px; text-align: center"
                href=""
                >{{ item }}</a
              >
            </div>
            <div class="col-6 bg-dark">
              <router-link to="">
                <button type="button" class="btn btn-dark">自主结账</button>
              </router-link>
            </div>
            <div class="col-6 bg-danger">
              <router-link to="">
                <button type="button" class="btn btn-danger">积分兑换</button>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 右侧边栏 -->
        <div class="col-9">
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
        "美甲拍号",
        "发票管理",
        "我的卡卷",
      ],
    };
  },
};
</script>

<style>
.btn.btn-danger.register {
  position: relative;
  left: 20px;
  top: 165px;
}
.btn.btn-success.my-3 {
  position: relative;
  left: -45px;
  top: 150px;
}

#welcome {
  float: left;
}
.rounded-circle {
  position: relative;
  left: 90px;
  top: 50px;
}
/* 左侧上方 */
.row.bg-secondary {
  height: 256px;
  padding-left: 50px;
  background-size: cover;
  background-image: url(../assets/西餐2.jpg);
  background-color: rgba(125, 125, 125, 0.5);
  /*加入背景透明，使页面不那么唐突*/
  /* background-size: cover; */
  /* filter: blur(1px); */
}
#image {
}
/* 左侧中间 */
.row.bg-dark {
  padding-left: 100px;
  padding-top: 40px;
  border: 1px soli white;
}
#div-list {
  background-color: #8e8e8e;
  border: 1px solid white;
}
.col-9 {
  background: url(../assets/西餐.jpg);
  height: 600px;
}

.a-list {
  color: white;
}
#footer {
  width: 100%;
  height: 50px;
  background-color: #4b4b4b;
}
</style>