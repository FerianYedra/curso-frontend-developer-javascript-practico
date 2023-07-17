const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('#cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartDetail);
productDetailClose.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    const isCartDetailOpen = !cartDetail.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isCartDetailOpen){
        cartDetail.classList.toggle('inactive');
    }else if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartDetailOpen = !cartDetail.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isCartDetailOpen){
        cartDetail.classList.toggle('inactive');
    }else if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDeskotMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetail.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }else if(isDeskotMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }else if(isProductDetailOpen){
        productDetail.classList.toggle('inactive');
    }
    
    cartDetail.classList.toggle('inactive');
}

function openProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDeskotMenuOpen = !desktopMenu.classList.contains('inactive');
    const isCartDetailOpen = !cartDetail.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }else if(isDeskotMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }else if(isCartDetailOpen){
        cartDetail.classList.toggle('inactive');
    }

    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

const productList = [];

/*Añadir elementos al product list (esto sucedería en el backend)*/
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 170.50,
    image: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Coffee Cup',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

function renderProducts(arr){
    for (product of arr) {
        /*Maquetar el HTML*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + String(product.price);
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const productFigureCard = document.createElement('img');
        productFigureCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        /*Añadir elementos a los padres*/
        productFigure.appendChild(productFigureCard);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);