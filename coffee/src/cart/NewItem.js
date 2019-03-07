import React, { Component } from 'react';

export default class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipes: [
                {
                    "recipeName": "Café con leche",
                    "description": "The perfect way to start your morning.",
                    "size": "medium",
                    "totalCost": 5,
                    "ingredients": [
                        {
                        "name": "Brewed (string)",
                        "type": "coffee",
                        "cost": 3,
                        "color": "#610B0B",
                        "percentage": 0.5
                        },         {
                        "name": "Milk",
                        "type": "liquid",
                        "cost": 2,
                        "color": "#FAFAFA",
                        "percentage": 0.5
                        }        
                    ]
                }, {
                    "recipeName": "Espresso",
                    "description": "A creamy, strong coffee prepared under ideal conditions of temperature and pressure.",
                    "size": "small",
                    "totalCost": 4,
                    "ingredients": [
                        {
                        "name": "Espresso",
                        "type": "coffee",
                        "cost": 4,
                        "color": "#000000",
                        "percentage": 1
                        }        
                    ]
                }
            ]
        };
    }

    componentDidMount() {
        // TODO - get info from external URL
    }

    render() {
        var boxes = [];
        for (const recipe of this.state.recipes) {
            boxes.push(
                <div className="card mb-4 box-shadow" key={recipe.recipeName}>
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            {recipe.recipeName}
                        </h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">${recipe.totalCost}</h1>
                        <p>{recipe.description}</p>
                        <button type="button" className="btn btn-lg btn-block btn-primary">
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
                                <h4 className="my-0 font-weight-normal">
                                    Customize
                                </h4>
                            </div>
                            <div className="card-body">
                                <p>
                                    Craft the perfect cup of coffee, just the way you like it.
                                </p>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">
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
