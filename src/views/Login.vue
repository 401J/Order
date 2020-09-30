// 登录页面
<template>
  <div id="logincard" class="card">
    <div class="card-body">
      <h4 class="card-title">登录</h4>
      <hr />
      <div class="form-group">
        <label for="">用户：</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="请输入用户名"
        />
      </div>
      <div class="form-group">
        <label for="">密码：</label>
        <input
          type="password"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="请输入密码"
        />
      </div>
      <button
        type="button"
        class="btn btn-outline-primary"
        style="float: right; margin-top: 20px"
      >
        登录
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      con: 1,
      conditaion: -1,
    };
  },
  methods: {},
};
</script>

<style>
#logincard {
  width: 700px;
  height: 350px;
  margin-left: 150px;
  margin-top: 59px;
}
</style>