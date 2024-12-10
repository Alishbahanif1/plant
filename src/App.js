
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import Story  from './components/Story';
import TypeSection from './components/TypeSection'
import GiftCard from './components/GiftCard';
import AboveFooter from'./components/AboveFooter'
import Footer from './components/Footer';
// import Btn from './components/Btn';
// import FormControl from './components/FormControl';
function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <ProductCards/>
  <Story/>
  <TypeSection/>
  <GiftCard/>
  <AboveFooter/>
  <Footer/>
{/* <Btn afn="Alishba" id="a123" details="Detailssss"/>
<Btn afn="Nimra" id="a1234" details="Detailssss nahi deni"/>
<FormControl type="button" value="name"/>
<FormControl type="date" placeholder="05/10/2024"/> */}
  </>  
  );
}

export default App;
