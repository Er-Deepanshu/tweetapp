import React, { useState, useContext, useEffect } from "react"
import CreateTweet from "../layout/CreateTweet"
import axios from "axios"
// import defaultUser from "../../assets/img/defaultUser.jpeg"
import StateContext from "../../StateContext"
import Tweet from "../layout/Tweet"
import DispatchContext from "../../DispatchContext"
import logo from "../../assets/img/twitter-avi-gender-balanced-figure.png"
function LandingUser() {
  const globalState = useContext(StateContext)
  const globalDispatch = useContext(DispatchContext)
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    async function fetchAllTweets() {
      try {
        // const response = await axios.get("http://localhost:8080/api/v1.0/tweets/all")
        const response = await axios.get("http://ec2-54-87-169-244.compute-1.amazonaws.com:8080/api/v1.0/tweets/all")

        setTweets(response.data)
        globalDispatch({ type: "sameTweetList" })
      } catch (e) {
        console.log(e.response.data)
      }
    }
    fetchAllTweets()
  }, [globalState.isTweetListUpdate])

  return (
    <>
      <div className="container gy-2">
        <div className="row">
          <div className="col-3" >
            <img className="mx-auto user-profile" src={logo} alt="User" />
                 <h1 className="h1Landing"> Hello! {globalState.user.username}</h1>
            <hr />
            <h1 className="h1Landing">
               Welcome to Tweetapp!
            </h1>
          </div>
          <div className="col-9">
            <h3 className="letsgetstarted">
              Let's Get Started</h3>
            <CreateTweet />
            <div className="">
              <h2>Explore new tweets!</h2>
              {tweets
                ? tweets.slice(0, 5).map(tweet => {
                    return <Tweet key={tweet.id} tweet={tweet} />
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingUser
