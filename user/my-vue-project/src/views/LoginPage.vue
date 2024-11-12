<template>

    <div class="card card-authentication1 mx-auto my-5 " style="max-width: 23rem;">

    </div>

</template>
<script scoped>


export default {
    components: {
        
    },
    name: 'LoginPage',
    data() {
        return {
            isLogin: true
        };

    },
    mounted() {
        this.isLogin = true
    },

    methods: {

    }
}
</script>

<style scoped>
.background-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    align-content: center
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
}

.vh-100 {
    width: 100%;
    height: 100vh;
}
</style>