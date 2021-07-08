import React from 'react';
import { Link } from 'react-router-dom';
import Cash from '../Icons/cash';
import FaceBook from '../Icons/facebook';
import Instgram from '../Icons/instgram';
import LinkedIn from '../Icons/linkedIn';
import MasterCard from '../Icons/masterCard';
import NasNavFooter from '../Icons/nasnav-footer';
import Send from '../Icons/send';
import Tweeter from '../Icons/twitter';
import Visa from '../Icons/visa';
import YeshteryFooter from '../Icons/yeshteryFooter';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='footer-Container'>
        {/* Column1 */}

        <div className='containerFooter'>
          <div className='about'>
            <div className='list-unstyled'>
              <YeshteryFooter />
              <p>
                Lerom Law Firm was founded in Toronto on the confidence that the
                best way to serve you is to be on the same wavelength with your
                goals, in accord with your moment in life or business, and
                resourceful for your prosperity. Guided by the big goals of
                diversity, inclusion, and the economic prosperity of Canada, we
                achieve the best results for our great clients looking for new
                opportunities in one of the best countries in the world.
              </p>
            </div>
          </div>

          {/* Column2 */}
          <div className='social'>
            <h4 className='inputCaption'>subscribe to our newsletter</h4>
            <div className='buttonInInput'>
              <input placeholder='enter mail' />
              <button>
                Subscribe
                <Send />
              </button>
            </div>
            <div className='footermenu'>
              <div className='sections'>
                <Link to='/about' className='yLinks'>
                  About Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Contact Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Track Order
                </Link>
                <Link to='/about' className='yLinks'>
                  Terms & Conditions
                </Link>
                <Link to='/about' className='yLinks'>
                  Privecy Policy
                </Link>
                <Link to='/about' className='yLinks'>
                  Sell With Us
                </Link>
                <Link to='/about' className='yLinks'>
                  Shipping And Returns
                </Link>
              </div>

              <div className='media'>
                <div className='ySocial'>
                  <FaceBook />
                  <p>/YESHTERY</p>
                </div>
                <div className='ySocial'>
                  <Instgram />
                  <p>/YESHTERY</p>
                </div>
                <div className='ySocial'>
                  <LinkedIn />
                  <p>/YESHTERY</p>
                </div>
                <div className='ySocial'>
                  <Tweeter />
                  <p>/YESHTERY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/********part Two**********/}
        <hr className='hrStyle' />
        <div className='secondDiv'>
          <div className='copyRights'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} | yeshtery, all rights reserved.
            </p>
          </div>

          <div className='payment'>
            <Cash />
            <Visa />
            <MasterCard />
          </div>

          <div className='nasnav'>
            Powered By <NasNavFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
