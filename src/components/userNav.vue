<template>
  <nav
    class="navbar navbar-light bg- justify-content-between"
    style="background-color: #4b4b4b"
  >
    <!-- 标题 -->
    <a class="navbar-brand text-light">河底捞</a>
    <form class="form-inline">
      <!-- 用户信息 -->
      <router-link to="/userInfo">
        <button type="button" class="btn btn-link text-light">个人中心</button>
      </router-link>
      <!-- 用户退出按钮 -->
      <button type="button" class="btn btn-link text-light">退出</button>
      <!-- 语言下拉框 -->
      <div class="btn-group">
        <button
          class="btn btn-link text-light dropdown-toggle"
          style="background-color: #4b4b4b"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          中文
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="triggerId"
        >
          <a class="dropdown-item" href="#">English</a>
          <a class="dropdown-item" href="#">日本語</a>
          <a class="dropdown-item" href="#">Deutsch</a>
          <a class="dropdown-item" href="#">Français</a>
          <a class="dropdown-item" href="#">Русский язык</a>
        </div>
      </div>
    </form>
  </nav>
</template>
<script>
export default {
  name: "userNav",
  components: {},
};
</script>
<style lang="css">
</style>