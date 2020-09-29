// 登录注册组件
<template>
  <div>
    <!-- 登录注册按钮 -->
    <button
      type="button"
      class="btn btn-dark btn-lg"
      data-toggle="modal"
      data-target="#modelId"
    >
      登录
    </button>
    <!-- 登录表单 -->
    <div
      v-if="con == 1"
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- 模态框顶部 -->
          <div class="modal-header">
            <h5 class="modal-title">用户登录</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <form>
                <!-- 输入用户名 -->
                <div class="form-group row">
                  <label for="userName" class="col-sm-1-12 col-form-label"
                    >用户：</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="userName"
                    id="userName"
                    placeholder="请输入用户名"
                  />
                </div>
                <!-- 输入密码 -->
                <div class="form-group row">
                  <label for="userPwd" class="col-sm-1-12 col-form-label"
                    >密码：</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    name="userPwd"
                    id="userPwd"
                    placeholder="请输入密码"
                  />
                </div>
                <!-- 按钮 -->
                <div class="form-group row">
                  <button type="submit" class="btn btn-dark btn-lg btn-block">
                    登录
                  </button>
                  <button
                    @click="change()"
                    type="button"
                    class="btn btn-dark btn-lg btn-block"
                  >
                    注册
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  注册表单 -->
    <div
      v-else-if="con == -1"
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- 模态框头 -->
          <div class="modal-header">
            <h5 class="modal-title">注册</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <form>
                <!-- 用户名 -->
                <div class="form-group row">
                  <label for="userName" class="col-sm-1-12 col-form-label"
                    >用户：</label
                  >

                  <input
                    type="text"
                    class="form-control"
                    name="userName"
                    id="userName"
                    placeholder="请输入用户名"
                  />
                </div>
                <!-- 电话 -->
                <div class="form-group row">
                  <label for="userPhone" class="col-sm-1-12 col-form-label"
                    >电话：</label
                  >

                  <input
                    type="text"
                    class="form-control"
                    name="userPhone"
                    id="userPhone"
                    placeholder="请输入电话"
                  />
                </div>
                <!-- 密码 -->
                <div class="form-group row">
                  <label for="userPwd" class="col-sm-1-12 col-form-label"
                    >密码：</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    name="userPwd"
                    id="userPwd"
                    placeholder="请输入密码"
                  />
                </div>
                <!-- 模态框底部 -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    关闭
                  </button>
                  <button type="submit" class="btn btn-dark">提交</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      con: 1,
    };
  },
  methods: {
    change: function () {
      this.con = -1;
    },
  },
};
</script>

<style>
</style>