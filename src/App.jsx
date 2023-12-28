
import './App.css'
import Header from './components/Headers'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {

  return (
    <>
      <Header />
      <br />
      <h2 className='subtitulo'>Tenemos las mejores opciones de pizzas para todos los
      paladares</h2>
      <br />
      <p className='parrafoPrincipal'>Nuestros clientes prefieren todos estos sabores, por eso hemos escogido
      cada uno de los toking y realizado las distintas combinaciones de los mismos
      para que puedas degustar cada mecla de sabor, y confiamos que cada una de estas hará
      estallar tú cabeza de sabor.</p>
      <Card />
      <Footer titulo='Suscribete a nuestras noticias'/>

    </>
  )
}

export default App
