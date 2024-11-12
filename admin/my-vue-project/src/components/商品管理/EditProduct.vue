<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumb-->
      <div class="row pt-2 pb-2">
        <div class="col-sm-9">
          <h4 class="page-title">商品管理</h4>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">商品管理</li>
            <li class="breadcrumb-item active" aria-current="page">修改商品</li>
          </ol>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-info waves-effect waves-light m-1"
        @click="cancel"
      >
        取消修改
      </button>
      <!-- End Breadcrumb-->
      <div class="row justify-content-center">
        <div class="productd col-lg-12">
          <div class="productd-body">
            <div class="productd-title text-primary">修改商品</div>
            <hr />
            <form>
              <div class="form-group">
                <label>商品ID</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="请填写商品ID"
                  v-model="product.productId"
                />
              </div>
              <div class="form-group">
                <label>商品名称</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="商品用户ID"
                  v-model="product.productName"
                />
              </div>
              <div class="form-group">
                <label>描述</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="请填写"
                  v-model="product.description"
                />
              </div>
              <div class="form-group">
                <label>价格(元)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="请填写"
                  v-model="product.price"
                />
              </div>
              <div class="form-group">
                <label>折扣价格(元)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="请填写"
                  v-model="product.discountPrice"
                />
              </div>
              <!-- <div class="form-group">
                                <label>差价(元)</label>
                                <input type="number" class="form-control" placeholder="请填写" v-model="product.priceDifference" disabled>
                            </div> -->
              <div class="form-group">
                <label>库存数量(件)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="请填写"
                  v-model="product.stock"
                />
              </div>
              <div class="form-group">
                <label>商品类别</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="请填写"
                  v-model="product.category"
                />
              </div>
              <br />
              <div class="form-group">
                <button
                  type="button"
                  @click="submit"
                  class="btn btn-primary shadow-primary px-5 col-lg-12"
                >
                  <i class="icon-lock"></i>提交
                </button>
              </div>
            </form>
            <form>
              <div>更新商品图片(如有)</div>
              <input type="file" @change="uploadImage" />
              <div class="form-group">
                <button
                  type="button"
                  @click="submitimg"
                  class="btn btn-primary shadow-primary px-5 col-lg-12"
                >
                  <i class="icon-lock"></i>提交
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End container-fluid-->
  </div>
</template>
<script scoped>
import axios from "axios";
export default {
  props: {
    initialproduct: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedFile: null, // 用于保存上传的图片

      product: {
        productId: this.initialproduct.productId || "",
        productName: this.initialproduct.productName || "",
        description: this.initialproduct.description || "",
        price: this.initialproduct.price || "",
        discountPrice: this.initialproduct.discountPrice || "",
        priceDifference: this.initialproduct.priceDifference || "",
        stock: this.initialproduct.stock || "",
        category: this.initialproduct.category || "",
        imagePath: this.initialproduct.imagePath || "",
        createAt: this.initialproduct.createAt || "",
        updateAt: this.initialproduct.updateAt || "",
      },
      URL: "http://localhost:8086/product/",
      IMG_URL: "http://localhost:8086/product/upload/file",
    };
  },
  methods: {
        // 处理图片选择
        uploadImage(event) {
      const file = event.target.files[0]; // 获取选择的图片
      if (file) {
        this.selectedFile = file; // 保存图片
        this.product.imagePath = file.name;
      }
    },
    // 提交图片
    async submitimg() {
      if (!this.selectedFile) {
        alert("请先选择一个图片！");
        return;
      }

      const formData = new FormData();
      formData.append("file", this.selectedFile); // 将图片添加到表单数据中

      try {
        const response = await axios.post(this.IMG_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        if(response.data){
          alert("成功");
        }else{
          alert("失败");
        }

       
      } catch (error) {
        console.error("发生错误", error);
        alert("发生错误，请稍后再试！");
      }
    },
    cancel() {
      this.$emit("data-back-product", true);
    },
    checknullvalue() {
      if (
        !this.product.productId ||
        !this.product.productName ||
        !this.product.description ||
        !this.product.price ||
        !this.product.discountPrice ||
        !this.product.stock ||
        !this.product.category
      ) {
        alert("请填写完整信息");
        return false;
      }
      return true;
    },
    // methods
    submit() {
      var check = this.checknullvalue();
      if (!check) {
        return;
      }
      this.URL = this.URL + this.product.productId;

      axios
        .put(this.URL, this.product)
        .then((res) => {
          if (res.data != "" && res.data != false) {
            alert("修改商品成功");
            this.product = {
              productId: "",
              productName: "",
              description: "",
              price: "",
              discountPrice: "",
              priceDifference: this.product.price - this.product.discountPrice,
              stock: "",
              category: "",
              imagePath: "",
              createAt: "",
              updateAt: "",
            };
            this.$emit("data-back-product", true);
          } else {
            alert("修改商品失败,请检查商品ID是否已存在");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
