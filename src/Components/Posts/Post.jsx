import React from 'react'
import './Post.css'
import car from '../Assets/bradley-dunn-qijkjkJm63c-unsplash.jpg';
import github from '../Assets/icons8-github-50.png'
import linkedin from '../Assets/pngwing.com (8).png'
import twitter from '../Assets/icons8-twitterx-50.png'

const Post = () => {
  return (
    <>
    <div className='post'>
      <h1>Popular Posts</h1>
      <div className="postgrid">
        <div>
            <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>

        <div>
        <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>

        <div>
        <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>

        <div>
        <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>

        <div>
        <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>

        <div>
        <div>
            <a href="">
                <img src={car} alt="" className='car'/>
            </a>
            </div>
            <div>
            <h4>Visiting Theme Parks Improves Your Health.</h4>
            <h6>By Vidip Singh on Dec 17, 2069</h6>
            </div> 
        </div>
      </div>

      <div className="about">
        <h1>About Blogsy</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.</p>
        <a href="https://www.linkedin.com/in/vidip-singh-a0aa5b23b/"><img src={linkedin} alt=""/></a> 
        <a href="https://github.com/vidipsingh"><img src={github} alt=""/></a>
        <a href="https://x.com/vidip2025"><img src={twitter} alt=""/></a>
        </div>
        
      
    </div>
    </>
  )
}

export default Post
