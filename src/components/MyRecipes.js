import React, { Component } from "react";
import axios from "axios";

class MyRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editedName: " ",
      toggleEdit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  toggleEdit = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit });
  };

  render() {
    return (
      <div
        onClick={() => {
          this.props.addRecipe(this.props.recipe);
        }}
      >
        <p
          className="x-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.deleteRecipe(this.props.index);
          }}
        >
          {" X "}
        </p>
        
        <li className="my-recipe">
          <h1>{this.props.recipe.name}</h1>
          {this.state.toggleEdit ? (
            <input
              value={this.state.editedName}
              onChange={this.handleChange}
            />
          ) : (
            <h2>New Name: {this.props.recipe.name}</h2>
          )}

          {this.state.toggleEdit ? (
            <div>
              <button
                onClick={() => {
                  this.props.editRecipeName(
                    this.props.index,
                    this.state.editedName
                  );
                  this.toggleEdit();
                }}
              >Save</button>
              <button
                onClick={() => {
                  this.setState({editedName: this.props.recipe.name})
                  this.toggleEdit();
                }}
              >Cancel</button>
            </div>
          ) : null}
            <button 
              onClick={this.toggleEdit}
              >Edit</button>
        </li>
        <div onDoubleClick={() => {
          this.props.deleteRecipe(this.props.recipe);
        }}
        ></div>
      </div>
    );
  }
}

export default MyRecipes;
