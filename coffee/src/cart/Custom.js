import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, updateIngredients } from '../state/actions';

const mapStateToProps = state => {
    return { ingredients: state.ingredients };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: item => dispatch(addItem(item)),
        updateIngredients: () => dispatch(updateIngredients()),
    };
}

class Custom extends Component {

    componentDidMount() {
        this.props.updateIngredients();
    }

    render() {
        function ingredientButton(name, color, lightColor) {
            const myStyle = {
                // color: "#000000",
                backgroundColor: color,
                borderColor: lightColor ? "white" : "black",
            }
            return <button type="button" className="btn btn-primary" style={myStyle}>{name}</button>;
        }

        console.log(this.props.ingredients);

        let coffees = [], liquids = [], additional = [];
        for (let ing of this.props.ingredients) {
            let b = ingredientButton(ing.name, ing.color, ing.lightColor);
            if (ing.type === "coffee")
                coffees.push(b);
            else if (ing.type === "liquid")
                liquids.push(b);
            else if (ing.type === "added")
                additional.push(b);
            else 
                console.error("Invalid ingredient type '" + ing.type + "'");
        }

        const labelStyle = {
            width: "120px",
            color: "black",
            opacity: 1,
        }

        return (
            <div className="m-3">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <p className="lead">Craft your perfect cup of coffee.</p>
                </div>
                <div className="btn-group mb-2" role="group" aria-label="Coffees">
                    <button type="button" className="btn btn-outline-dark" style={labelStyle} disabled>
                        Coffees
                    </button>
                    {coffees}
                </div>
                <div className="btn-group" role="group" aria-label="Liquids">
                    <button type="button" className="btn btn-outline-dark" style={labelStyle} disabled>
                        Liquids
                    </button>
                    {liquids}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);