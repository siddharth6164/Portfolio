import frontend from '../assets/frontendicon.png';
import backend from '../assets/backendicon.png';
import tool from '../assets/toolicon.png';
import soft from '../assets/softskillicon.png';
export const SKILLS=[
    {
        title:"Frontend",
        icon:frontend,
        skills:[
            {skill:"HTML",percentage:"80%"},
            {skill:"CSS",percentage:"90%"},
            {skill:"JavaScript",percentage:"75%"},
            {skill:"React.JS",percentage:"80%"},
        ]
    },
    {
        title:"Bankend",
        icon:backend,
        skills:[
            {skill:"Node.js",percentage:"70%"},
            {skill:"Express.js",percentage:"90%"},
            {skill:"Java",percentage:"75%"},
        ]
    },
    {
        title:"Tools",
        icon:tool,
        skills:[
            {skill:"Git & GitHub",percentage:"85%"},
            {skill:"Visual Studio Code",percentage:"75%"},
            {skill:"Webpack",percentage:"60%"},
            {skill:"IDEA",percentage:"70%"},
        ]
    },
    {
        title:"Soft Skills",
        icon:soft,
        skills:[
            {skill:"Problem-solving",percentage:"80%"},
            {skill:"OOPS",percentage:"85%"},
            {skill:"DSA",percentage:"75%"},
            {skill:"Spring King",percentage:"100%"},
        ]
    },
]

export const WORK_EXPERIENCE =[
    {
        title:"Assistant Systems Engineer at Tata Consultancy Services",
        date:"June 2023 - August 2024",
        responsibilities:[
            "Contributed to the development of a portal, using ReactJs for the frontend & integrating with backend API's.",
            "Developed and implemented React components using React Router to enhance navigation UI.",
            "Collaborated with a cross-functional team to design and implement a Java-based web application that automated key business processes.",
            "Reduced manual tasks and improved workflow efficiency, resulting in a 10% increase in overall operational efficiency by streamlining data entry and processing tasks. " 
        ],
    },
    {
        title:"Software Developer at SK Info Tech",
        date:"April 2023 -June 2023",
        responsibilities:[
            "Assisted in the development of a new e-commerce platform, contibuting to the implementation of frontend features using Reactjs.",
            "Conducted performance optimization tasks, resulting in a 15% impovement in page load time.",
            " Developed and maintained client websites, ensuring hihgt-quality standards and timely project delivery.",
            "Used image processing and ChatGPT to extract data from bills and fill data in JSON format."
        ]
    }
]