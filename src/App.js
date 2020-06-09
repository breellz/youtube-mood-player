import React, {useReducer} from 'react';
import MoodContext from './context/Mood-context'
import MoodReducer from './reducers/MoodReducer'
import Header from './components/Header'
 import Frame from './components/Frame'
import MoodSelector from './Selectors/MoodSelector'
import './styles/styles.scss'

const App =()=>{
  const [state, dispatch] = useReducer(MoodReducer, [])

  return (
    <MoodContext.Provider value ={{state, dispatch}}>
    <Header />
    <MoodSelector />
    <Frame />
    </MoodContext.Provider>
  )
}

export default App
