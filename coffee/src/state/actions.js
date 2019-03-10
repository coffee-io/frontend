import axios from 'axios';

const Action = {
    ADD_ITEM            : 1,
    REMOVE_ITEM         : 2,
    RECIPES_UPDATED     : 3,
    INGREDIENTS_UPDATED : 4,
    CHANGE_ADDRESS      : 5,
    SUBMIT_CART         : 6,
}

export function addItem(item) {
    return { type: Action.ADD_ITEM, item };
}

export function removeItem(i) {
    return { type: Action.REMOVE_ITEM, i };
}

export function updateRecipes() {
    function recipesUpdated(data) {
        return { type: Action.RECIPES_UPDATED, data };
    }

    return (dispatch) => {
        return axios.get(process.env.REACT_APP_BACKEND_URL + '/recipes/global/')
            .then(res => {
                res.data.expiration = Date.now() + 1;
                window.localStorage.setItem('recipes', JSON.stringify(res.data));
                dispatch(recipesUpdated(res.data));
            })
            .catch(error => { throw(error); });
    }
}

export function updateIngredients() {
    function ingredientsUpdated(data) {
        return { type: Action.INGREDIENTS_UPDATED, data };
    }

    return (dispatch) => {
        return axios.get(process.env.REACT_APP_BACKEND_URL + '/ingredients/')
            .then(res => {
                res.data.expiration = Date.now() + 1;
                window.localStorage.setItem('ingredients', JSON.stringify(res.data));
                dispatch(ingredientsUpdated(res.data));
            })
            .catch(error => { throw(error); });
    }
}

export function changeAddress(address) {
    return { type: Action.CHANGE_ADDRESS, address };
}

export default Action;

// vim:st=4:sts=4:sw=4:expandtab
