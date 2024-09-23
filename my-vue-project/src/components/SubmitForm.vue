<template>
    <!-- Main container -->
    <div class="page-container">
        <!-- bloc-3 -->
        <div class="bloc l-bloc" id="bloc-3">
            <div class="container bloc-lg">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 offset-md-2 col-md-8">
                        <h1 class="mg-md">{{ head }}</h1>
                        <form @submit.prevent="handleSubmit" novalidate>
                            <div v-for="(formItem, index) in formArray" :key="index" class="form-group">
                                <label>{{ formItem.label }}</label>
                                <input :id="formItem.name + formItem.value" :name="formItem.name"
                                    v-model="formItem.value" class="form-control" :type="formItem.type"
                                    :readonly="formItem.isReadOnly || isReadOnly || isReadOnly2" required />
                            </div>
                            <div v-show="isShowButton" class="text-center">
                                <button class="bloc-button btn btn-d btn-lg btn-block btn-clean" type="submit">
                                    {{ buttonAction }}<span class="special-tag-for-editing-text-with-html"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- bloc-3 END -->

        <!-- ScrollToTop Button -->
        <a class="bloc-button btn btn-d scrollToTop" @click="scrollToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
                <path class="scroll-to-top-btn-icon" d="M30,22.656l-14-13-14,13" />
            </svg>
        </a>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    props: {
        head: String,
        buttonAction: String,
        isShowButton: Boolean,
        requestUrl: String,
        requestType: {
            type: String,
            default: 'post',
            validator: value => ['get', 'post', 'put', 'delete'].includes(value)
        },
        formArray: {
            type: Array,
            required: true
        },
        isReadOnly2: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            responseData: null,
            isReadOnly: false
        };
    },
    methods: {
        async handleSubmit() {
            // 构建请求数据
            const requestData = {};
            this.formArray.forEach(item => {
                requestData[item.name] = item.value;
            });

            try {
                let response;
                switch (this.requestType.toLowerCase()) {
                    case 'get':
                        response = await axios.get(this.requestUrl, { params: requestData });
                        break;
                    case 'post':
                        response = await axios.post(this.requestUrl, requestData);
                        break;
                    case 'put':
                        response = await axios.put(this.requestUrl, requestData);
                        break;
                    case 'delete':
                        response = await axios.delete(this.requestUrl, { data: requestData });
                        break;
                }
                this.responseData = response.data;
                this.isReadOnly = true;


                // 更新表单项的值
                for (const [key, value] of Object.entries(this.responseData)) {
                    const inputElement = document.getElementById(key + value);
                    if (inputElement) {
                        if (inputElement.type === 'file') {
                            // 处理文件类型字段
                            const fileLink = document.createElement('a');
                            fileLink.href = value;
                            fileLink.textContent = '查看文件';
                            fileLink.target = '_blank';
                            inputElement.parentNode.appendChild(fileLink);
                        } else {


                            inputElement.value = value;
                        }
                    }


                }
                alert('成功');
            } catch (error) {
                alert('失败');
                console.error('Request failed:', error);
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
</script>

<style scoped>
/* 你的样式代码 */
</style>