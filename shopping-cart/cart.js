function addItem(cart,item,quantity) {
    if (quantity<=0 || typeof quantity !== 'number' || Number.isNaN(quantity)) {
        console.log("Quantity must be a positive integer")
        return cart;
    } 
    if (!item || typeof item !== 'string') {
        console.log("Item must be a string")
        return cart
    }
    cart[item] = (cart[item] || 0) + quantity;
    return cart;

}

function removeItem(cart,item) {
    if (!item || !(item in cart)){
        return cart;
    }
    delete cart[item];
    return cart;
}


function getTotalItems(cart) {
    let total = 0;

    for (let item in cart){
        total += cart[item];
    }

    return total
}

module.exports = { addItem, removeItem, getTotalItems };