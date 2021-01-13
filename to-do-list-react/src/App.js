import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  // const [message, setMessage] = useState("");
  const inputRef = useRef();

  useEffect(()=>{
    setText("initial value")
    console.log("text=", text)
  }, [])

  function changeTextHandle(e) {
    setText(e.target.value);
  }

  function addToList() {
    if (text === "") {
      setText("Please enter in field");
    } else if (list.length >= 10) {
      console.log("10 items max. Delete some items");
      setText("10 items max. Please delete items from the list");
      list.pop();
    } else {
      const copyList = [...list];
      copyList.push(text);
      setList(copyList);
      setText("");
      inputRef.current.focus();
    }
  }

// question 1 and 2 solution
// if(text.trim().length > 0 && list.length <5) {
//   const copyList = [...list];
//       copyList.push(text);
//       setList(copyList);
//       setText("");
//       inputRef.current.focus();
// }

  function removeItemHandle(i) {
    const copyList = [...list];
    copyList.splice(i, 1);
    setList(copyList);
  }

  return (
    <div className="App">
      <h1>To-do List</h1>

      <input
        className="inputSize"
        ref={inputRef}
        onChange={changeTextHandle}
        value={text}
        type="text"
      />

      <button onClick={addToList}>Add</button>
      {/* <button disabled={list.length > 5} onClick={addToList}>Add</button> */}
      <h2>My List</h2>
      {list.map((v, i) => {
        return (
          <li onClick={() => removeItemHandle(i)} key={i}>
            {v}
          </li>
        );
      })}
    </div>
  );
}

//initial rendering

//changing the model( state) updates the page

// 3)  In the todo list app add feature so that user cant enter empty
//  values also allow max 10 items in the list,  disable the input box
// if it reaches 10 items and ask user to remove old tasks from the list
