import Action from "./actions";

const initialState = {
    cart: {
        items: [],
        deliveryCost: 0.0,
        taxCost: 0.0,
        total: 0.0,
        deliveryAddress: {},
    },
    recipes: [],
    ingredients: [],
};

function updateCartTotal(cart) {
    cart.total = 0;
    for (const item of cart.items)
        cart.total += item.totalCost;
}

export function rootReducer(state = initialState, action) {
    if (action.type === Action.ADD_ITEM) {
        const cart = Object.assign({}, state.cart, {
            items: state.cart.items.concat(action.item),
        });
        updateCartTotal(cart);
        state = Object.assign({}, state, { cart });
    } else if (action.type === Action.REMOVE_ITEM) {
        const cart = Object.assign({}, state.cart);
        state.cart.items.splice(action.i, 1);
        updateCartTotal(cart);
        state = Object.assign({}, state, { cart });
    } else if (action.type === Action.RECIPES_UPDATED) {
        return Object.assign({}, state, { recipes: action.data });
    } else if (action.type === Action.INGREDIENTS_UPDATED) {
        return Object.assign({}, state, { ingredients: action.data });
    } else if (action.type === Action.CHANGE_ADDRESS) {
        const cart = Object.assign({}, state.cart);
        cart.deliveryAddress = action.address;
        state = Object.assign({}, state, { cart });
        // TODO - save address
        let current = window.localStorage.getItem('addresses');
        if (current === null)
            current = [];
        current.push(action.address);
        window.localStorage.setItem('addresses', JSON.stringify(current));
        console.log('Address updated on localStorage.');
    }
    return state;
}

// vim:st=4:sts=4:sw=4:expandtab
