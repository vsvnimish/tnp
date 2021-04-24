import CreateIcon from '@material-ui/icons/Create';
import VoteIcon from '@material-ui/icons/HowToVote';
import ResponseIcon from '@material-ui/icons/Forum';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const cards= [
    {
        id: 0,
        heading: "Home",
        description: "Create a polling form.",
        icon: <CreateIcon />,
        route: "/",
    },
    {
        id: 1,
        heading: "Why Recruit Us",
        description: "Vote too already existing poll.",
        icon: <VoteIcon/>,
        route: "/WhyRecruitUs",
    },
    {
        id: 2,
        heading: "Department",
        description: "View Responses to the polls created by you.",
        icon: <ResponseIcon/>,
        route: "/Department",
    },{
        id: 3,
        heading: "Faculties",
        description: "Login to create new polls or to submit a response.",
        icon: <ExitToAppIcon/>,
        route: "/Faculties",
    }
]


export default cards;