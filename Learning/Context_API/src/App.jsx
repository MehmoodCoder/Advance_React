import './App.css'
import UserContextProvider from './Context/UserContextProvider.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'

function App() {

  return(
    <UserContextProvider>
      <h4>MehmoodCoder</h4>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
