import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, updateIngredients } from '../state/actions';
import Selector from './Selector';
import Coffee from './Coffee';

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

    addIngredient = (ingredient) => {
        // TODO - can we add it?
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

    sizeSelector() {
        return [
            { name: "Small", value: "small" },
            { name: "Medium", value: "medium" },
            { name: "Large", value: "large" },
        ];
    }

    render() {
        const ingSelectors = this.keys().map(key => {
            const ingredients = this.props.ingredients.filter(i => i.type === key).map(i => ({
                name:       i.name, 
                value:      i, 
                color:      i.color, 
                lightColor: i.lightColor,
                dropdown:   i.unit ? [1, 2, 3, 4].map(j => ({ name: j + " " + i.unit, value: Object.assign(i, { qtd: j }) })) : null
            }));
            return <Selector name={key} buttons={ingredients} onSelected={(i) => this.addIngredient(i)} key={key} />;
        });
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <p className="lead">Craft your perfect cup of coffee. Click on the buttons below to add the ingredients.</p>
                </div>
                <div className="container m-3">
                    <Selector selector name="Cup size" buttons={this.sizeSelector()} onSelected={(size) => this.sizeChanged(size)} selected={2} />
                    <hr />
                    <div className="row">
                        <div className="col-md-auto">
                            <Coffee cup={this.state} />
                        </div>
                        <div className="col">
                            <p>Click to add the ingredients:</p>
                            {ingSelectors}
                        </div>
                    </div>
                    <hr />
                    <div className="btn-group mb-2">
                        <Link className="btn btn-danger" to="/cart">Cancel item</Link>
                        <button type="button" className="btn btn-primary">Add item</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);

// vim:st=4:sts=4:sw=4:expandtab
