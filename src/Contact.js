import React from 'react';


class Contact extends React.Component {

    constructor(){
        super();
        console.warn('Constructor will call at the starting of the dom');

        this.state ={
            name: 'Shourya',
            age: '27'
        };
    }

    componentDidMount(){
        console.log('Will learn after the component loaded properly');
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log('Will run when component will be Updated');
    }



    render() {
        return <div>
            <h1>Contact Component is running fine.It is working as Class Component</h1>
            <h2>Name is {this.state.name}</h2>
            <h2>Age is {this.state.age}</h2>
            <h3>Prop Name : {this.props.propname}</h3>
            <button onClick={()=>{this.setState({name:'Shourya Chowdhury',age:28})}}>Change State</button>
        </div>;
      }

    


}

export default Contact;