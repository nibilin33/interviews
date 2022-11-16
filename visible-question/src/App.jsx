import "./App.css";
import routes from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((item, index) => (
            <Route
              exact={item.isExact}
              component={item.component}
              path={item.path}
              key={index}
            />
          ))}
        </Switch>
      </BrowserRouter>
      <p className="reverse-txt">颠倒文字</p>
      <p className="change-direction">选中高亮文字</p>
      <mark>高亮</mark>
      <br />
      <p>
        默认函数参数和函数长度属性，ES2015 中引入了默认参数功能。
        随着默认参数的引入，长度属性的行为发生了变化。由于很明显带有默认值的参数是可选的，
        所以这样的参数不包括在函数的长度中。默认值参数后面的所有参数也是可选的。
        因此，它们也不包含在函数的长度属性中。
      </p>
      <code>
        {`
          function foo(a, b = 10, c) {
          console.log(foo.length);
          }
      
          foo(1, 2, 3);
        `}
        {}
      </code>
      <p>img标签隐藏是否触发http请求--会，同一个图片只会发出一个请求</p>
      <img
        src="mypichidden.jpg"
        style={{ visibility: "hidden" }}
        alt="My photo"
      ></img>
      <div style={{ display: "none" }}>
        <img src="mypic.jpg" alt="My photo"></img>
      </div>
      <code>
        {`
          <figure>
            <picture>
                <source media="(min-width: 40em)"
                srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320y">
                <img src="medium.jpg" alt="London by night">
            </picture>
            <figcaption>A landscape of London by night</figcaption>
          </figure>
          srcset attribute; 320y isn’t a valid value. If the y is replaced with a w, it becomes valid though.
          `}
      </code>
      <br />
      <code>
        无障碍开发 <br />
        <header role="header">
          <h1>Main title</h1>
          <form action="/" method="get" role="search">
            <label for="search">Search:</label>
            <input id="search" type="search" />
            <input type="submit" />
          </form>
        </header>
        <nav role="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <main role="main">
          <article role="article">
            <h1>Main title</h1>
            <p>This is the content of this section</p>
          </article>
        </main>
        <footer role="contentinfo">
          <small>Copyright &amp;copy; Aurelio De Rosa 2014</small>
        </footer>
      </code>
      <time datetime="2014-11-06">6</time>-
      <time datetime="2014-11-09">9 November 2014</time>
      <p>The grapefruit pie had a radius of 12cm and a height of 2cm.</p>
      <dl>
        <meter min="0" max="20" value="12">
          12cm
        </meter>
        <meter min="0" max="10" value="2">
          2cm
        </meter>
      </dl>
      <p>
        Progress:{" "}
        <progress max="100">
          <span>0</span>%
        </progress>
      </p>
    </div>
  );
}

export default App;
