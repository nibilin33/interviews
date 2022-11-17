/*
React is loaded and is available as React and ReactDOM
imports should NOT be used
Finish the FocusableInput component so that the input element automatically 
receives focus on the first render if the shouldFocus prop is true.
The component should use React Hooks.
*/
import { useRef, useEffect } from "react";

const FocusableInput = (props) => {
    const inputRef = useRef(null);
    useEffect(()=>{
        if(props.shouldFocus) {
            inputRef.current.focus();
        }
    });
    return <input ref={inputRef}/>;
};
{/* <FocusableInput shouldFocus={true} /> */}
export default ()=>{
    return (<FocusableInput shouldFocus={true} />)
};