const menuEmail = document.querySelector(".navbar-email");
const shopMenuIcon = document.querySelector(".navbar-shopping-cart");
const productDetailIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const buttonMenuMobile = document.querySelector(".menu");
const shopCartMenu = document.querySelector("#shoppingCart");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
buttonMenuMobile.addEventListener("click", toggleMobileMenu);
shopMenuIcon.addEventListener("click", toggleshopCartMenuMenu);
productDetailIcon.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");

    const isShoppingCartClosed = shopCartMenu.classList.contains("inactive");
    if (!isShoppingCartClosed) {
        shopCartMenu.classList.add("inactive");
    }
}

function toggleshopCartMenuMenu(){
    const isMobileMenuClosed = menuMobile.classList.contains("inactive");
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    // close the mobile menu when you click the shoppingCartIcon and open the shopCartMenu.
    // in order to open one we need to close the last one.
    if (!isMobileMenuClosed) {
        menuMobile.classList.add("inactive");
    }
    
    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }

    shopCartMenu.classList.toggle("inactive");

}

function openProductDetail() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    const isShopCartMenuOpened = !shopCartMenu.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }

    if (isShopCartMenuOpened) {
        shopCartMenu.classList.add("inactive");
    }

    productDetail.classList.remove("inactive");
}

function closeProductDetail() {
    productDetail.classList.add("inactive");
}

const productList = [];
productList.push({
    name : "Bike",
    price: 120,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"    
});

productList.push({
    name : "Monitor",
    price: 320,
    img : "https://cdn.buysnip.com/ASUS-PB298Q-29-INCH-HDMI-WIDESCREEN-LED-MONITOR-01.jpg"    
});

productList.push({
    name : "watch",
    price: 100,
    img : "https://th.bing.com/th/id/OIP.FYbMeE3x9lUIeEbQ9hVdhAHaHa?pid=ImgDet&rs=1"    
});

function renderProducts(arr) {
    for (product of productList) {
        // product = {product.name, produtc.price}
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        productImg.addEventListener("click", openProductDetail);
        
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerHTML = "$" + product.name;
        
        const productImgCart = document.createElement("img");
        const productFigure = document.createElement("figure");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg" );
        productFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
    }
}

renderProducts(productList);