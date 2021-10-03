import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='container p-2'> {children} </main>
      <Footer />
    </>
  )
}

export default Layout;
