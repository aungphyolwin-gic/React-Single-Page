import React from 'react'
import './Footer.css'
import {Phone} from 'react-feather';
import { Mail } from 'react-feather';
import { Home } from 'react-feather';
import { AlertCircle } from 'react-feather';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='card bg-light rounded-5'>
          <div className='row justify-content-between'>
            <div className='col-md-4 ms-5 text-start'>
              <div><samll><h5>Company Address</h5></samll></div>
              <div><small><i><Home/></i> : 55, Near Pann Stop, Baho Road, Kamaryut Township, Yangon</small></div>
              <div><small><i><Phone/></i> : 09887654321</small></div>
              <div><samll><i><Mail/></i> : support@gic.com</samll></div>
            </div>
            <div className='col-md-4 text-end me-5'>
              <div><samll><i className='text-info '><AlertCircle/></i>&nbsp;          &nbsp; About the Company</samll></div>
              <div><samll>This is a software developing company and Service provider. 
                See more deatil in <a className='text-decoration-none link-info' href>web</a></samll></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
