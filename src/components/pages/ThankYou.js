import React from 'react'


import '../../App.css'

export default function ThankYou() {
    return (
        <header style={ HeaderStyle }>
            <p/><p/><p/><p/>
            <p className="main-para text-center">Thank you</p>
            <p/><p/><p/><p/>
            <p className="main-para text-center">We received your requirements and will get back to you soon. </p>

        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}