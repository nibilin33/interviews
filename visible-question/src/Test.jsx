import React from "react";
const ThemeContext = React.createContext({
  name: "Tool",
});
const UserContext = React.createContext({
  name: "Guest",
});

class Layout extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <UserContext.Consumer>
            {(user) => (
              <div>
                {theme.name}
                {user.name}
              </div>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default class Test extends React.Component {
  render() {
    // 提供初始 context 值的 App 组件
    const test = {
      name: "Tool",
    };
    return (
      <ThemeContext.Provider value={test}>
        <UserContext.Provider
          value={{
            name: "22",
          }}
        >
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
