import Background from "./components/Background/Background"
import Introduction from "./components/Introduction/Introduction"

function App() {

  return (
    <div className="app">
      <Background/>
      <div className="container home">
        <Introduction/>
      </div>
    </div>
  )
}

export default App
