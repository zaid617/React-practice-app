import React from 'react'
import Card from 'react-bootstrap/Card';

export default function About(props) {
  return (
      <Card border="secondary" className="container p-5 mb-3" style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}}
      >
    
          <h1>About Us</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores earum sequi facilis iusto pariatur hic veritatis nisi maxime? Quod corrupti, facere fuga provident totam quasi nobis vero! Nihil, officia? <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, hic odio. Aliquid fugiat iste nesciunt natus quam porro accusantium maxime rem reiciendis! Quasi ad odit voluptatibus eaque, omnis atque porro!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores earum sequi facilis iusto pariatur hic veritatis nisi maxime? Quod corrupti, facere fuga provident totam quasi nobis vero! Nihil, officia? <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, hic odio. Aliquid fugiat iste nesciunt natus quam porro accusantium maxime rem reiciendis! Quasi ad odit voluptatibus eaque, omnis atque porro!</p>
      </Card>
  )
}
