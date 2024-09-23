<template>
    <div v-for="(process, index) in processes" :key="index">
        <PGC9 :formArray="process" :head="head" :isShowButton="false" :isReadonly="true" />
    </div>
</template>


<script>
import axios from 'axios';
import PGC9 from '@/components/SubmitForm.vue';

export default {
    components: {
        PGC9
    },
    data() {
        return {

            head: "《狮子王》影片观后感影评",

            url: "/comments",

            processes: []
        };
    },
    mounted() {

        this.fetchProcesses();
    },
    methods: {

        async fetchProcesses() {
            try {
                const response = await axios.get(this.url);
                this.processes = this.transformData(response.data, 'process2');
            } catch (error) {
                console.error("Error fetching processes:", error);
            }
        },
        transformData(data, type) {
            const labels = {

                process2: {
                    // 观众姓名、性别、年龄、联系电话、职业以及影片观后感等信息。
                    commentId: "评论编号",
                    name: "姓名",
                    sex: "性别",
                    age: "年龄",
                    contact: "联系电话",
                    job: "职业",
                    comment: "影片观后感",
                }
            };

            return data.map(item => {
                return Object.keys(item).map(key => {
                    let vari = labels[type][key];
                    if (vari === undefined) {
                        console.log(vari);
                        return null;
                    }
                    let value = item[key];



                    return {
                        label: labels[type][key],
                        name: key,
                        value: value,
                        type: this.getFieldType(key),
                        isReadOnly: true
                    };
                }).filter(item => item !== null);
            });
        },
        getFieldType(key) {
            const typeMapping = {
                commentId: "number",
                name: "text",
                sex: "text",
                age: "number",
                contact: "text",
                job: "text",
                comment: "textarea"
            };
            return typeMapping[key] || "text";
        }
    }
};
</script>
<style scoped>
/* 引入的样式文件 */
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/style.css';
</style>