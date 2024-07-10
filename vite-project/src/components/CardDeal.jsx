import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
function CardDeal() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.from("#leftSideCarDeals", {
                y: 200,
                duration: 2,
                opacity: 0,
                delay: 0.2,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#cardDeals",
                    scrub: 1,

                    start: "1800",
                    end: "2000",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#rightSideCarDeals", {
                y: 200,
                duration: 2,
                opacity: 0,

                scrollTrigger: {
                    trigger: "#cardDeals",
                    scrub: 1,

                    start: "1800",
                    end: "2000",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#cardDeals #kopce", {
                y: 200,
                duration: 2,
                opacity: 0,
                delay: 0.3,
                scrollTrigger: {
                    trigger: "#cardDeals",
                    scrub: 1,

                    start: "1900",
                    end: "2100",
                }
            })
        },
    )
    return (
        <section id="cardDeals" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 id="leftSideCarDeals" className={styles.heading2}>
                    Find a better card deal <br className="sm:block hidden" />
                    in few easy steps.
                </h2>
                <p id="leftSideCarDeals" className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç
                    Aliquet ultrices ac, ametau.</p>
                <Button styles={"mt-10"} />
            </div>
            <div id="rightSideCarDeals" className={layout.sectionImg}>
                <img src={card} alt=" card" className="w-[100%] h-[100%]" />

            </div>
        </section>
    )
}

export default CardDeal