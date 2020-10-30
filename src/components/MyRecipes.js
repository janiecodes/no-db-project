import React, {Component} from 'react'

class MyRecipes extends Component{
    constructor(props){
        super(props)

        this.state = {
            nicknameInput: props.recipe.nickname,
            toggleEdit: false
          }
    }

    handleChange = (event) => {
        this.setState({nicknameInput: event.target.value})
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
                    
                    <h1>{recipe.name}</h1>

                    {this.state.toggleEdit ? (
                        <input
                            value={this.state.nicknameInput}
                            onChange={this.handleChange}
                        />
                    ) : (
                        <h2>Nickname: {recipe.nickname}</h2>
                    )}

                    {this.state.toggleEdit ? (
                        <div>
                            <button 
                                onClick={() => {
                                    this.props.editRecipeName(
                                        this.props.index,
                                        this.state.nicknameInput
                                    )
                                    this.toggleEdit()
                                }}
                            >Save</button>
                            <button
                                onClick={() => {
                                    this.setState({nicknameInput: recipe.nickname})
                                    this.toggleEdit()
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