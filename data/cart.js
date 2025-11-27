export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

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

export function removeFromCart(productId){
  //Create a new array
  //Loop through the cart
  //Add each product to the new array except for this productId

  const newCart = []
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart
}