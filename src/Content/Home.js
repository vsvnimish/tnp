import directordeskImage from "../images/directorsdesk.jpg";
import tpoImage from "../images/tpoImage.webp";

const AboutIIITR = `The Indian Institute of Information Technology, Raichur(IIITR) was established in 2019, as a centre of academic excellence in the field of Computer Science and Information Technology. Currently being mentored by the Indian Institute of Technology, Hyderabad(IITH), IIITR is an institute of national importance, formed under the Public Private Partnership model, with contributions from MHRD, Government of India and the Government of Karnataka.
With its highly esteemed & able faculty, modern curriculum and a pioneering batch of bright minded individuals, IIITR is an abode of creativity and innovation, ready to show the world what it is capable of.`;

const Mission = `Budding under one of the most sought after institutes in the country, IIITR has had the philosophy of bringing positive changes in the lives of its students, and thereby, the society at large, from its very inception. The mission has always been to cultivate ingenuity, originality and innovation in the students, who are the future of this country.`;

const Thoughts = [
  {
    id: 1,
    isLeftAlign: true,
    haveLogo: true,
    writer: "BS Murty",
    heading: "From Director's Desk",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imgSrc: directordeskImage,
    altText: "Director",
  },
  {
    id: 2,
    isLeftAlign: false,
    haveLogo: true,
    writer: "Sadhna Jha",
    heading: "Message From TPO",
    content: `Being mentored by IITH, IIITR has adopted the innovative
    fractal academics system, which warrants continuous
    evaluation. This ensures the students have a deeper
    understanding of the core subjects. Moreover, the highly
    flexible curriculum forged by the esteemed faculty of IITH and
    IIITR exuberates innovation and inventiveness. With core
    subjects being incorporated from the first semester itself, the
    students are able to finish their courses quite early and focus
    on developing projects & industry relevant skills.`,
    imgSrc: tpoImage,
    altText: "TPO",
  },
];

const WhyUs = [
  {
    id: 1,
    heading: "The Prodigious Curriculum and Academic System",
    content: ` Being mentored by IITH, IIITR has adopted the innovative
                    fractal academics system, which warrants continuous
                    evaluation. This ensures the students have a deeper
                    understanding of the core subjects. Moreover, the highly
                    flexible curriculum forged by the esteemed faculty of IITH and
                    IIITR exuberates innovation and inventiveness. With core
                    subjects being incorporated from the first semester itself, the
                    students are able to finish their courses quite early and focus
                    on developing projects & industry relevant skills.`,
  },
  {
    id: 2,
    heading: "The coders, thinkers and tinkerers",
    content: `The student family of IIITR consists of competitive coders, 
                        web development enthusiasts, eager learners and diligent scholars.
                        The students represent the creamy layer of talent in the country.
                        They have been actively involved in various technical and cultural
                        club activities of IIT Hyderabad. At the same time, the students
                        have founded and set up numerous clubs of their own to further
                        facilitate collaborative learning and introspective growth. (The
                        students have been exploring various industry relevant skills &
                        technologies like Python, C++, Java, Javascript, flutter, Go, flask,
                        NoSQL, SQL, Django, Node, Vue, React, Docker etc.)`,
  },
];

export { AboutIIITR, Mission, Thoughts, WhyUs };
