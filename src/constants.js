import ARTICLE1 from "./assets/ARTICLE1.png"
import ARTICLE2 from "./assets/ARTICLE2.jpeg"
import Rula from "./assets/Rula.png"
import Act from "./assets/Act.png"
import HyperLocal from "./assets/HyperLocal.png"

const paths = [
    { to: "/", linkText: "HOME" },
    { to: "/caseStudies", linkText: "CASE STUDIES" },
    { to: "/articles", linkText: "ARTICLES" },
    { to: "/works", linkText: "WORKS" },
]

const articles = [
    { id: 1, link: "https://www.linkedin.com/posts/shreyadwivedi488_artandproductmusings-productmanagement-ycombinator-activity-7138473876547670017-ew8f/?utm_source=share&utm_medium=member_android", title: "Y Comninator", imgSrc: ARTICLE1 },
    { id: 2, link: "https://www.linkedin.com/posts/shreyadwivedi488_artandproductmusings-productmanagement-activity-7137738843545337857-ljz-/?utm_source=share&utm_medium=member_android", title: "Bullshit Jobs", imgSrc: ARTICLE2 },
]

const caseStudies = [
    {
        id: 1,
        title: "Rula",
        question: "Develop and execute a launch plan for entering the Latin American market, focusing on problem discovery within transportation and cab ecosystems, identifying key pain points, and implementing solutions for testing in a chosen country.",
        prd: "https://drive.google.com/file/d/1RtyCajXiwDuCntK0AeH546Z9MOjwQ4YO/view?usp=sharing", presentation: "https://drive.google.com/file/d/15fGFz8c121uhGCOYO8fJVJngWl7pePHu/view?usp=sharing", icon: Rula
    },
    {
        id: 2,
        title: "ACT",
        question: "ACT (Atria Convergence Technologies Ltd.), based in Bangalore, aims to be India's leading in-home entertainment and broadband provider. Currently the 3rd largest wired broadband ISP, with a customer referral program, ACT seeks to enhance and optimize its referral strategy for sustained growth.",
        prd: "https://docs.google.com/document/d/1xyKdr0LxbFvrlpLW8xEWbhTBau-__M93/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true", presentation: "https://drive.google.com/file/d/1pm9QCCpsOSZ5sE3o1ZC_qnP2e93z9tYw/view?usp=sharing",
        icon: Act
    },
    {
        id: 3,
        title: "Hyper Local",
        question: "As a Product Manager for an Indian streaming service targeting Tier-2 and Tier-3 markets, the task is to develop a high-retention model. This entails defining user activation metrics, creating incentives for content creators, addressing distribution challenges, ensuring creator retention and ROI, and selecting Net Promoter Score (NPS) as the primary success metric.",
        prd: "https://docs.google.com/document/d/1_7axkzizLFHihL-KfXPgna0bFxS8FDyc/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true", presentation: "https://docs.google.com/presentation/d/1yRCDbKCfFdH4uxh1WNLgme6ASgnq5NsO/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true", icon: HyperLocal
    },
    {
        id: 4,
        title: "",
        question: "", prd: "", presentation: "", icon: ""
    },
    {
        id: 5,
        title: "",
        question: "", prd: "", presentation: "", icon: ""
    },
    {
        id: 6,
        title: "",
        question: "", prd: "", presentation: "", icon: ""
    },
]

export { paths, articles, caseStudies }