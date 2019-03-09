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

const labelStyle = {
    width: "120px",
    color: "black",
    opacity: 1,
}

class Custom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: "medium",
            ingredients: [],
            totalCost: 0.00,
        }
    }

    componentDidMount() {
        this.props.updateIngredients();
    }

    // 
    // LOGIC
    //

    addIngredient = (ingredient_name) => {
        const ingredient = this.props.ingredients.filter(i => i.name === ingredient_name)[0];
        this.setState({
            ingredients: [...this.state.ingredients, ingredient],
            totalCost: this.state.totalCost + ingredient.cost
        });
        console.log("Ingredient added.");
        console.log(ingredient);
    }

    sizeChanged = (s) => {
        this.setState({ size: s });
    }

    // 
    // RENDERING
    //

    keys() {
        // organize order of keys
        let s = new Set();
        for (let ing of this.props.ingredients)
            if (ing.type !== "Coffee" && ing.type !== "Additional" && ing.type !== "Diet")
                s.add(ing.type);
        let types = Array.from(s);
        types.sort();
        types.unshift("Coffee");
        types.push("Additional");
        types.push("Diet");
        return types;
    }

    ingredientButton(name, color, lightColor, unit) {
        const myStyle = {
            color: lightColor ? "black" : "white",
            backgroundColor: color,
            borderColor: "black",
        }
        if (!unit) {
            return <button onClick={() => this.addIngredient(name)} type="button" className="btn btn-primary" style={myStyle} key={name}>{name}</button>;
        } else {
            return (
                <div className="btn-group" role="group" key={name}>
                    <button type="button" className="btn btn-primary dropdown-toggle" style={myStyle} data-toggle="dropdown">
                        {name}
                    </button>
                    <div className="dropdown-menu" style={myStyle} aria-labelledby="btnGroupDrop1">
                        <a className="dropdown-item" style={myStyle} href="#!">1 {unit}</a>
                        <a className="dropdown-item" style={myStyle} href="#!">2 {unit}</a>
                        <a className="dropdown-item" style={myStyle} href="#!">3 {unit}</a>
                        <a className="dropdown-item" style={myStyle} href="#!">4 {unit}</a>
                    </div>
                </div>
            );
        }
    }

    ingredientButtons() {
        let keys = this.keys();
        let ings = {};
        for (let key of keys) {
            ings[key] = [];
            for (let ing of this.props.ingredients) {
                if (ing.type === key)
                    ings[key].push(this.ingredientButton(ing.name, ing.color, ing.lightColor, ing.unit));
            }
        }

        let buttonList = [];
        for (let key of keys) {
            buttonList.push(
                <div className="btn-toolbar mb-3" key={key}>
                    <div className="btn-group" role="group" aria-label={key}>
                        <button type="button" className="btn btn-outline-dark" style={labelStyle} disabled>{key}</button>
                        {ings[key]}
                    </div>
                </div>
            );
        }

        return buttonList;
    }

    render() {
        const optionStyle = { borderColor: "black" };
        return (
            <div className="m-3">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <p className="lead">Craft your perfect cup of coffee. Click on the buttons below to add the ingredients.</p>
                </div>
                <div className="btn-toolbar mb-3" key="Size">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button type="button" className="btn btn-outline-dark" style={labelStyle} disabled>Cup size</button>
                        <label className="btn btn-outline-secondary" style={optionStyle} onClick={() => this.sizeChanged("small")}>
                            <input type="radio" name="options" id="small" autoComplete="off" />Small
                        </label>
                        <label className="btn btn-outline-secondary active" style={optionStyle} onClick={() => this.sizeChanged("medium")}>
                            <input type="radio" name="options" id="medium" autoComplete="off" defaultChecked />Medium
                        </label>
                        <label className="btn btn-outline-secondary" style={optionStyle} onClick={() => this.sizeChanged("large")}>
                            <input type="radio" name="options" id="large" autoComplete="off" />Large
                        </label>
                    </div>
                </div>
                <hr />
                {this.ingredientButtons()}
                <hr />
                <div className="btn-group mb-2">
                    <button type="button" className="btn btn-danger">Cancel item</button>
                    <button type="button" className="btn btn-primary">Add item</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);

// vim:st=4:sts=4:sw=4:expandtab
