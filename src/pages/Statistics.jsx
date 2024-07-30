import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import StatCharts from '../Components/StatCharts'
import Footer from '../Components/Footer/Footer'

function Statistics() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
            <div className="my-32">
            <StatCharts />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Statistics