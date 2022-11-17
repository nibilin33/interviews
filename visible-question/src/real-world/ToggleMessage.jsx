import { Fragment, Component } from "react";

/*
The Message component contains an anchor element and a paragraph below the anchor. Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:

At the start, the paragraph should not be rendered.
After a click, the paragraph should be rendered.
After another click, the paragraph should not be rendered.
Finish the Message component by implementing this logic.
*/
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggle: false
    }
  }
  render() {
    const {
        toggle
    } = this.state;

    return (
      <Fragment>
        <a href="#" onClick={()=>{
            this.setState({
                toggle: !toggle
            });
        }}>Want to buy a new car?</a>
        {toggle ? <p>Call +11 22 33 44 now!</p> : null}
      </Fragment>
    );
  }
}