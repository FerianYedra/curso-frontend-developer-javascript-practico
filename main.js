const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDeskotMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }else if(isDeskotMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }
    
    productDetail.classList.toggle('inactive');
}