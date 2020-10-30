import React, {Component} from 'react'



class MyRecipes extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput:props.recipe.name,
            toggleEdit: false
          }
    }

    handleChange = (event) => {
        this.setState({nameInput: event.target.value})
    }

    toggleEdit = () => {
        this.setState({toggleEdit: !this.state.toggleEdit})
    }


    render(){
        const {recipe} = this.props
        return( 
            <div>
                <li className="recipe">
                    <p className="x-button"
                        onClick={(e) => {
                            this.props.deleteRecipe(this.props.index)
                        }}
                    >{"X"}</p>
                    <h1>{recipe.name}{" "}</h1>
                    {this.state.toggleEdit ? (
                        <div>
                            <button onClick={() => {
                                this.props.editRecipeName(
                                    this.props.index,
                                    this.state.nameInput
                                )
                            this.toggleEdit()
                            }}
                            >Save</button>
                            <button onClick={() => {
                                this.setState({nameInput: recipe.name})
                                this.toggleEdit();
                            }}
                            >Cancel</button>
                        </div>
                    ) : null}
                    <button onClick={this.toggleEdit}>Edit</button>
                </li>
            </div>
        )
    }
}

export default MyRecipes