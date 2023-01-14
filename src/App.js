import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <div>Hello hackers!</div>
      </div>
    );
  }
}

export default App;
