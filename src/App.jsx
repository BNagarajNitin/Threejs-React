import CanavasModel from "./canvas"
import Customizer from "./pages/Customizer"
import { Home } from "./pages/Home"


function App() {
 

  return (
  <main className="app transition-all">
   
    <Home/>
    <CanavasModel/>
    <Customizer/>

  </main>
  )
}

export default App
