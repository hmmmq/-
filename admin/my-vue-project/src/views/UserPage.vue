<template>
    <div id="wrapper">
        <SideNav @select-option="handleOptionSelect" />
        <NavHeader @select-option="handleOptionSelect" />
        <WelcomePanel v-show="currentComponent === 'WelcomePanel'"></WelcomePanel>
        <UserList v-show="currentComponent === 'UserList'"></UserList>
        <ProductList v-show="currentComponent === 'ProductList'"></ProductList>

    </div>

</template>
<script scoped>
import SideNav from '@/components/SideNav.vue';
import NavHeader from '@/components/NavHeader.vue';
import WelcomePanel from '@/components/WelcomePanel.vue';
import UserList from '@/components/用户管理/UserList.vue';
import ProductList from '@/components/商品管理/ProductList.vue';
export default {
    components: {
        SideNav,
        NavHeader,
        WelcomePanel,
        UserList,
        ProductList
       
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