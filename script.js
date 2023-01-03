const Araform = document.querySelector(".Ara-form");
const cartitem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchbtn = document.querySelector("#search-btn");
const cartbtn = document.querySelector("#cart-btn");
const menubtn = document.querySelector("#menu-btn");


searchbtn.addEventListener("click", function(){
    Araform.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(searchbtn) &&
        !e.composedPath().includes(Araform)
        ) {
     Araform.classList.remove("active");
    }
    });
});


cartbtn.addEventListener("click", function(){
    cartitem.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(cartbtn) &&
        !e.composedPath().includes(cartitem)
        ) {
     cartitem.classList.remove("active");
    }
    });
});

menubtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(
        !e.composedPath().includes(menubtn) &&
        !e.composedPath().includes(navbar)
        ) {
     navbar.classList.remove("active");
    }
    });
});