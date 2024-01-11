import React from 'react'

const Myprops = (props) => {
    return (
        <div>
            <h1>Name: {props.name} Salary: {props.salary}</h1>
        </div>
    )
}

const MyDestructured = ({name, salary}) => {
    return (
        <div>
            <h1>Name: {name} Salary: {salary}</h1>
        </div>
    )
}


const Header = () => {
  return (
    <div>
        <Myprops name={'Rahul'} salary={'100000'}/>
        <Myprops name={'Vijay'} salary={'200000'}/>
        <hr />
        <MyDestructured name={'Karan'} salary={'50000'}/>
        <MyDestructured name={'Varun'} salary={'70000'}/>
    </div>
  )
}

export default Header