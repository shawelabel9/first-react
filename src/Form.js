import React, {Component} from 'react'

class Form extends Component {

    initialState = {
        name:"",
        email:"",
        phonenumber:""
    }

    state = this.initialState;

    handleChange = (event) => {
    const {name, value}= event.target
    this.setState({
         [name] : value,
      })
    }
    submitForm = (props) =>{
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, email, phonenumber} = this.state;
        return(
            <form>
                <label htmlFor="name"> Name </label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange= {this.handleChange}
                />
                <br />
                <br />
                <label htmlFor="email"> Email </label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange= {this.handleChange}
                />
                <br />
                <br />
                <label htmlFor="phonenumber"> Phone number </label>
                <input 
                    type="number"
                    name="phonenumber"
                    id="phonenumber"
                    value={phonenumber}
                    onChange= {this.handleChange}
                />
               <input 
                type="button"
                value ="submit"
                onClick={this.submitForm}
                />
                
            </form>
        )
    }
}

export default Form