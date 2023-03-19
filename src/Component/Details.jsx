import React from 'react'
import { Link } from 'react-router-dom'
import "./Details.css"

const Details = ({detail}) => {
  return (
    <div className='container det '>
        <h1 className='header11 '> {detail.category} Category</h1>
        <Link to="/Products"><div className="cross center">↞</div></Link>
        <img src={detail.image} alt="" height={300} />
        <div className="right detr col">
            <div className="name">
                <h4>Product Name</h4>
                <div>{detail.title}</div>
            </div>
            <div className="name">
                <h4>Product Price</h4>
                <div>{detail.price} $</div>
            </div>
            <div className="name">
                <h4>Description</h4>
                <div>{detail.description}</div>
            </div>
            <div className="name">
                <h4>rating</h4>
                <div>{detail.rating.rate}</div>
            </div>
        </div>
    </div>
  )
}

export default Details