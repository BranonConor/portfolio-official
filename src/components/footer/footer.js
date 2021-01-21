import './footer.css'

import React from 'react'

const Footer = () => {
    return (
        <div className="Footer detail-text">
          © {new Date().getFullYear()}, Built by Branon Eusebio
        </div>
    )
}

export default Footer