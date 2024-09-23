<template>
  <SubmitForm :formArray="formArray" :head="head" :isShowButton="true" :requestUrl="url" :buttonAction="'提交'" />
</template>
<script>
import SubmitForm from '@/components/SubmitForm.vue';
export default {
  components: {
    SubmitForm
  },
  data() {
    return {
      url: "/comments",
      head: "填写评论",
      formArray: [
        //请观众输入姓名、性别、年龄、联系电话、职业以及影片观后感等信息。
        { label: "姓名", name: "name", value: "", type: "text" },
        { label: "性别", name: "sex", value: "", type: "text" },
        { label: "年龄", name: "age", value: "", type: "number" },
        { label: "联系电话", name: "contact", value: "", type: "text" },
        { label: "职业", name: "job", value: "", type: "textarea" },
        { label: "影片观后感", name: "comment", value: "", type: "textarea" }
      ]
    };
  }
};
</script>
<style scoped>
/* 引入的样式文件 */
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/style.css';
</style>
