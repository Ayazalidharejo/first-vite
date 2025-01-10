import React from 'react';
import './Footer.css';

const Footer2 = () => {
  return (
    <>
      <div className='row px-8'>
        <div className='col-6'></div>
        <div className='col-12'>
          <div className='position-relative'>
            <hr style={{ borderColor: 'white' }} className='' />
            <span className='Dote'></span>
            <span className='Dote2'></span>
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <h2 className='d-flex align-items-center ps-1'>
            <span className='text3' data-content='FoxMindTech'>
              FoxMindTech
            </span>
            <span className='double-dote'> ⦿</span>
          </h2>
          <address className='mt-4 text-small text-white'>
            81 PROSPECT ST, SUITE 9069,
            <br />
            BROOKLYN, NY 11201
          </address>
        </div>

        <div className='col-12 col-md-6'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <ul className='list-unstyled small text-white'>
                <li className='my-1'>Motion Design</li>
                <li className='my-1'>Front-end Development</li>
                <li className='my-1'>Back-end Development</li>
                <li className='my-1'>Shopify Development</li>
                <li className='my-1'>Website Support</li>
                <li className='my-1'>Paid Search Advertising</li>
                <li className='my-1'>Social Media Advertising</li>
                <li className='my-1'>Email Marketing</li>
                <li className='my-1'>SEO</li>
              </ul>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center align-items-center h-100'>
              <div className='text-center text-white pt-40'>
                <div className='text3' data-content='SERVICE'>
                  SERVICE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-6 offset-6'>
  <div className='position-relative'>
    <hr style={{ borderColor: 'white' }} />
    <span className='Dote'></span>
    <span className='Dote2'></span>
  </div>
</div>

      </div>

      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col-12 col-md-6'></div>
        <div className='col-12 col-md-6 text-start text-white p-0 text-3' >
        <span className="text3 work" data-content="WORK">WORK</span>


        </div>
      </div>

      <div className='row px-8'>
        <div className='col-12 col-md-4 pb-5'>
          <div className='d-flex mt-5'>
            <input
              type='email'
              placeholder='Your Email'
              className='bg-transparent text-white border border-top-0 border-start-0 border-end-0 p-0 w-100'
              style={{ outline: 'none' }}
            />
            <span className='pb-3 text-white px-2'>➜</span>
          </div>
        </div>

        <div className='col-12 col-md-4 pb-5 mb-5 d-flex flex-column'>
          <div className='flex-grow-1'></div>
          <span style={{ paddingTop: '70px' }} className='min-h-24 text-white'>
            ©2024 FoxMindTech Studio
          </span>
        </div>

        <div className='col-12 col-md-4 mt-1'>
          <div className='d-flex flex-wrap pt-16'>
            <a href='#' className='social-link mr-3 small text-decoration-none text-white'>
              LinkedIn
            </a>
            <a href='#' className='social-link mr-3 small text-decoration-none text-white'>
              Instagram
            </a>
            <a href='#' className='social-link mr-3 small text-decoration-none text-white'>
              Twitter
            </a>
            <a href='#' className='social-link mr-3 small text-decoration-none text-white'>
              Behance
            </a>
            <a href='#' className='social-link small text-decoration-none text-white'>
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
