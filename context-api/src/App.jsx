
import Profile from "./components/Profile";
import UserContextInfo from "./context/UserContextInfo";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <UserContextInfo>
        <h1>Context api </h1>
        <Profile />
        <Login />
      </UserContextInfo>
    </div>
  );
}

export default App
