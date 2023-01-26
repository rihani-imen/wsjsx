import "./App.css";

import Address from "./components/profile/Address";
import FullName from "./components/profile/FullName";
import ProfilePhoto from "./components/profile/ProfilePhoto";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX  Checkpoint</h1>
        <ProfilePhoto />
        <FullName />
        <Address />
      </header>
    </div>
  );
}

export default App;
