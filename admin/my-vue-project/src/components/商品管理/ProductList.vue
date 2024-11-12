<template>
    <div class="content-wrapper">
        <div class="container-fluid">
            <!-- Breadcrumb-->
            <div class="row pt-2 pb-2">
                <div class="col-sm-9">
                    <h4 class="page-title">商品管理</h4>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">商品管理</li>
                        <li class="breadcrumb-item active" aria-current="page">商品管理</li>
                    </ol>
                </div>

            </div>
            <!-- End Breadcrumb-->
          <button type="button" class="btn btn-outline-success waves-effect waves-light m-1"
                @click="addaproduct = true">新增商品信息</button>
            <button type="button" class="btn btn-outline-info waves-effect waves-light m-1"
                @click="updatelist">刷新列表</button>
            <edit-product :initialproduct="initialproduct" v-if="this.initialproduct.productId != ''"
                @data-back-product="handleDataBack"></edit-product>
                <div class="row">
                <div class="col-lg-10" style="align-items: center;" v-show="addaproduct">
                    <button type="button" class="btn btn-outline-success waves-effect waves-light m-1"
                        @click="addaproduct = false">收起面板</button>
                    <AddProduct></AddProduct>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="productd">
                        <div class="productd-header"><i class="fa fa-table"></i>商品列表</div>
                        <div class="productd-body">

                            <div class="table-responsive">
                                <table id="example-product" class="table table-bordered">
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End Row-->

        </div>
        <!-- End container-fluid-->

    </div>
</template>
<script scoped>
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons/js/buttons.colVis';
import 'jszip';
import pdfMake from 'pdfmake-support-chinese-fonts/pdfmake.min';
import pdfFonts from 'pdfmake-support-chinese-fonts/vfs_fonts';
import AddProduct from './AddProduct.vue';
import EditProduct from './EditProduct.vue';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Regular.ttf',
        italics: 'Roboto-Regular.ttf',
        bolditalics: 'Roboto-Regular.ttf'
    },
    fangzhen: {
        normal: 'fzhei-jt.TTF',
        bold: 'fzhei-jt.TTF',
        italics: 'fzhei-jt.TTF',
        bolditalics: 'fzhei-jt.TTF'
    }
};

export default {
    components: {
        AddProduct,
        EditProduct
    },
    data() {
        return {
            addaproduct: false,
            productlist: [], // 初始化为空数组
            ready: false, // 初始化为 false,
            update: false,
            initialproduct: {
                productId:'',
                productName:'',
                description:'',
                price:'',
                discountPrice:'',
                priceDifference: '',
                stock:'',
                category:'',
                imagePath:'',
                createAt:'',
                updateAt:''
            }
        }
    },

    watch: {
    },

    methods: {
        handleDataBack(data) {
            console.log('回传的数据:', data);
            // 处理回传的数据
            if (data) {
                this.initialproduct.productId = '';
            }
        },
        async updatelist() {
            await this.destoryDataTable();
            this.initializeDataTable();

        },
        fetchData() {
            try {
                const res = axios.get('http://localhost:8086/product/');
                if (res.status === 200) {
                    console.log('http://localhost:8086/product/');
                    console.log('this.productlist = res.data;');
                }
            } catch (err) {
                console.error(err);
            }
        },
        convertTo2DArray(data) {
            return data.map((item, index) => [
                index + 1, // 添加索引列
                item.productId ,
                item.productName ,
                item.description ,
                item.price ,
                item.discountPrice,
                item.stock ,
                item.category ,
                item.imagePath ,
                item.createdAt ,
                item.updatedAt ,
                item.productId


            ]);
        },
        async initializeDataTable() {
            console.log("initializeDataTable");
            var productlist2d = null;
            try {
                if (!$.fn.DataTable.isDataTable('#example-product')) {


                    try {
                        const promise = await axios.get('http://localhost:8086/product/');
                        if (promise.status === 200) {
                            console.log(promise.data);
                            productlist2d = this.convertTo2DArray(promise.data);
                        } else {
                            console.log(promise);
                            return;
                        }
                    } catch (err) {
                        console.error(err);
                        return;
                    }

                    this.$nextTick(() => {
                        console.log(" var table = $('#example-product').DataTable({");
                        var table = $('#example-product').DataTable({
                            dom: '<"top"l<"row"<"col-sm-6 text-left"f><"col-sm-6 text-right"B>>rt<"bottom"<"row"<"col-sm-12 dt-info-container"i>><"row"<"col-sm-12 dt-paging-container"p>>><"clear">',
                            buttons: [
                                'copy', 'csv', 'excel', {
                                    extend: 'pdfHtml5',
                                    text: 'PDF',
                                    customize: function (doc) {
                                        doc.defaultStyle = {
                                            font: 'fangzhen' // 使用支持中文的字体
                                        };
                                    }
                                }, 'print', 'colvis'
                            ],
                            data: productlist2d,
                            columns: [
                                { title: '序号' },
                                { title: '商品ID' },
                                { title: '商品名' },
                                { title: '商品描述' },
                                { title: '价格' },
                                { title: '折扣价格' },
                                { title: '库存' },
                                { title: '商品类别' },
                                { title: '图片路径' },
                                { title: '创建时间' },
                                { title: '更新时间' },
                                {
                                    title: '操作',
                                    render: function (data) {
                                        return `
                                         <button class="edit-btn btn btn-outline-primary buttons-copy buttons-html5" value=${data}>编辑</button>
                                        <button class="delete-btn btn btn-outline-primary buttons-copy buttons-html5" value=${data}>删除</button>
                                        `;
                                    }
                                }
                            ],
                            language: {
                                search: "搜索:",
                                lengthMenu: "每页显示 _MENU_ 条记录",
                                info: "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                                paginate: {
                                    first: "首页",
                                    last: "末页",
                                    next: "下一页",
                                    previous: "上一页"
                                }
                            }
                        });

                        // 绑定编辑和删除按钮的事件
                        $('#example-product tbody').on('click', '.edit-btn', (event) => {
                            var data = $(event.currentTarget).val();
                            console.log('编辑数据:', data);
                            console.log('数据:', this.initialproduct);
                            axios.get('http://localhost:8086/product/' + data).then(res => {
                                this.initialproduct = res.data;
                            });


                        });
                        $('#example-product tbody').off('click', '.delete-btn').on('click', '.delete-btn', (event) => {
                            axios.delete('http://localhost:8086/product/' + $(event.currentTarget).val()).then(res => {
                                if (res.data) {
                                    console.log('删除成功');
                                    alert('删除成功');
                                } else {
                                    console.error('删除失败');
                                }
                            });
                        });
                        console.log("table.buttons().container().appendTo(#example_wrapper.col-md-6:eq(0));");
                        table
                            .buttons()
                            .container()
                            .appendTo("#example_wrapper .col-md-6:eq(0)");

                        // 为所有按钮元素添加样式
                        console.log("const buttons = this.$el.querySelectorAll('.table-responsive button');");
                        const buttons = this.$el.querySelectorAll('.table-responsive button');
                        buttons.forEach(button => {
                            button.classList.add('btn', 'btn-outline-primary', 'buttons-copy', 'buttons-html5');
                        });
                        console.log("$('.dt-search').css('text-align', 'left'); this.$el.querySelector('.dt-length').classList.add('col-md-1');$('.dt-length').css('padding-left', '0');$('.text-right').css('padding-top', '20px');");
                        // 使用jQuery动态调整底部元素的样式
                        $('.dt-info-container').css({
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            paddingRight: '20px'
                        });
                        $('.dt-paging-container').css({
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            paddingRight: '20px'
                        });
                        console.log("-----------initializeDataTable END-----------");
                    });
                }
            } catch (error) {
                console.error('回调函数内部发生错误:', error);
            }

        },
        async destoryDataTable() {

            this.$nextTick(() => {
                if ($.fn.DataTable.isDataTable('#example-product')) {
                    console.log("destoryDataTable");
                    $('#example-product').DataTable().destroy();
                }
            });
        }


    }
}
</script>
<style scoped>
/* 样式 */
.dt-search {
    text-align: left;
}

.bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.dt-info {
    margin-right: 20px;
    /* 可根据需要调整间距 */
}
</style>