import styled from "styled-components";
import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Header from './Header';

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;
  &:hover {
    background: #6941c6;
  }
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
const Dialog = (props = {}) => {
  if (!props.visible) {
    return null;
  }
  return (
    <ModalContainer>
      <ContactButton onClick={
          () => {
            if(typeof props.onClose === 'function') {
              props.onClose();
            }
          }
        }>Cancel</ContactButton>
    </ModalContainer>
  );
};
const IssuesPage = () => {
  const [dialog, setDialog] = useState(false);
  return (
    <Fragment>
      <Header>
      </Header>
      <ContactButton
        onClick={
          () => {
            setDialog(true);
          }
        }
      >
        <img src="/public/vite.svg" alt="Contact" />
      </ContactButton>
      {createPortal(<Dialog visible={dialog} onClose={()=>setDialog(false)}/>, document.body)}
    </Fragment>
  );
};

export default IssuesPage;
