import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
export default () => {
    return(
        <Header>
            <Link to="/"><img src="/public/vite.svg" alt="Prolog logo" /></Link>  
            <Link to="/Input">products</Link>
            <a href="">Dashboard</a>
        </Header>
    )
}