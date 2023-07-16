import React from 'react'
import { Link } from 'react-router-dom'
function Top() {
  return (
    <>
      

          <div>
              {/*

BootStrap NavBar Example Three - Social Media Icons
 //
1. Replaced the ugly toggle with angle
2. Used hover only for large screen and above
3. You can add resize function if you want in javascript
4. SlideIn / SlideUp can be replaced with FadeIn /FadeUp
5. Delay on leaving mouse is applied to ensure the hover actions are not jittery.
//
*/}
              <nav className="navbar navbar-dark bg-dark sticky-top">
                  <div className="container">
                      <Link className="navbar-brand" to="/">
                          <img src={'images/logo.png'} alt width={120} height={50} className="d-inline-block align-text-top" />
                          
                      </Link>
                      <button type="button" class="btn btn-danger">Sign In</button>
                  </div>
              </nav>

              {/* The html below this line is for display purpose only*/}
              <div className="py-5 text-center text-white bg-dark bgimg">
                  <div className="container py-5">
                      <div className="row py-5">
                          <div className="mx-auto col-lg-10">
                              <h1 className="display-4 mb-4 fs-1 fw-bold">Unlimited movies, TV shows, and more </h1>
                              <p className="lead mb-5">Watch anywhere. Cancel anytime.Ready to watch? Enter your email to create or restart your membership.</p> 
                              <a href="#" className="btn btn-lg btn-outline-danger mx-1">Get Started</a>
                          </div>
                      </div>
                  </div>
              </div>
             
          </div>

    
    
    </>
  )
}

export default Top
