import React,{useState} from 'react';

function Form()
{

    const [name,setName] = useState('');

    const test = (e)=>{
        console.warn('test is called');
        setName(e.target.val);
    }

    return(
        <div>
            <input type="text" val={name} onChange={test} />
            <button onClick={test}>Click Me</button>

        </div>
    )
}

export default Form;