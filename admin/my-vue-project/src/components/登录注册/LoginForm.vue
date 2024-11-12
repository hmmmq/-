<template>
    <div class="card-body">
        <div class="card-content p-2">
            <div class="text-center">
                <img src="http://127.0.0.1:8083/images/logo-icon.png" alt="logo icon">
            </div>
            <div class="card-title text-uppercase text-center py-3">商城管理后台</div>
            <form>
                <div class="form-group">
                    <label for="exampleInputUsername" class="">账号</label>
                    <div class="position-relative has-icon-right">
                        <input type="text" id="exampleInputUsername" class="form-control input-shadow"
                            placeholder="请输入账号" v-model="user.userId">
                        <div class="form-control-position">
                            <i class="icon-user"></i>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword" class="">密码</label>
                    <div class="position-relative has-icon-right">
                        <input type="password" id="exampleInputPassword" class="form-control input-shadow"
                            placeholder="请输入密码" v-model="user.userPassword">
                        <div class="form-control-position">
                            <i class="icon-lock"></i>
                        </div>
                    </div>
                </div>
         
                <button type="button" class="btn btn-primary shadow-primary btn-block waves-effect waves-light"
                    @click="Login">登录</button>
            </form>
        </div>
    </div>
    <div class="card-footer text-center py-3">
        <p class="text-muted mb-0">没有账户? <a href="#"> 联系管理员创建账户 </a></p>
    </div>
</template>
<script scoped>
import axios from 'axios';
export default {
    name: 'LoginForm',
    data() {
        return {
            user: {
                userId: '',
                username: '',
                userPassword: '',
                userType: '',
                createdAt: '',
                updatedAt: ''
            },
            url: 'http://localhost:8086/user/login/',
            

        }
    },

    methods: {

        Login() {
            
            if (!this.user.userId || this.user.userPassword == '') {
                alert('账号或密码不能为空');
                return;
            }

            axios.post(this.url, this.user).then(res => {
                console.log(res);
                if (res.status == 200 && res.data != '' && res.data != null) {
                    this.user = res.data;
                    localStorage.setItem('user', JSON.stringify(this.user));
                    this.$router.push('/user').then(() => {
                        this.$router.go(0);
                    });
                } else {
                    alert('账号或密码错误');
                    return;
                }
            }).catch(err => {
                console.log(err);
                return;
            });

        }

    },

}
</script>
<style scoped></style>
