import Navbar from './components/Navbar/Navbar'
import PageWelcome from './components/PageWelcome/PageWelcome'
//import PageNewTrip from './components/PageNewTrip/PageNewTrip'

function App() {

  return (
    <>
    <Navbar />
    <div id="main-container">
      <main>
        <PageWelcome />
      </main>
    </div>
    </>
  )
}

export default App
