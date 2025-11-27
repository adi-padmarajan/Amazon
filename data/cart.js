export const cart = [];

export function addToCart(productId){
   //Check if the product is already in the cart
    let matchingItem;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    //If the product is already in the cart, increase its quantity by 1, else push to cart.
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);
    if(matchingItem){
      matchingItem.quantity += quantity;
    }
    else{
        cart.push({
        productId,
        quantity
      });
    }
}