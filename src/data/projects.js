// TODO Add a couple lines about each project
import fox from "../assets/projects/foxcom.png";
import cmmsDashboard from "../assets/projects/CMMS.png";
import jeelMainWebsite from "../assets/projects/jeelSite.png";
import main_jeel1 from "../assets/projects/main_jeel1.webp";
import main_jeel2 from "../assets/projects/main_jeel2.webp";
import main_jeel3 from "../assets/projects/main_jeel3.webp";
import main_jeel4 from "../assets/projects/main_jeel4.webp";
import main_jeel5 from "../assets/projects/main_jeel5.webp";
import main_jeel6 from "../assets/projects/main_jeel6.webp";
import main_jeel7 from "../assets/projects/main_jeel7.webp";
import jeel1 from "../assets/projects/jeel1.webp";
import jeel2 from "../assets/projects/jeel2.webp";
import jeel3 from "../assets/projects/jeel3.webp";
import jeel4 from "../assets/projects/jeel4.webp";
import jeel5 from "../assets/projects/jeel5.webp";
import jeel6 from "../assets/projects/jeel6.webp";
import jeel7 from "../assets/projects/jeel7.webp";
import jeel8 from "../assets/projects/jeel8.webp";
import jeel9 from "../assets/projects/jeel9.webp";
import jeel10 from "../assets/projects/jeel10.webp";
import jeel11 from "../assets/projects/jeel11.webp";
import jeel12 from "../assets/projects/jeel12.webp";
// import jeel13 from "../assets/projects/jeel13.webp";
import jeelInventoryDashboard from "../assets/projects/jeelInventory.png";
import ldMainWebsite from "../assets/projects/landd.png";
import zibara from "../assets/projects/zibara.webp";
import pWeb from "../assets/projects/Primar-web.webp";
import pMark from "../assets/projects/Primar-mark.webp";

const data = [
  {
    title: "Jeel Inventory Management",
    subtitle: "A streamlined inventory tracking and management system.",
    image: [
      jeelInventoryDashboard,
      jeel1,
      jeel2,
      jeel3,
      jeel4,
      jeel5,
      jeel6,
      jeel7,
      jeel8,
      jeel9,
      jeel10,
      jeel11,
      jeel12,
    ],
    date: "2024-11-08",
    desc: "Manage inventory efficiently with 'Jeel Inventory,' a specialized system designed to simplify stock tracking and inventory operations. Built with React and Vite on the frontend, it provides a fast, responsive user experience. The backend is powered by MongoDB, capturing essential inventory details, such as stock levels, purchase orders, and supplier information. ExpressJS provides a secure and scalable API layer, facilitating data synchronization across all user interfaces. Jeel Inventory’s interface includes features like real-time stock updates, low-stock alerts, and intuitive product search and categorization. With Tailwind CSS for a clean, responsive design and Toast notifications for immediate feedback, Jeel Inventory is tailored to help businesses stay organized and responsive in their inventory management.",
    link: "https://jeel-inventory.vercel.app",
  },
  {
    title: "Jeel Main Website",
    subtitle: "A dynamic website for Jeel's brand and product showcase.",
    image: [
      jeelMainWebsite,
      main_jeel1,
      main_jeel2,
      main_jeel3,
      main_jeel4,
      main_jeel5,
      main_jeel6,
      main_jeel7,
    ],
    date: "2024-10-15",
    desc: "Discover Jeel through a visually engaging and informative main website, designed to represent the brand’s identity and showcase its products. Built with React and Vite for a fast, responsive experience, the Jeel website combines modern UI/UX design with rich content to engage visitors. MongoDB is used for storing product details, customer reviews, and contact information, allowing for seamless data management and updates. Tailwind CSS enables a sleek, mobile-friendly layout that adapts gracefully to various devices. Key features include an interactive product gallery, a blog section for updates, and a contact form. With React Router for intuitive navigation and animations to enhance user engagement, Jeel’s website presents an inviting digital front for customers and partners alike.",
    link: "https://jeel-teal.vercel.app",
  },
  {
    title: "L&D Main Website",
    subtitle:
      "A clean and professional site for Learning & Development resources.",
    image: ldMainWebsite,
    date: "2024-09-10",
    desc: "Explore the world of Learning & Development with L&D’s main website, a straightforward yet visually appealing platform created with HTML and CSS. Designed with a focus on clarity and user-friendliness, the site features structured content that showcases L&D’s resources, courses, and expert services. The site employs responsive design principles to ensure smooth navigation on all devices, and a well-organized layout that enhances accessibility for users. With a minimalist design, intuitive navigation, and sections that highlight testimonials, course catalogs, and contact information, the L&D website provides a welcoming, professional online presence for educational resources and development tools.",
    link: "https://landd-main.vercel.app",
  },
  {
    title: "L&D CMMS",
    subtitle: "A Computerized Maintenance Management System.",
    image: cmmsDashboard,
    date: "2024-08-12",
    desc: "Explore efficient asset management with 'L&D CMMS,' a comprehensive system designed to optimize maintenance workflows in engineering and manufacturing environments. The backend is powered by MongoDB for robust data storage, capturing intricate details of assets, work orders, and maintenance logs. With ExpressJS as the server framework, Primar CMMS ensures a secure and scalable backend infrastructure. The frontend, crafted using React and Vite, offers a highly responsive interface tailored for both desktop and mobile views. Key features include a detailed asset tracking dashboard, real-time notifications for maintenance schedules, and a role-based user access system. Using React Router for seamless navigation and Tailwind CSS for a clean design, Primar CMMS enables streamlined, effective maintenance management for modern engineering needs.",
    link: "https://cmms-alt.vercel.app",
  },

  {
    title: "Foxcom Synergy LTD",
    subtitle: "An oil and Gas industry servicing company",
    link: "https://foxcomsynergy.com",
    image: fox,
    date: "2024-06-28",
    desc: "The best delivering services to the oil and gas industry EPCI, Oil Spill Recovery and Environmental Control, as well as leasing of heavy Equipment, Manpower consultancy, Subsea Engineering not just for today but for Generations to come.",
  },
  {
    title: "Primar Market (Launched January 2024)",
    subtitle: "A delivery store.",
    link: "https://primar-market.vercel.app",
    image: pMark,
    date: "2023-12-11",
    desc: "Primar is a delivery technology company based in Nigeria, dedicated to bridging the gap between farmers, markets, and customers. We specialize in delivering farm-fresh products from local farmers and markets directly to customers in close proximity, ensuring that you have access to the freshest, healthiest, and most sustainably sourced produce right at your doorstep, all with unprecedented convenience.",
  },
  {
    title: "Primar Meals (in progress)",
    subtitle: "An online meal plan store.",
    link: "https://prima-web.vercel.app",
    image: pWeb,
    date: "2023-08-28",
    desc: "Immerse yourself in the world of Primar, a cutting-edge delivery store, meticulously crafted using React-JS and CSS. With a tech stack that includes a variety of essential tools, this project showcases my prowess in frontend development. From its sleek user interface to its intuitive user experience, Primar sets a new standard for online delivery platforms.",
  },
  {
    title: "Zibara",
    subtitle: "Shopping site",
    link: "https://zibara.web.app/",
    image: zibara,
    date: "2020-04-20",
    desc: "Explore a captivating shopping experience through my  first commisioned work, where Firebase and React converge to create an innovative online store. Witness the fusion of Firebase's dynamic backend and React's interactive frontend. From seamless user authentication to real-time cart updates, this project showcases the synergy of these technologies. Discover a responsive design, smooth checkout process, and an intuitive admin dashboard. With secure transactions and a user-centric interface, this project epitomizes the modern shopping journey.",
  },
];

export default data;
