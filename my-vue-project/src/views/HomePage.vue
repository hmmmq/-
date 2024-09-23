<template>
  <NavigatePanel :itemList1="itemList1" :head="head" />
</template>
<script>
import NavigatePanel from '@/components/NavigatePanel.vue';
export default {
  components: {
    NavigatePanel
  },
  data() {
    return {
      head: '<<狮子王>>观后感',
      itemList1: [
        { title: "填写评论", href: "/SP" },
        { title: "查看评论", href: "/VP" },

      ]
    };
  },
};
</script>

<style scoped>
/* 引入的样式文件 */
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/style.css";
</style>
