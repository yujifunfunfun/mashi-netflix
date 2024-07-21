import './App.css'
import { Row } from './components/Row'
import { requests } from './request'

function App() {

  return (
    <div className="App">
     <Row fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  )
}

export default App
