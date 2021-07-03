import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Brochure from "../Brochure.pdf";

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
    heading: "About Us",
    description: "Vote too already existing poll.",
    icon: <WorkIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 3,
    heading: "Why Recruit Us",
    description: "Vote too already existing poll.",
    icon: <WorkIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 4,
    heading: "For Companies",
    description: "View Responses to the polls created by you.",
    icon: <SchoolIcon className="tabIcon" />,
    route: "/",
    drop: [
      {
        id: 1,
        heading: "Brochure",
        onClick: () => {
          window.location.href = Brochure;
        },
      },
      {
        id: 2,
        heading: `Internship Announcement Form`,
        onClick: function () {
          window.location.href = "https://forms.gle/c8aXW35ay6L34Dro9";
        },
      },
    ],
  },
  {
    id: 5,
    heading: "Contact Us",
    description: "Login to create new polls or to submit a response.",
    route: "https://iiitr.ac.in/contact",
  },
];

export default BarItems;
