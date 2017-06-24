import test from 'ava';
import {cart} from '../lib/cart';
import {mockdata1, mockdata2, mockdata3} from '../test/mockdata';
//I put some fake item objects in another file in this directory to play with.
//These tests are pretty lazy tbh, not very scalable, I could do better,
//just wanted to get something committed in the way of testing.



test('addItemTest', t => {
  cart.addItem(mockdata1);
  t.is(cart.contents[0].name, "McDouble");
});
//if the name value at cart.contents[0] matches mockdata1 then it's likely
//that the data object has been pushed successfully


test('removeItemTest', t => {
  cart.contents[0] = mockdata1;
  cart.contents[1] = mockdata2;
  cart.contents[2] = mockdata3;

  cart.removeItem(1);

  t.is(cart.contents[1].name, "DoubleQuarterPounder");
});
//if the name value at cart.contents[1] matches mockdata3 it's reasonable
//to assume mockdata2 has been removed and mockdata3 shifted as planned


test('calculateTotalsTest', t => {
  cart.contents[0] = mockdata1;
  cart.contents[1] = mockdata2;
  cart.contents[2] = mockdata3;

  cart.calculateTotals();

  t.is(cart.totalCalories, (mockdata1.calories + mockdata2.calories +
    mockdata3.calories));
});
//if the total is being calculated correctly then it's pretty likely that
//the number of items in the cart is also being counted correctly
