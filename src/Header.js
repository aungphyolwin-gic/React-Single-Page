import React from 'react'
import './Header.css'
import Tiger from'./image/tiger.jpg'

export default function Header() {
  return (
    <>
        <header>
          <div className='row justify-content-center bg-light pt-3 rounded-5'>
            <div className='col-md-8'>
            <nav class="navbar navbar-light bg-light rounded-5 ">
                <div className='m-1'>
                    <img className='img-fluid img-thumbnail rounded-circle ' width={85} src={Tiger} />
                </div>

                <div className='m-1'>
                    <a className='btn btn-outline-primary m-1'>Home</a>
                    <a className='btn btn-outline-info m-1'>About</a>
                    <a className='btn btn-outline-success m-1'>Service</a>
                </div>
            </nav>
            </div>
          </div>
          
          <hr/>
        </header>
    </>
  )
}
