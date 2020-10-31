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
    const {deleteRecipe, editRecipeName} = this.props
    return (
      <div>
        <li className="my-recipe">
          <p
          className="x-button"
          onClick={(e) => {
            e.stopPropagation();
            deleteRecipe(this.props.index);
          }}
        >
          {" X "}
          </p>
          <h1>{this.props.recipe.name}</h1>
          {this.state.toggleEdit ? (
            <input
              value={this.state.editedName}
              onChange={this.handleChange}
            />
          ) : (
            
            null
            // <h2>{this.state.editedName}</h2> 
          )}

          {this.state.toggleEdit ? (
            <div>
              <button
                onClick={() => {
                  editRecipeName(
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
      </div>
    );
  }
}

export default MyRecipes;
