const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const buttonMenuMobile = document.querySelector(".menu");
const shopMenuIcon = document.querySelector(".navbar-shopping-cart");
const shopCard = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
buttonMenuMobile.addEventListener("click", toggleMobileMenu);
shopMenuIcon.addEventListener("click", toggleShopCardMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
}

function toggleShopCardMenu(){
    shopCard.classList.toggle("inactive");
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