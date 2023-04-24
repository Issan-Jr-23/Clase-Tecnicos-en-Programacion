import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Products from '../page/Products.jsx'
function App() {
  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <section>
      <Products/>

      </section>
      <section>
        Soy el contenido de la web
      </section>
      <Footer/>
    </div>
    )
}
export default App