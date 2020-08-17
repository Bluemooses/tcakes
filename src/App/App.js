import React from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello</header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
