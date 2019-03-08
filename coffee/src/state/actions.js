import axios from 'axios';

const Action = {
    ADD_ITEM        : 1,
    REMOVE_ITEM     : 2,
    RECIPES_UPDATES : 3,
}

export function addItem(item) {
    return { type: Action.ADD_ITEM, item };
}

export function removeItem(i) {
    return { type: Action.REMOVE_ITEM, i };
}

export function updateRecipes() {
    function recipesUpdated(data) {
        return { type: Action.RECIPES_UPDATES, data };
    }

    const recipes = JSON.parse(window.localStorage.getItem('recipes'));
    if (recipes) {
        console.log('Recipes loaded from local storage.');
        return { type: Action.RECIPES_UPDATES, data: recipes };
    } else {
        console.log('Recipes not found in local storage, loading from web.');
        return (dispatch) => {
            return axios.get('https://coffee-api.gamesmith.co.uk/recipes/global/')
                .then(res => {
                    res.data.expiration = Date.now() + 1;
                    window.localStorage.setItem('recipes', JSON.stringify(res.data));
                    dispatch(recipesUpdated(res.data));
                })
                .catch(error => { throw(error); });
        };
    }
}

export default Action;