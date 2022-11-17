/*
The TextInput component renders an input element in the DOM 
and accepts a ref that is forwarded to that input element. Finish the FocusableInput component:
The component should accept a focused prop.
When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
If on mounting the focused prop is true, the input should receive the focus.
*/
import {
    PureComponent,
    forwardRef,
    Component,
    createRef
} from 'react';

class Input extends PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends Component {
  ref = createRef();

  render() {
    return <TextInput ref={this.ref} {...this.props}/>;
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    this.ref.current.focus();
  }

  componentDidMount() {
    if(this.props.focused) {
        this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false,
};

export default FocusableInput;
