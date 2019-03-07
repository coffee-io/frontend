import React, { Component } from 'react';
import axios from 'axios';

export default class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount() {
        axios.get('https://coffee-api.gamesmith.co.uk/recipes/global/')
            .then(res => {
                console.log("Data loaded from API");
                console.log(res.data);
                this.setState({ recipes: res.data });
            });
    }

    render() {
        var boxes = [];
        for (const recipe of this.state.recipes) {
            boxes.push(
                <div className="card mb-4 box-shadow" key={recipe.recipeName}>
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">{recipe.recipeName}</h4>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h1 className="card-title pricing-card-title">${recipe.totalCost}</h1>
                        <p>{recipe.description}</p>
                        <button type="button" onClick={() => this.props.addItemToCart(recipe)} className="btn btn-lg btn-block btn-primary mt-auto">
                            Add to cart
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <p className="lead">Please choose your drink.</p>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Customize</h4>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <p>Craft the perfect cup of coffee, just the way you like it.</p>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary mt-auto">
                                    Create
                                </button>
                            </div>
                        </div>
                        {boxes}
                    </div>
                </div>
            </div>
        );
    }
}

// vim:st=4:sts=4:sw=4:expandtab
