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
                color: lightColor ? "black" : "white",
                backgroundColor: color,
                borderColor: "black",
            }
            return <button type="button" className="btn btn-primary" style={myStyle}>{name}</button>;
        }

        function liquidButton(name, color, lightColor, unit) {
            const myStyle = {
                color: lightColor ? "black" : "white",
                backgroundColor: color,
                borderColor: "black",
            }
            return (
                <div className="dropdown-menu" style={myStyle} aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#!">1 {unit}</a>
                    <a className="dropdown-item" href="#!">2 {unit}</a>
                    <a className="dropdown-item" href="#!">3 {unit}</a>
                    <a className="dropdown-item" href="#!">4 {unit}</a>
                </div>
            );
        }

        let coffees = [], liquids = [], additional = [];
        for (let ing of this.props.ingredients) {
            if (ing.type === "coffee")
                coffees.push(ingredientButton(ing.name, ing.color, ing.lightColor));
            else if (ing.type === "liquid")
                liquids.push(ingredientButton(ing.name, ing.color, ing.lightColor));
            else if (ing.type === "added")
                additional.push(liquidButton(ing.name, ing.color, ing.lightColor, ing.unit));
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
                <div className="btn-group" role="group" aria-label="Additionals">
                    <button type="button" className="btn btn-outline-dark" style={labelStyle} disabled>
                        Additionals
                    </button>
                    {additional}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);