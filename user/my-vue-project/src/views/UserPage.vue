<template>


</template>
<script scoped>

export default {
    components: {
       
       
    },
    data() {
        return {
            currentComponent: 'WelcomePanel'
        }
    },
    name: 'UserPage',
    methods: {
        handleOptionSelect(option) {
            switch (option) {
                case '用户管理':
                    this.currentComponent = 'UserList';
                    break;
                case '商品管理':
                    this.currentComponent = "ProductList";
                    break;
                default:

            }
        }
    },


}
</script>
<style scoped></style>