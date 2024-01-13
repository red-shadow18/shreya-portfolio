import ARTICLE1 from "./assets/ARTICLE1.png"
import ARTICLE2 from "./assets/ARTICLE2.jpeg"
import Rula from "./assets/Rula.png"
import Act from "./assets/Act.png"
import HyperLocal from "./assets/HyperLocal.png"
import EmpowerFlo from "./assets/EmpowerFlo.png"
import Gamification from "./assets/Gamification.png"
import Cohort from "./assets/Cohort.jpeg"

const paths = [
    { to: "/", linkText: "HOME" },
    { to: "/caseStudies", linkText: "CASE STUDIES" },
    { to: "/articles", linkText: "ARTICLES" },
    { to: "/work", linkText: "WORK" },
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
        prd: "https://docs.google.com/document/d/1xyKdr0LxbFvrlpLW8xEWbhTBau-__M93/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true",
        presentation: "https://drive.google.com/file/d/1pm9QCCpsOSZ5sE3o1ZC_qnP2e93z9tYw/view?usp=sharing",
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
        title: "Empower Flo",
        question: "Identify menstrual wellness needs using an impact vs satisfaction framework, emphasizing women's issues and disorder identification. Analyze competitors, create a product template matrix to understand gaps, solutions, and user satisfaction. Develop a tailored product interface with a flowchart, wireframe, and interactive InVision prototype.",
        prd: "https://docs.google.com/document/d/1aNJyzT5GW6ADIg_iGHS0sQdDd21XrJfd/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true",
        presentation: "https://docs.google.com/presentation/d/1UGLUf8y-tRM-rrnFQERk4qg0gHR_rhBv/edit?usp=sharing&ouid=117707791781182360955&rtpof=true&sd=true", icon: EmpowerFlo
    },
    {
        id: 5,
        title: "Gamification",
        question: "Design a comprehensive product management game for aspiring PMs, emphasizing idea generation, execution, and decision-making skills. Each level, progressively challenging, requires 80% completion to advance. Establish a scoring system for role readiness. Research pain points in current teaching methods to determine game focus—whether more on practice or theory. Propose game levels, emphasizing structured learning. Develop a wireframe outlining the initial flow, guiding players through theory and diverse question types.",
        prd: "https://drive.google.com/file/d/1toptuVPG4BoX1NuhsRDUv5sI6VCQ_SV3/view?usp=sharing",
        icon: Gamification
    },
    {
        id: 6,
        title: "Cohort classes",
        question: "Ed-tech confronts a challenge in providing personalized attention to large cohorts, affecting student satisfaction, retention, and increasing customer acquisition costs. As a PM at UpGrad or Eruditus tasked with managing a 500+ student cohort, the objective is to boost retention and completion rates. The approach involves identifying pain points, devising a lateral view for a sustainable solution, addressing relevant assumptions, and assessing if there's a better cohort structure. The ultimate goal is to balance attention and scale, ensuring growth and impact for the organization while delivering an exceptional learning experience for students.",
        prd: "https://drive.google.com/file/d/11-iHelziK-H-f2HfjuvMJHXDAQINUoyo/view?usp=sharing",
        icon: Cohort
    },
]

export { paths, articles, caseStudies }