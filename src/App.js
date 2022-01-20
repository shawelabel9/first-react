import React, {Component} from 'react'
import Form from './Form.js'
import Table from './Table.js'

class App extends Component {

  state = {
    characters: [],
  }
  removeCharacter = (index) => {
      const {characters} = this.state;
      this.setState({
        characters: characters.filter((char,i) => {
          return i !== index;
        })
      })
  }
  handleSubmit = (char) => {
    const characters = this.state.characters
    this.setState({
      characters: [...characters, char],
    })
  }
    render(){
      const characters = this.state.characters
      return(
        <div>
         <Form handleSubmit={this.handleSubmit}/>
         <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
        </div>
      )
    }
}

export default App;
