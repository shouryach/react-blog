import { render } from '@testing-library/react';
import React,{useEffect,useState} from 'react';


function About(props){
        
    const [name,setName] = useState('Shourya');
    const [age,setAge] = useState(27);
    
        useEffect(()=>{
            console.log('Effect is working')
        },[])
            
        return(
            <div>
                <h1>About Component is running fine.</h1>
                <h2>Name is : {name}</h2>
                <h2>Age is : {age}</h2>
                <h3>Prop Name : {props.propname}</h3>
                <button onClick={()=>{{setName('Shourya Chowdhury');setAge(28)}}}>Update State</button>
            </div>
            
        );
    
}

export default About;