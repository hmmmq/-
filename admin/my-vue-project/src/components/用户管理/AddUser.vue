<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumb-->
      <div class="row pt-2 pb-2">
        <div class="col-sm-9">
          <h4 class="page-title">用户信息管理</h4>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">用户管理</li>
            <li class="breadcrumb-item active" aria-current="page">
              新增用户信息
            </li>
          </ol>
        </div>
      </div>
      <!-- End Breadcrumb-->
      <div class="row justify-content-center">
        <div class="card col-lg-12">
          <div class="card-body">
            <div class="card-title text-primary">新增用户</div>
            <hr />
            <form>
              <div class="form-group">
                <label>用户ID(作为登录账号使用)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="请填写用户ID"
                  v-model="user.userId"
                />
              </div>
              <div class="form-group">
                <label>用户密码</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="填写用户密码"
                  v-model="user.userPassword"
                />
              </div>
              <div class="form-group">
                <label>用户姓名</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="填写用户姓名"
                  v-model="user.username"
                />
              </div>

              <div class="form-group">
                <label>用户类型</label>
                <select class="form-control" v-model="user.userType">
                  <option value="1">管理员</option>
                  <option value="0">普通用户</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <button
                  type="button"
                  @click="register"
                  class="btn btn-primary shadow-primary px-5 col-lg-12"
                >
                  <i class="icon-lock"></i>提交
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End container-fluid-->
  </div>
</template>
<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      // data
      user: {
        userId: "",
        username: "",
        userPassword: "",
        userType: "",
        createdAt: "",
        updatedAt: "",
      },
      URL: "http://localhost:8086/user/",
    };
  },
  methods: {
    checknullvalue() {
      // 检查所有字段是否为空
      if (
        !this.user.userId ||
        !this.user.username ||
        !this.user.userPassword ||
        !this.user.userType
      ) {
        alert("请填写完整信息");
        return false;
      }
      return true;
    },
    // methods
    register() {
      var check = this.checknullvalue();
      if (!check) {
        return;
      }

      axios
        .post(this.URL, this.user)
        .then((res) => {
          if (res.data != "" && res.data == true) {
            alert("新增用户成功");
            this.user = {
              userId: "",
              username: "",
              userPassword: "",
              userType: "",
              position: "",
              createdAt: "",
              updatedAt: "",
            };
          } else {
            alert("新增用户失败,请检查用户ID是否已存在");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
