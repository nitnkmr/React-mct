import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./Home.css"
import Navbar from './Navbar'
import Products from './Products'
const Home = () => {
  return (
    <>
    <div className="homeCon">
    </div>
        <div className='home'>
    
      <Navbar/>
        <h1>Welcome to react</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat possimus ea odit quas soluta veritatis debitis amet nulla, dolore ipsam, doloribus molestiae laboriosam itaque tempora autem iure excepturi vitae.
        Libero fugiat illo similique minus explicabo placeat, fuga magnam amet vitae accusantium molestias blanditiis maiores repudiandae vel laudantium consequatur ipsam, necessitatibus ab vero praesentium recusandae! Ex est voluptate nobis vero.
        Minima voluptate eius, voluptates nisi ipsa nobis atque dolor, repellat sequi enim repellendus quos excepturi cumque quo similique perspiciatis et sint at recusandae quidem, eligendi fuga itaque architecto nemo! Obcaecati?
        </p>
        <button className='explore'>Explore More!!!</button>
    </div>
    </>
  )
}

export default Home