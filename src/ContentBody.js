import React from 'react'
import './ContentBody.css'
import Rose from './image/rose.webp'
import PlantingImg from './image/planting.webp'
import SellingImg from './image/selling.jpg'
import TrainingImg from './image/traning.webp'

export default function ContentBody() {
  return (
    <>
      <div className='row justify-content-center bg-light pt-3 rounded-5'>
        <div className='col-md-8 '>
          <div className='row justify-content-center'>
            <h3 className='card rounded-3 col-md-4  bg-light text-primary mb-4'>Home</h3>
          </div>
          <div className='row mb-3'>
            <div className='col-md-6'>
              <img className='card-img rounded-3 ' src={Rose} />
            </div>
            <div className='card col-md-6'>
              <p>
                What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                
              </p>
            </div>
          </div>
        
          <hr /><br/>

          <div className='row justify-content-center'>
            <h3 className='card rounded-3 col-md-4 bg-light text-info mb-4'>About</h3>
          </div>
          <div className='row justify-content-center'>
            <div className='card'>
              <h5 className='card-header text-light-emphasis'>What is GIC meant for?</h5>
              <p className='card-body'>
                I must explain to you how all this mistaken idea of denouncing pleasure and praising 
                pain was born and I will give you a complete account of the system, and expound the actual 
                teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, 
                dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to 
                pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone.
              </p>
            </div>
          </div>
          <hr /><br/>


          <div className='row justify-content-center'>
            <h3 className='card col-md-4 rounded-3 bg-light text-success mb-4'> Service</h3>
          </div>
          <div className='row justify-content-around mb-3 ' >
            <div className='card shadow col-md-3 '>
              <div className='card-header'> Planting Service </div>
              <div className='card-img-top'>
                <img className='img-fluid rounded-bottom-3' src={PlantingImg}/>
              </div>
              <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                \
              </div>
              <div className='card-footer'>Contact Number : <a className='link-info'>(959)123456789</a>
                <a className='btn btn-outline-info btn-sm m-1 float-md-end'>Learn More</a>
              </div>
              
            </div>

            <div className='card shadow col-md-3 m-1'>
              <div className='card-header'> Selling Service </div>
              <div className='card-img-top'>
                <img className='img-fluid rounded-bottom-3' src={SellingImg}/>
              </div>
              <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </div>
              <div className='card-footer'>Contact Number : <a className='link-info'>(959)123456788</a>
                <a className='btn btn-outline-info btn-sm m-1 float-md-end'>Learn More</a>
              </div>
            </div>

            <div className='card shadow col-md-3 '>
              <div className='card-header'> Training Service </div>
              <div className='card-img-top'>
                <img className='img-fluid rounded-bottom-3' src={TrainingImg}/>
              </div>
              <div className='card-body'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
              </div>
              <div className='card-footer'>Contact Number : <a className='link-info'>(959)123456787</a>
                <a className='btn btn-outline-info btn-sm m-1 float-md-end'>Learn More</a>
              </div>
            </div>

          </div>
        </div>
        <hr/>
      </div>
    </>
  )
}
