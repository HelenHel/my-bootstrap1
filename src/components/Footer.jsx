import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col md-3'>
          <a className=''>
          <img src='img/logo1.png' className='bi me-2' width={150} height={150}/>
          </a>
          <p>A&B - гарантия отличного отдыха</p>
        </div>
          <div className='col md-3'></div>
          <div className='col md-3'></div>
          <div className='col md-4'>
            <h6>ПАРТНЁРЫ</h6>
            <ul className='nav flex-column'>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>American Airlines</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>"Аэрофлот"</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>British Airways</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>"S7"</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Turkish Airlines</a>
              </li>
            </ul>
          </div>
          <div className='col md-4'>
            <h6>Направления</h6>
            <ul className='nav flex-column'>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Европа</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Северная Америка</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Южная Америка</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Россия </a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Азия </a>
              </li>
            </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer