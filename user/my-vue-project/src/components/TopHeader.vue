<template>
    <header id="header" class="header-size-sm" data-sticky-shrink="false" style="border-color: var(--cnvs-color)">
    </header>
    <div class="container">
        <div class="header-row justify-content-lg-between">
            <nav class="primary-menu top-primary-menu col-lg-5 order-last order-lg-first mobile-menu-off-canvas">
                <ul class="menu-container">
                    <li class="menu-item current">
                        <a class="menu-link" href="#">
                            <div>主页</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a class="menu-link" href="#">
                            <div>产品</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a class="menu-link" href="#">
                            <div>购物车</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- #primary-menu end -->

            <!-- Logo
					============================================= -->
            <div id="logo" class="mx-lg-auto col-lg-2 justify-content-center">
                <a class="color fst-italic" href="#">文创商城</a>
            </div>
            <!-- #logo end -->

            <div class="col-lg-5 d-flex justify-content-end">
                <div class="header-misc">
                    <!-- #primary-menu end -->

                    <div class="primary-menu-trigger" data-target=".top-primary-menu">
                        <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
                            <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
                        </button>
                    </div>

                    <!-- Top Account
							============================================= -->
                    <div class="header-misc-icon me-lg-4">
                        <a href="#"><i class="bi-person-circle"></i></a>
                    </div>
                    <!-- top-Account end -->

                    <!-- Top Cart
							============================================= -->
                    <div id="top-cart" class="header-misc-icon me-lg-4">
                        <a href="#" id="top-cart-trigger"><i class="bi-basket"></i></a>
                        <div class="top-cart-content">
                            <div class="top-cart-title">
                                <h4 class="ls-0 text-transform-none">Shopping Cart</h4>
                            </div>
                            <div class="top-cart-items">
                                <div class="top-cart-item">
                                    <div class="top-cart-item-image position-relative">
                                        <a href="#"><img
                                                src="http://127.0.0.1:8082/demos/skincare/images/products/13.jpg"
                                                alt="Blue Shoulder Bag" /></a>
                                        <span
                                            class="position-absolute top-0 start-0 translate-middle bg-danger rounded-circle lh-1 border border-white text-white square square-xs text-center">
                                            <span class="visually-hidden">Remove Product</span>&times;
                                        </span>
                                    </div>
                                    <div class="top-cart-item-desc">
                                        <div class="top-cart-item-desc-title">
                                            <a href="#" class="fw-normal">Âimtze Cream &amp; Lotions</a>
                                            <span class="top-cart-item-price d-block">$29.99</span>
                                        </div>
                                        <div class="top-cart-item-quantity">x 1</div>
                                    </div>
                                </div>
                                <div class="top-cart-item border-default">
                                    <div class="top-cart-item-image position-relative">
                                        <a href="#"><img
                                                src="http://127.0.0.1:8082/demos/skincare/images/products/11.jpg"
                                                alt="Blue Shoulder Bag" /></a>
                                        <span
                                            class="position-absolute top-0 start-0 translate-middle bg-danger rounded-circle lh-1 border border-white text-white square square-xs text-center">
                                            <span class="visually-hidden">Remove Product</span>&times;
                                        </span>
                                    </div>
                                    <div class="top-cart-item-desc">
                                        <div class="top-cart-item-desc-title">
                                            <a href="#" class="fw-normal">Clove Super Serum</a>
                                            <span class="top-cart-item-price d-block">$12.49</span>
                                        </div>
                                        <div class="top-cart-item-quantity">x 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="top-cart-action border-default">
                                <a href="#" class="button button-small m-0">View Cart</a>
                                <span class="top-checkout-price">$54.97</span>
                            </div>
                        </div>
                    </div>
                    <!-- #top-cart end -->

                    <!-- Top Search
							============================================= -->
                    <div id="top-search" class="header-misc-icon">
                        <a href="#" id="top-search-trigger"><i class="uil uil-search"></i><i class="bi-x-lg"></i></a>
                    </div>
                    <!-- #top-search end -->
                </div>
            </div>

            <form class="top-search-form" action="#" method="get">
                <input type="text" name="q" class="form-control" value="" placeholder="Type &amp; Hit Enter.."
                    autocomplete="off" />
            </form>
        </div>
    </div>

</template>