import React from 'react'

export default function Home() {
  return (
    <div className='container-fluid p-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Hello and welcome to the inventory management system!</h2>
        <p className='lead'>This is a simple inventory management system that allows you to search for products by barcode, add new products, and view all products in the inventory.</p>
        <p className='lead'>To get started, you can use the navigation bar to search for products, add new products, or view all products in the inventory.</p>
        <p className='lead'>Happy inventory management!</p>
    </div>
  )
}
