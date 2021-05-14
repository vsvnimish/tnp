import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const BarItems = [
  {
    id: 1,
    heading: "Home",
    description: " ",
    icon: <WorkIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 2,
    heading: "Why Recruit Us",
    description: "Vote too already existing poll.",
    icon: <WorkIcon className="tabIcon" />,
    route: "/WhyRecruitUs",
  },
  {
    id: 3,
    heading: "Programs at IIITR",
    description: "View Responses to the polls created by you.",
    icon: <SchoolIcon className="tabIcon" />,
    route: "/Programs",
  },
  {
    id: 4,
    heading: "Contact",
    description: "Login to create new polls or to submit a response.",
    route: "/contact",
  },
];

export default BarItems;
