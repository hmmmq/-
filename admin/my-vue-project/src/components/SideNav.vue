<template>
    <div id="sidebar-wrapper" data-simplebar="init" data-simplebar-auto-hide="true">

        <div class="brand-logo">
            <a href="index.html">
                <img src="http://127.0.0.1:8083/images/logo-icon.png" class="logo-icon" alt="logo icon">
                <h5 class="logo-text" >管理员</h5>
            </a>
        </div>
        <ul class="sidebar-menu do-nicescrol">
            <li class="sidebar-header">导航栏</li>

            <li >
                <a href="#" class="waves-effect" @click="selectOption('商品管理')">
                    <i class="zmdi zmdi-layers"></i>
                    <span>商品管理</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
              
            </li>

            <li >
                <a href="#" class="waves-effect" @click="selectOption('用户管理')">
                    <i class="zmdi zmdi-chart"></i><span>用户管理</span>
                    <i class="fa fa-angle-left float-right"></i>
                </a>
            </li>
            
            
        </ul>

    </div>

</template>

<script scoped>

export default {
    components: {

    },
    data() {
        return {
            user: null
        }
    },
    beforeMount() {
        // 读取 localStorage
        this.user = JSON.parse(localStorage.getItem('user'));

    },
    methods: {

        selectOption(option) {
            this.$emit('select-option', option);
        }

    }
}
</script>

<style scoped></style>