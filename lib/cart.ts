//This is different to the cart in '../lib/types'. I didn't want to change
//types.ts without seeing how you feel about my cart first.

let cart  = {
  contents: [],
  cartSize: 0,
  totalCalories: 0,


  //This is basically just a setter, I expect selectedItem to be a JS object
  //passed to this method in response to a UI event
  addItem: function(selectedItem){
    cart.contents.push(selectedItem);
  },

  //cartPosition is the index within cart.contents of unwanted item
  //Decided to splice to keep cart.contents tidy and logically ordered
  removeItem: function(cartPosition: number){
    cart.contents.splice(cartPosition, 1);
  },

  //Loops through items in cart adding their calories to total count
  //totalCalories is reset each time this function is called
  //I seperated cart.cartSize as a variable because I figured it might have
  //use at some stage later, like maybe for imposing a maximum cart capacity
  calculateTotals: function(){
    cart.cartSize = cart.contents.length;
    cart.totalCalories = 0;
    for (let i = 0; i < cart.cartSize; i++){
      cart.totalCalories = (cart.totalCalories + cart.contents[i].calories);
    }
  }
};

export {cart};
