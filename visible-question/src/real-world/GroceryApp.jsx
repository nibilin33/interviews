
import React from 'react';
/*
You have a GroceryApp component, which receives a list of products, each one with name and votes. 
The app should render an unordered list, 
with a list item for each product. Products can be upvoted or downvoted.
By appropriately using React state and props, implement the upvote/downvote logic.
Keep the state in the topmost component, while the Product component should accept props.
For example, passing the following array as products prop to 
GroceryApp [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }] and clicking the '+' 
button next to the Oranges should result in HTML like:
<div id="root">
  <ul>
    <li>
      <span>Oranges</span> - <span>votes: 1</span><button>+</button> <button>-</button>
    </li>
    <li>
      <span>Bananas</span> - <span>votes: 0</span><button>+</button> <button>-</button>
    </li>
  </ul>
</div>
*/
const Product = props => {
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
    };
    const minus = () => {
      // Call props.onVote to decrease the vote count for this product
    };
    return (
      <li>
        <span>{/* Product name */}</span> - <span>votes: {/* Number of votes*/}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };
  
  const GroceryApp = (props) => {
    let [products, setProducts] = React.useState(props.products);
    const onVote = (dir, index) => {
      // Update the products array accordingly ...
    };
  
    return (
      <ul>
        {/* Render an array of products, which should call onVote when + or - is clicked */}
      </ul>
    );
  }

export default ()=>{
    return <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  />
}