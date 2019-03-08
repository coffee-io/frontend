import axios from 'axios';

const Action = {
    ADD_ITEM            : 1,
    REMOVE_ITEM         : 2,
    RECIPES_UPDATED     : 3,
    INGREDIENTS_UPDATED : 4,
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

    const recipes = JSON.parse(window.localStorage.getItem('recipes'));
    if (recipes) {
        console.log('Recipes loaded from local storage.');
        return { type: Action.RECIPES_UPDATED, data: recipes };
    } else {
        console.log('Recipes not found in local storage, loading from web.');
        return (dispatch) => {
            return axios.get(process.env.REACT_APP_BACKEND_URL + '/recipes/global/')
                .then(res => {
                    res.data.expiration = Date.now() + 1;
                    window.localStorage.setItem('recipes', JSON.stringify(res.data));
                    dispatch(recipesUpdated(res.data));
                })
                .catch(error => { throw(error); });
        };
    }
}

export function updateIngredients() {
    function ingredientsUpdated(data) {
        return { type: Action.INGREDIENTS_UPDATED, data };
    }

    const ingredients = JSON.parse(window.localStorage.getItem('ingredients'));
    if (ingredients) {
        console.log('Ingredients loaded from local storage.');
        return { type: Action.INGREDIENTS_UPDATED, data: ingredients };
    } else {
        console.log('Ingredients not found in local storage, loading from web.');
        return (dispatch) => {
            return axios.get(process.env.REACT_APP_BACKEND_URL + '/ingredients/')
                .then(res => {
                    res.data.expiration = Date.now() + 1;
                    window.localStorage.setItem('ingredients', JSON.stringify(res.data));
                    dispatch(ingredientsUpdated(res.data));
                })
                .catch(error => { throw(error); });
        };
    }
}

export default Action;