import React from 'react'
import './Descriptionbox.css'

export const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
        <div className="descriptionbox-description">
          <p>An e-commerce website is on online platform that facilities the buying and selling of products or services over
            the internet. It serves as a virtual marketplace where business and individuals can showcase their products, 
            interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites 
            have gained immense popularity due to their convenience, accessibility, and the globalreach they offer.
          </p>
          <p>E-commerce websites typically display products or service along with detailed descriptions, images prices, and available
            variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevent information.
          </p>
        </div>
    </div>
  )
}

 export default Descriptionbox 