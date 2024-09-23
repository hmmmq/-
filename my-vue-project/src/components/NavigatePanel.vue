<!-- 这个是单列导航页面组件 -->
<template>
    <!-- Main container -->
    <div class="page-container">
        <!-- bloc-2 -->
        <div class="bloc l-bloc" id="bloc-2">
            <div class="container bloc-lg">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h1 class="mg-md">
                                    {{ head }}
                                </h1>
                            </div>
                        </div>
                        <template v-for="(item, index) in itemList1" :key="index">
                        <nav class="navbar navbar-light row navbar-expand-md">
                        <a class="navbar-brand" :href="item.href">{{ item.title }}</a>
                         <button
                        id="nav-toggle"
                        type="button"
                        class="ui-navbar-toggler navbar-toggler border-0 p-0 mr-md-0 ml-auto"
                        data-toggle="collapse"
                        data-target=".navbar-24991"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse navbar-24991">
                        <ul class="site-navigation nav navbar-nav ml-auto">
                          <li class="nav-item">
                            <a :href="item.href" class="nav-link">进入<br /></a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </template>
                    </div>
                </div>
            </div>
        </div>
        <!-- bloc-2 END -->
        
        <!-- ScrollToTop Button -->
        <a class="bloc-button btn btn-d scrollToTop" onclick="scrollToTarget('1',this)"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path class="scroll-to-top-btn-icon" d="M30,22.656l-14-13-14,13"/></svg></a>
        <!-- ScrollToTop Button END-->
        
        
        </div>
        <!-- Main container END -->
            
    </template>
      
    <script>
    export default {
      props: {
        itemList1 : Array,
        head: String
      },
    };
    </script>
      
    <style scoped>
    /* 引入的样式文件 */
    @import "@/assets/css/bootstrap.min.css";
    @import "@/assets/css/style.css";
    </style>
    