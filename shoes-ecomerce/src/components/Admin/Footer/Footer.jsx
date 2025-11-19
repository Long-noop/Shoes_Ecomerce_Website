import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='admin-site'>
        <div className="container-fluid">
            <div className="row text-center align-items-center">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <div>© 2023 - kicks Dashboard</div>
                        <div className="d-flex gap-3">
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Policy</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer