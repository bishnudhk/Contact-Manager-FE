import React from 'react'
import ContactTable from '../../component/contactTable/contactTable'
import './homePage.css';

const HomePage:React.FC = () => {
  return (
    <div className='tableContainer'>
      <ContactTable/>
    </div>
  )
}

export default HomePage