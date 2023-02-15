import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { useAuth } from './provider/auth';

function App() {

  const {user, setUser} = useAuth()
  console.log(user)

  return (
    <div>
      <Profile />
      <input type="text" onChange={(e) => setUser({name: e.target.value})}/>
      <Login/>
    </div>
  );
}

export default App;
