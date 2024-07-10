import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeatureCard = ({ icon, title, content, index }) => {
    return (
        <div id="card" className={`flex flex-row p-6 rounded-[20px] 
    ${index !== features.lenth - 1 ? "mb-6" : "mb-0"} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt="icon" className="w-[50%] h-[50%] 
            object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div>
    )
}




const Buisness = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(
        () => {
            gsap.from("#heading", {
                y: 200,
                duration: 2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#heading",
                    scrub: 1,
                    start: "500",
                    end: "600",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#textanim", {
                y: 400,
                duration: 2,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#features",
                    scrub: 1,
                    start: "500",
                    end: "700",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#card", {
                y: 400,
                duration: 2,
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#features",
                    scrub: 1,
                    start: "500",
                    end: "700",
                }
            })
        },
    )
    useGSAP(
        () => {
            gsap.from("#trig #kopce", {
                y: 400,
                duration: 2,
                opacity: 0,
                delay: 0.4,
                scrollTrigger: {
                    trigger: "#features",
                    scrub: 1,
                    start: "500",
                    end: "700",
                }
            })
        },
    )


    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo} id="trig">
                <h2 id="heading" className={styles.heading2}>You do the business,<br className="sm:block hidden" />
                    we’ll handle the money.</h2>
                <p id="textanim" className={`${styles.paragraph} max-w[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.</p>
                <Button id={"kopce"} styles="mt-10" />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}

            </div>
        </section>
    )
}

export default Buisness