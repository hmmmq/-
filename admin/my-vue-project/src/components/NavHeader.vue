<template>
    <header class="topbar-nav">
        <nav class="navbar navbar-expand fixed-top bg-white">
            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item">
                    <a class="nav-link toggle-menu" href="#">
                        <i class="icon-menu menu-icon"></i>
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav align-items-center right-nav-link">

                <li class="nav-item">
                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                        <span class="user-profile"><img src="http://127.0.0.1:8083/images/avatars/avatar-13.png"
                                class="img-circle" alt="user avatar"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li class="dropdown-item user-details">
                            <a href="#">
                                <div class="media">
                                    <div class="avatar"><img class="align-self-start mr-3"
                                            src="http://127.0.0.1:8083/images/avatars/avatar-13.png" alt="user avatar">
                                    </div>
                                    <div class="media-body">
                                        <h6 class="mt-2 user-title">{{ user?.name }}</h6>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="dropdown-divider"></li>
                        <li class="dropdown-divider"></li>
                        <li class="dropdown-item" @click="Logout"><i class="icon-power mr-2"></i>登出</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script scoped>

export default {
    data() {
        return {
            user: null,
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'));
    },
    methods: {
        selectOption(option) {
            this.$emit('select-option', option);
        },
        Logout() {
            localStorage.removeItem('user');
            this.$router.push('/login');
        }
    }

}
</script>
<style scoped></style>