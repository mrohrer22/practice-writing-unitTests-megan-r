const { addItem, removeItem, getTotalItems } = require('../cart');

describe('Shopping Cart Module', () => {
  let cart;
  
  beforeEach(() => {
    cart = {};
  });

    describe("addItem",() => {
        test('Positive Tests - add salmon', () => {
            addItem(cart, 'salmon',2);
            expect(cart).toEqual({salmon: 2});
        }); 
        test('Negative Test - negative quantity', () => {
            addItem(cart,'salmon',-3);
            expect(cart).toEqual({});
        })
        test('Edge Case - 0 quantity', () => {
            addItem(cart,'salmon',0);
            expect(cart).toEqual({});
        });
    });

    describe('removeItem', () => {
        test('Positive Test - removes item', () => {
        cart = { apple: 3 };
        removeItem(cart, 'apple');
        expect(cart).toEqual({});
        });

        test('Negative Test - item not in cart', () => {
        removeItem(cart, 'banana');
        expect(cart).toEqual({});
        });
    });

    describe('getTotalItems', () => {
        test('Positive Test - calculates total sum', () => {
        cart = { apple: 3, banana: 2 };
        expect(getTotalItems(cart)).toBe(5);
        });

        test('Negative Test - handles empty cart', () => {
        expect(getTotalItems(cart)).toBe(0);
        });

        test('Edge Case - large quantities', () => {
        cart = { apple: 1000000, banana: 2000000 };
        expect(getTotalItems(cart)).toBe(3000000);
        });
    });
});
