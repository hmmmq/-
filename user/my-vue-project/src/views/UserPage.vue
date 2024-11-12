<template>
 <div id="wrapper">
    <TopHeader></TopHeader>
 </div>

</template>
<script scoped>
import TopHeader from '../components/TopHeader.vue';
export default {
    components: {
        TopHeader
       
    },
    data() {
        return {
            currentComponent: ''
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