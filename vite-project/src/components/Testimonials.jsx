import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.from("#clientsAnim", {
                y: 200,
                duration: 2,
                opacity: 0,
                delay: 0.2,
                scrollTrigger: {
                    trigger: "#clients",
                    scrub: 1,
                    start: "2400",
                    end: "2600",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#clients #clientsAnimCards", {
                y: 200,
                duration: 2,
                opacity: 0,
                delay: 0.2,
                scrollTrigger: {
                    trigger: "#clients",
                    scrub: 1,
                    start: "2500",
                    end: "2700",
                }
            })
        },
    )


    return (
        <section id="clients"
            className={`${styles.paddingY} ${styles.flexCenter} flex-col
        relative`}>

            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
            <div className="w-full flex justify-between 
            items-center md:flex-row flex-col mb-16 mb-6 z-[1]">
                <h1 id="clientsAnim" className={styles.heading2}>What people are <br className="sm:block hidden" />
                    saying about us</h1>

                <div className="w-full md:mt-0 mt-6 ">
                    <p id="clientsAnim" className={`${styles.paragraph} text-left max=-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>

                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}

            </div>
        </section>
    )
}

export default Testimonials