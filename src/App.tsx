import Background from "./components/Background/Background"
import Introduction from "./components/Introduction/Introduction"
import TechStack from "./components/TechStack/TechStack"

function App() {

  return (
    <div className="app">
      <Background/>
      <div className="container intro">
        <Introduction/>
      </div>
      <TechStack/>
    </div>
  )
}

export default App
