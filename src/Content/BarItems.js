import uni from "../images/Icons/uniIcon.png";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';


const BarItems = [
    {
        id: 0,
        heading: <i className="fa fa-lg navIcon fa-home" aria-hidden="true"></i>,
        description: "Create a polling form.",
        icon: <img className="tabIcon" src={uni} alt='' />,
        route: "/",
    },
    {
        id: 1,
        heading: "Why Recruit Us",
        description: "Vote too already existing poll.",
        icon: <WorkIcon className="tabIcon" />,
        route: "/WhyRecruitUs",
    },
    {
        id: 2,
        heading: "Programs at IIITR",
        description: "View Responses to the polls created by you.",
        icon: <SchoolIcon className="tabIcon" />,
        route: "/Programs",
        // drop: [
        //     {
        //         id: 0,
        //         heading: "Department of Computer Science and Engineering"
        //     },
        //     {
        //         id: 1,
        //         heading: "Department of Mathematics"
        //     },
        //     {
        //         id: 2,
        //         heading: "Department of Liberal and Creative Arts"
        //     }
        // ]
    },{
        id: 3,
        heading: "Club Activities",
        description: "Login to create new polls or to submit a response.",
        route: "/Clubs",
        // drop: [
        //     {
        //         id: 0,
        //         heading: "CodeSoc"
        //     },
        //     {
        //         id: 1,
        //         heading: "ElectroGeeks"
        //     },
        //     {
        //         id: 2,
        //         heading: "Xposure"
        //     },
        //     {
        //         id: 3,
        //         heading: "Finesse"
        //     },
        //     {
        //         id: 4,
        //         heading: "NSO"
        //     },
        //     {
        //         id: 5,
        //         heading: "NSS"
        //     },
        //     {
        //         id: 6,
        //         heading: "Ek Bharat Shreshtha Bharat"
        //     }
        // ]
    }
]


export default BarItems; 
