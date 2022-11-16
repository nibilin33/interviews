import "./App.css";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import {
  Suspense
} from "react";

function App() {
  return (
    <div className="App">
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
