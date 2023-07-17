const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('#cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailImg = document.querySelector('#product-detail-img');
const productDetailPrice = document.querySelector('#product-detail-price');
const productDetailName = document.querySelector('#product-detail-name');
const productDetailDesc = document.querySelector('#product-detail-desc');
const addToCartButton = document.querySelector('.add-to-cart-button');
const cartNumber = document.querySelector('#cart-number');
const cartReturn = document.querySelector('#cart-return');
const cartContent = document.querySelector('.my-order-content');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartDetail);
productDetailClose.addEventListener('click', closeProductDetail);
addToCartButton.addEventListener('click', addToCart);
cartReturn.addEventListener('click', toggleCartDetail);


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

function openProductDetail(product){
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

    productDetailImg.setAttribute('src', product.image);
    productDetailPrice.innerText = '$' + product.price;
    productDetailName.innerText = product.name;
    productDetailDesc.innerText = product.description;

    productDetail.classList.remove('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

function addToCart(){
    i = Number(cartNumber.textContent);
    i += 1;
    cartNumber.innerText = String(i);

    renderCart();
}

const productList = [];

/*Añadir elementos al product list (esto sucedería en el backend)*/
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Computer',
    price: 170.50,
    image: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: "The latest MacBook Pro, perfectly preserved, you couldn't notice it was used."
});
productList.push({
    name: 'Coffee Cup',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A simple set of a red coffe cup and plate, a nice set to warm up your day.'
});

function renderProducts(arr){
    for (let product of arr) {
        /*Maquetar el HTML*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', function() {openProductDetail(product)});
    
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

/*
<div class="shopping-cart">
    <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    </figure>
    <p>Bike</p>
    <p>$30,00</p>
    <img src="./icons/icon_close.png" alt="close">
</div>
*/

function renderCart(){
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const shoppingCartFigure = document.createElement('figure');
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.setAttribute('src', productDetailImg.getAttribute('src'));

    const shoppingCartName = document.createElement('p');
    shoppingCartName.innerText = productDetailName.textContent;
    
    const shoppingCartPrice = document.createElement('p');
    shoppingCartPrice.innerText = productDetailPrice.textContent;

    const shoppingCartRemove = document.createElement('img');
    shoppingCartRemove.setAttribute('src', './icons/icon_close.png');

    shoppingCartFigure.appendChild(shoppingCartImg);

    shoppingCart.appendChild(shoppingCartFigure);
    shoppingCart.appendChild(shoppingCartName);
    shoppingCart.appendChild(shoppingCartPrice);
    shoppingCart.appendChild(shoppingCartRemove);

    cartContent.prepend(shoppingCart);
}