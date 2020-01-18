import React, { useState } from "react"
import "./App.css"

function App() {
  //make use state to get and set form value

  const [text, setText] = useState("")
  const [displayText, setDisplayText] = useState("")
  const onSubmit = e => {
    e.preventDefault()
    setDisplayText(text)
    //or
    //setDisplayText(e.target["test"].value)
  }

  const handleClick = e => {
    const value = e.target.value

    setText(value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="test" type="text" onChange={handleClick} />
        <button type="submit">click me</button>
        <p>{displayText || "Start Typing!"}</p>
      </form>
    </div>
  )
}

export default App
