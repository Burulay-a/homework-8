import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const StyleForm = styled('form')`
margin: 0 auto;
width: 100%;
height: 300px;
background-color: bisque;
display: flex;
justify-content: center;
padding-top: 100px

`

const StyleInput = styled('input')`
height: 50px;
width: 200px;
border: 4px solid blue;
border-radius: 20px;
border-color: blue;
margin-left:50px
`
const StyleBtn = styled('button')`
height: 50px;
width: 100px;
border: 4px solid blue;
border-radius: 20px;
border-color: blue;
margin-left: 10px
`

const StyleList = styled('ul')`
margin-left:20px;

list-style:none;
font-size:20px;
color:red;

`
const Styledh1 = styled('h1')`
color: red;
font-weight:larger;
`


function App() {
  const [input, setInput] = useState("")
  const [add, setAdd] = useState([])

  const inputHandler = (event) => {
    setInput(event.target.value)
    console.log(input);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setAdd((data) => {
      return [...data, input]
    }
    )

    setInput("")


  }




  return (
  

    <StyleForm onSubmit={submitHandler}>
      <Styledh1>TO DO LIST</Styledh1>
      <StyleInput value={input} type="text" onChange={inputHandler} />
      <StyleBtn type="submit" >ADD</StyleBtn>
      <StyleList>
        {add.map((el, index) => {
          return <li key={Math.random}>{el}</li>
        })}
      </StyleList>
    </StyleForm>

  )


}

export default App;



