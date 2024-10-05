//reactArrowFunctionExportComponent (rafce) <--- command
import React from 'react'
import styles from './Greeting.module.css' // CSS module

const Greeting = () => {
    // Variable and functions go here (above return)

    // INline CSS (A javaScript object containing CSS properties)
    const greetingStyle = {
        color: 'green',
        fontSize: '18px'

    }

  // This is what displays on webpage 👀
  return (
    <div style={greetingStyle}> Greeting</div>
  )
}

export default Greeting

// command rafce 
