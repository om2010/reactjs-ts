
import './App.css'
import Greet from './component/Greet'
import Person from './component/Person'
import { PersonList } from './component/PersonList'

function App() {
  const personName={
    firstName:"John",
    lastName:"thomas",
  }
  const personListName=[
    { id:1,
       first:'Jhon',
       last:'Thomas'
    },
    {
      id:2,
       first:'David',
       last:'Jorj'
    },
    {
      id:3,
       first:'Donals',
       last:'trumps'
    }
  ]
  return (
    <>
     <Greet name="Indian" messageCount={100} isLoggin = {true}/>
     <Person name={personName}/>
     <PersonList name={personListName}/>
    </>
  )
}

export default App
