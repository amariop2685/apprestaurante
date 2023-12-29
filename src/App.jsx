
import './App.css'
import Header from './components/Headers'
import Footer from './components/Footer'
import Card from './components/Card'
import Section from './components/Section'
import Parrafos from './components/Parrafos'

function App() {




  return (
    <>
      <Header />
      <div className='container'>
        <br />
        <Parrafos />
        <br />
        <Card />
        <br />
        <Section />
        </div>
      <Footer titulo='Suscribete a nuestras noticias' />

    </>
  )
}

export default App;
