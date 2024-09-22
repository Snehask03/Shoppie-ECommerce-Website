import React from 'react'
import './Breadcrumb.css'
import arraow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arraow_icon} alt="" />SHOP <img src={arraow_icon} alt="" /> {product.category} <img src={arraow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrumb
