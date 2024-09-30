const shop_add = document.querySelectorAll(".link-products");
const cart = document.querySelector(".cart-item");
const cartImg = document.querySelector('.img-cart');
// Check if user_id exists in localStorage, if not, initialize it
if (!localStorage.getItem("user_id")) {
    localStorage.setItem("count_buy", 0);
    localStorage.setItem("user_id", generateUserId());
}

let count_buy = parseInt(localStorage.getItem("count_buy")) || 0; 
cart.textContent = count_buy;

// Generate unique user_id
function generateUserId() {
    return 'user_' + Math.random().toString(36).substring(2, 15) + Date.now();
}

// Event listeners for each product link
shop_add.forEach(link_buy => {
    link_buy.addEventListener("click", (evt) => {
        evt.preventDefault();
        count_buy++; 
        cart.textContent = count_buy;

        localStorage.setItem("count_buy", count_buy);
        
        // Open the modal when a product is clicked
        modal.style.display = "block";
   
        // Call moveCart each time a product is added
        setTimeout(moveCart,100);
    });
});

// Get the modal and elements for closing it
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Close the modal when 'x' is clicked
span.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});



function moveCart() {
    cartImg.classList.add('move');
}



// Reset the cart image position after animation
cartImg.addEventListener('transitionend', () => {
    cartImg.classList.remove('move'); // Remove the move class to reset position
});
