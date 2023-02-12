import { useState, useEffect } from 'react'
import {AppRouter} from "./routes/index"
import { BrowserRouter } from 'react-router-dom'
function App(){
  return(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
