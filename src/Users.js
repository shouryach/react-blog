import React,{useState,useEffect,Fragment} from 'react';
import {Table} from 'react-bootstrap';

function Users(){

    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            //console.warn("data",data)
            data.json().then((result)=>{
                //console.log(result);
                setUser(result.data);
            })
        })
    })    


    return(
        <Fragment>
            <h1>It will show json data in loop</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
               
                <th>Index</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    user.map((item,i)=><tr key={i}>
                    <td>{i}</td>   
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                   
                    </tr>
                    )
                }
                
                
            </tbody>
            </Table>
            {/* <ul>
              {
                  user.map((item,i)=>
                    <li key={i}>Name is: {item.name} and age is {item.age}</li>
                  )
              }  

              {
                  user.length===5?<div>This is in true block </div>:<div>This is in false block</div>
              }
            </ul> */}
           
        </Fragment>
    )

}

export default Users;