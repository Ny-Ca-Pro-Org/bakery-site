import React from 'react'
import "./AboutChef.css"
import chef from "../../assets/chef.jpg"

const AboutChef = () => {
  return (
    <div className='chef'>
        <div className="left">
            <img src={chef} alt="chef" />
        </div>
        <div className="right">
            <h1>About The Chef</h1>
            <p>Hello My Name Is Nell Nelly. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestias atque unde et in explicabo iusto nihil beatae dolorem architecto ab, dignissimos nesciunt. Accusamus sequi iste, amet cupiditate, ea perferendis id asperiores ex ipsam ad culpa! Cum quibusdam nesciunt eligendi error. Fugiat, praesentium. Ratione soluta qui veniam repellat beatae laborum?</p>
            <a href=""><button>Learn More About Nelly</button></a>
        </div>
    </div>
  )
}

export default AboutChef