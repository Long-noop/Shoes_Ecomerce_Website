import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer footer-transparent d-print-none">
        <div className="container-fluid">
        <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-lg-auto ms-lg-auto">
            <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item"><a href="https://docs.tabler.io" target="_blank" className="link-secondary" rel="noopener">Documentation</a></li>
                <li className="list-inline-item"><a href="./license.html" className="link-secondary">License</a></li>
                <li className="list-inline-item">
                <a href="https://github.com/tabler/tabler" target="_blank" className="link-secondary" rel="noopener">Source code</a>
                </li>
                <li className="list-inline-item">
                <a href="https://github.com/sponsors/codecalm" target="_blank" className="link-secondary" rel="noopener">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon text-pink icon-inline icon-4"
                    >
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    Sponsor
                </a>
                </li>
            </ul>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                Copyright &copy; 2025
                <a href="." className="link-secondary">Tabler</a>. All rights reserved.
                </li>
                <li className="list-inline-item">
                <a href="./changelog.html" className="link-secondary" rel="noopener"> v1.4.0 </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer