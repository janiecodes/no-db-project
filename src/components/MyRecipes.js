import React, { Component } from "react";
import axios from "axios";

class MyRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
      console.log(this.props.recipe)
    return (
      <div
        onClick={() => {
          this.props.addRecipe(this.props.recipe);
        }}
      >
        <li className="my-recipe">
          <h1>{this.props.recipe.name}</h1>
        </li>
      </div>
    );
  }
}

export default MyRecipes;
