import Grid from "./components/Grid"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: [],
    certifications: [],
  });

  return (
    <>
      <Header formData={formData}/>
      <Grid formData={formData} setFormData={setFormData}/>
      <Footer />
    </>
  )
}

export default App
