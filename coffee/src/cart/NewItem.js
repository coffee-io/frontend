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

    box(title, cost, description, button_function, button_text, button_outline) {
        const cost_element = cost ? <h1 className="card-title pricing-card-title">${cost}</h1> : <div></div>;
        const buttonClass = "btn btn-lg btn-block btn-" + (button_outline ? 'outline-' : '') + "primary mt-auto"
        return (
            <div className="card mb-4 box-shadow" key={"box_" + title}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{title}</h4>
                </div>
                <div className="card-body d-flex flex-column">
                    {cost_element}
                    <p>{description}</p>
                    <button type="button" onClick={button_function} className={buttonClass}>
                        {button_text}
                    </button>
                </div>
            </div>
        );
    }

    render() {
        var boxes = [];
        if (this.state.recipes.length === 0) {
            boxes.push(this.box("Loading...", null, "Loading...", () => {}, "Please wait...", true));
        } else {
            for (const recipe of this.state.recipes) {
                boxes.push(this.box(recipe.recipeName, recipe.totalCost, recipe.description, 
                    () => this.props.addItemToCart(recipe), "Add to cart", false));
            }
        }

        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <p className="lead">Please choose your drink.</p>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        {this.box("Customize", null, "Craft the perfect cup of coffee, just the way you like it.", 
                            () => { /* TODO */ }, "Create", true)}
                        {boxes}
                    </div>
                </div>
            </div>
        );
    }
}

// vim:st=4:sts=4:sw=4:expandtab
