import React from 'react'
import Contactform from '../Compontas/Contact_Com/Contactform';
import Card from '../Compontas/Contact_Com/Card';
import Banner from '../Compontas/Banner-section/Banner';
export default function Contact() {
  return (
    <div>
      <Banner Contact_title_one="MY" Contact_title_two=" CONTACTS" Contact_para="Suspendisse viverra pretium neque ut tempus. Aenean et nulla non felis elementum." />
      <Card/>
      <Contactform/>

    </div>
  )
}
