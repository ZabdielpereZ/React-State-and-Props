import { useState } from 'react'
import Greeting from './components/Greeting'
import UserProfile from './components/UserProfile'
import MoviesList from './components/MoviesList'


function App() {
  // section where you declare variables and functions 💡🧠
  const [count, setCount] = useState(0)

  // Function to get data from an API

  // Log in user


  // This is what displays on webpage 👀
  return (
    <>
    <UserProfile /><br></br>
    <MoviesList />
    </>
  )
}

export default App
