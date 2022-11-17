import React from "react";
/*
This application should allow the user to update their username by inputting a custom value and clicking the button.
The Username component is finished and should not be changed, 
but the App component is missing parts. Finish the App component 
so that the Username component displays the inputted text when the button is clicked.
The App component should use the React.useRef Hook to pass the input 
to the Username component for the input element and for the Username component.
For example, if the user inputs a new username of "John Doe" and clicks the button, 
the div element with id root should look like this:
<div><button>Change Username</button><input type="text"><h1>John Doe</h1></div>
*/
class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

export default function App() {
  function clickHandler() {}

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" />
      <Username />
    </div>
  );
}

//   document.querySelector("input").value = "John Doe";
//   document.querySelector("button").click();
