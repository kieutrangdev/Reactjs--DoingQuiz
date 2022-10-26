import React from 'react'
import videoHomePage from '../../assets/video-homepage.mp4'
const HomePage = () => {
  return (
    <>
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src= {videoHomePage} type = 'video/mp4'/>
      </video>
    </div>
    <div className="homepage-content">
      <div className="title">
        There's is a better way to ask
      </div>
      <div className="des">
        You don't want to make a boring form.
        And your audience won't answer one.
        Create a typeform instead-and make everyone happy.
      </div>
      <div>
        <button>Get's started. It's free</button>
      </div>
    </div>
    </>
  )
}

export default HomePage
