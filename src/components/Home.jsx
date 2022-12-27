import React from 'react'
import vg from "../Assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import '../style/Home.scss';

function Home() {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>CodeStar</h1>
                <p>Solution to all your problem</p>
            </main>
        </div>

        <div className='home2'>
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    we are your one and only solution to the tech problem you face everyday.
                    we are leading tech company whose aim is to increase the problem solving
                    ability in the children.
                </p>
            </div>
        </div>

        <div className='home3' id='about'>
            <div>
                <h1>who we are ?</h1>
                <p>lorem iasdnkjfdsond nkfs nksn nknsfknos ksnkd jeddkds iuerir niasl indfn knasdn; asn;dsn kdjnidsi
                asdnkfnsk nkdk sfdnkke nkdfkn srknkr kirknf nkfnkf nkndknkd nkdsnnfds nkdsnfknkfdsnkdsfnkn knkdfnk
                knfknk nkdnfk nkdfnk knkfsd nkfnk nkfndk nknfk nkndsk nkndfskn nkdfnkn dfsnknkdfs nkdnfk 
                kjndksfnk knksdfnk nkfdsnk nksdnkn nksnk nkfdsk kfdnfds nkndskn nfsdnk fdsknfdsk
                nkdnkfdsnk nkdfsk </p>
            </div>
        </div>

        <div className='home4' id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay : "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay : "0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay : "0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay : "1s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>

    </>
  )
}

export default Home
