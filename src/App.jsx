import { lazy, Suspense } from "react"
import Spiner from "./components/spiner/Spiner"
import './App.css'

const Header = lazy(()=> import('./components/headers/Header'))
const Footer = lazy(()=> import('./components/footers/Footer'))

function App() {

  return (
    <>
      <Suspense fallback={<Spiner/>}>
        <Header/>
      </Suspense>
      <Footer/>
      
      <Spiner/>
    </>
  )
}

export default App