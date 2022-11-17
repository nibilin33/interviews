import "./App.css";
import routes from "./routes";
import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <h1>Coding Test List</h1>
      <div className="test-link">
        {routes.map((item) => {
          return item.path.length > 1 ? (
            <Link to={item.path} key={item.path}>
              {item.path}
            </Link>
          ) : null;
        })}
      </div>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {routes.map((item, index) => (
            <Route
              element={<item.component></item.component>}
              path={item.path}
              key={index}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
