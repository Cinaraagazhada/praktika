import React from 'react'
import homeStyle from './home.module.css'

function Home() {
    return (
        <>
            <div className={homeStyle.home}>
                <div className={homeStyle.navbar}>
                    <ul>
                        <li> BrandName </li>
                    </ul>
                    <ul>
                        <li> Home </li>
                        <li> Product </li>
                        <li> Pricing </li>
                        <li> Contact </li>
                    </ul>
                    <ul>
                        <li>LOGIN</li>
                        <li>Join Us</li>


                    </ul>

                </div>
                <div className={homeStyle.paragrph}>
                    <p>For Better Future</p>
                    <h2>25K+ STUDENTS TRUST US</h2>
                    <p>Find the right instructor for you from <br /> over 10,000 teachers</p>
                    <div>
                        <button className={homeStyle.rigth_btn}>Get Quote Now</button>
                        <button className={homeStyle.left_btn}>Learn More</button>
                    </div>
                </div>

            </div>
            <div className={homeStyle.education}>
                <div className={homeStyle.advice}>
                    <p>Practice Advice</p>
                    <h1>Get Quality Education</h1>
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Expedita, iusto?</h5>
                </div>
            </div>






        </>
    )
}

export default Home