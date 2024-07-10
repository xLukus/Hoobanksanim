import React from 'react'
import { apple, bill, google } from "../assets"
import styles, { layout } from '../style'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Billing = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.from("#slikaPayment", {
                y: 200,
                duration: 2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#product",
                    scrub: 1,

                    start: "1200",
                    end: "1400",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#headingProduct", {
                y: 200,
                duration: 2,
                opacity: 0,
                delay: 0.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#product",
                    scrub: 1,

                    start: "1200",
                    end: "1400",
                }
            })
        },
    )

    return (
        <section id='product'
            className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img id='slikaPayment' src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
            </div>

            <div className={layout.sectionInfo}>
                <h2 id='headingProduct' className={styles.heading2}>Easily control your <br className='sm:block hidden' />
                    billing & invoicing.</h2>
                <p id='headingProduct' className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci
                    rhoncus aliporttitor integer platea placerat.</p>
                <div id='headingProduct' className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contained mr-5 cursour-pointer' />
                    <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contained  cursour-pointer' />

                </div>
            </div>
        </section>
    )
}





export default Billing