// Skills Section Logo's
import javaLogo from './assets/tech_logo/java.png';
import DSALogo from './assets/tech_logo/DSA.jpg';
import OOPLogo from './assets/tech_logo/OOP.jpg';
import JDBCLogo from './assets/tech_logo/JDBC.png';
import swingLogo from './assets/tech_logo/swing.png';
import promptLogo from './assets/tech_logo/prompt.jpeg';
import excelLogo from './assets/tech_logo/excel.png';
import powerbiLogo from './assets/tech_logo/powerbi.png';
import tableauLogo from './assets/tech_logo/tableau.png';
import processLogo from './assets/tech_logo/process.png';
import visualLogo from './assets/tech_logo/visual.png';
import rlangLogo from './assets/tech_logo/rlang.jpg';
import jupiterLogo from './assets/tech_logo/jupiter.png';
import collabLogo from './assets/tech_logo/collab.png';
import idleLogo from './assets/tech_logo/idle.png';
import ideaLogo from './assets/tech_logo/idea.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';

import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import lpuLogo from './assets/education_logo/lpu.png';
import jpsLogo from './assets/education_logo/jps.gif';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import bankLogo from './assets/work_logo/bank.jpg';
import sortLogo from './assets/work_logo/sort.png';
import dataLogo from './assets/work_logo/data.png';
import tableuLogo from './assets/work_logo/tableu.webp';
import biLogo from './assets/work_logo/bi.png';
import webverLogo from './assets/work_logo/web_dig.png';
import excelfLogo from './assets/work_logo/excelf.jpg';
import heartDiseaseLogo from './assets/work_logo/heartDisease.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import feedLogo from './assets/work_logo/feedback.png';
import FullStackLogo from './assets/work_logo/VingoFood.png';
import MovieReLogo from './assets/work_logo/MovieRec.png';

// Certificate Section Logo's
import googleDataAnalyticsLogo from './assets/certificate_logo/Google Advanced Data Analytics.png';
import microsoftPowerBILogo from './assets/certificate_logo/Microsoft Power BI Data Analyst.png';
import oracleDataScienceLogo from './assets/certificate_logo/Oracle Data Science.png';
import oracleGenerativeAILogo from './assets/certificate_logo/Oracle Genrative AI.png';
import cloudComputingLogo from './assets/certificate_logo/Cloud Computing.png';


export const SkillsInfo = [
  {
    title: 'Software Developer Skills',
    skills: [
       { name: 'Java', logo: javaLogo },
      { name: 'DSA', logo: DSALogo },
      { name: 'OOP', logo: OOPLogo },
      { name: 'JDBC', logo: JDBCLogo },
      { name: 'Java Swing', logo: swingLogo },
      { name: 'Prompt Engineering', logo: promptLogo },
    ],
  },
  {
    title: 'Data Analytics Skills',
    skills: [
      { name: 'Excel', logo: excelLogo },
      { name: 'Power BI', logo: powerbiLogo },
      { name: 'Tableau', logo: tableauLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Data Processing', logo: processLogo },
      { name: 'Data Visualization & Reporting', logo: visualLogo },
      { name: 'Data Science Toolbox', logo: pythonLogo },
      { name: 'Machine Learning', logo: rlangLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
       { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'SQL', logo: mysqlLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Jupyter Notebook', logo: jupiterLogo },
      { name: 'Google Colab', logo: collabLogo },
      { name: 'IDLE', logo: idleLogo },
      { name: 'IntelliJ IDEA', logo: ideaLogo },
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Lovely Professional University,Phagwara",
      date: "July 2023 - July 2027",
      grade: "8.50 CGPA",
      desc: "Pursuing B.Tech in Computer Science and Engineering at Lovely Professional University (2023–2027). Gained strong foundation in programming, DSA, OOP, DBMS, Web Development, and Software Engineering through coursework, projects, and workshops, enhancing technical expertise and problem-solving skills.",
      degree: "Bachelor of Technology (B.Tech)",
    },
    {
      id: 1,
      img: jpsLogo,
      school: "S.C.L.L.H.R.Jain Public School,Khanna",
      date: "April 2022 - March 2023",
      grade: "89.6%",
      desc: "I completed my class 12 education from S.C.L.L.H.R.Jain Public School,Khanna, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM). ",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: jpsLogo,
      school: "S.C.L.L.H.R.Jain Public School,Khanna",
      date: "April 2020 - March 2021",
      grade: "91.2%",
      desc: "I completed my class 10 education from S.C.L.L.H.R.Jain Public School,Khanna, under the CBSE board, where I studied Science.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Full-Stack Project: Vingo Food Delivery Platform",
      description:
        "I developed a comprehensive food delivery platform that connects customers with local restaurants and delivery personnel, featuring real-time order tracking and secure payment processing. The system processes multi-vendor orders with role-based access control, supporting restaurants, delivery boys, and customers with distinct dashboards and functionalities.The application implements a multi-layered architecture with React frontend, Node.js backend, and MongoDB database, utilizing Socket.IO for real-time delivery tracking and geolocation services. It features sophisticated authentication using JWT tokens, Google OAuth 2.0, and OTP-based email verification, ensuring secure user access across all platforms.I designed an intelligent order management system with Razorpay payment gateway integration, supporting both cash-on-delivery and online payments. The platform includes real-time location tracking using Leaflet maps, automated delivery assignments, and comprehensive order status management from placement to delivery completion.The system features advanced user interfaces with responsive design using Tailwind CSS, Redux state management for complex data flow, and component-based architecture for maintainability. It includes image management with Cloudinary, email notifications via Nodemailer, and automated deployment pipelines on Vercel (frontend) and Render (backend).This demonstrates practical implementation of modern full-stack development patterns, from database design and API architecture to real-time communication and payment integration, transforming food ordering requirements into a scalable, production-ready delivery platform.",
      image: FullStackLogo,
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO", "Firebase", "Razorpay", "Tailwind CSS", "JWT", "OAuth", "Nodemailer"],
      github: "https://github.com/AjitMaddheshiya/VingoFoodDeliveryApp",
      webapp: "https://vingo-food-delivery-app-nine.vercel.app/signin",
    },
    {
      id: 1,
      title: "Movie Recommendation System Using ML",
      description:
        "I developed an Intelligent Movie Recommendation System that analyzes and suggests movies based on content similarity using advanced machine learning techniques. The system processes a comprehensive TMDB dataset containing 5,000+ movies, performing sophisticated data preprocessing including JSON parsing, feature extraction, and text tokenization to build meaningful movie representations.The application implements a content-based filtering approach using TF-IDF vectorization with weighted feature engineering, giving higher importance to genres, keywords, cast, and crew information. It utilizes cosine similarity algorithms to calculate movie similarities and K-means clustering for unsupervised movie grouping, enabling intelligent recommendation patterns.I designed an intelligent user interface with smart input validation that provides helpful suggestions when users enter incorrect movie names, ensuring a seamless user experience. The system generates personalized recommendations by displaying the top 10 most similar movies based on genre patterns, cast preferences, and content characteristics.The project includes comprehensive data visualization capabilities with multiple interactive charts including genre distribution analysis, keyword frequency patterns, correlation heatmaps, and 3D PCA clusters. These visualizations help identify movie trends, genre preferences, and similarity patterns within the dataset.This demonstrates practical implementation of modern machine learning pipelines, from data preprocessing and feature engineering to model deployment and visualization, transforming raw movie data into meaningful entertainment recommendations and insights.",
      image: MovieReLogo,
      tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "TF-IDF", "Cosine Similarity", "K-Means", "PCA"],
      github: "https://github.com/AjitMaddheshiya/MovieRecommendSystem",
      webapp: "https://github.com/AjitMaddheshiya/MovieRecommendSystem",
    },
    {
      id: 2,
      title: "Driver Feedback & Sentiment Dashboard",
      description:
        "I developed a Driver Feedback & Sentiment Dashboard to collect and analyze employee feedback for drivers and trips through an interactive web interface. The system allows users to submit structured feedback using star ratings, quick feedback tags, and optional comments, ensuring an intuitive and efficient feedback process.The application also includes an admin analytics dashboard that visualizes driver sentiment data through charts, sentiment distribution indicators, and performance insights. This enables administrators to monitor feedback trends, evaluate driver performance, and identify potential service issues in real time.I designed a responsive and user-friendly interface that supports multiple feedback entities such as drivers, trips, and service attributes. Additionally, the system provides features like secure login authentication, configurable feedback modules, and dynamic dashboards to ensure flexible usage and clear data visualization.The project demonstrates practical implementation of modern UI design, sentiment-based analytics, and interactive data visualization, helping transform raw feedback into meaningful operational insights.",
      image: feedLogo,
      tags: ["CSS", "HTML", "JavaScript","Chart.js","Vercel Deployment"],
      github: "https://github.com/AjitMaddheshiya/MoveInSync_Driver_Feedback_-_Sentiment_Dashboard",
      webapp: "https://moveinsync-driver-feedback-sentim.vercel.app/login",
    },
    {
      id: 3,
      title: "Banking Mangament System",
      description:
        "I developed a Banking Management System using Java and JDBC to efficiently handle customer accounts, transactions, and balance inquiries. The system included backend functionality for secure deposit, withdrawal, and fund transfer operations, ensuring accuracy and reliability. I also designed an intuitive user interface with Java Swing, providing smooth navigation between account management, transaction history, and customer service features. Additionally, I implemented secure modules for user registration, login authentication, and new account creation to maintain data integrity and safe access.",
      image: bankLogo,
      tags: ["Java", "MySQl", "JDBC"],
      github: "https://github.com/AjitMaddheshiya/Banking-Mangament-System-JDBC-JAVA-MySQL",
      webapp: "https://github.com/AjitMaddheshiya/Banking-Mangament-System-JDBC-JAVA-MySQL",
    },
    {
      id: 4,
      title: "Sorting Algorithm Visualizer",
      description:
        "I developed a Sorting Algorithm Visualizer application using Java to demonstrate the step-by-step execution of various sorting techniques, including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort. The project featured an interactive GUI built with Java Swing to display real-time animations, making it easier to understand the performance and behavior of different algorithms. By leveraging data structures and algorithmic concepts, I implemented and optimized sorting techniques, enabling users to visually compare their efficiency and complexity. The application also included user-friendly controls to select algorithms, adjust array size and speed, and reset the visualizer, offering a hands-on learning experience.",
      image: sortLogo,
      tags: ["Java", "Java Swing", "Data Structure", "Sorting Algorithm", " Threading" ,"Custom Graphics Programming"],
      github: "https://github.com/AjitMaddheshiya/Sorting-Algorithm-Visualizer-Using-GUI-Java-DSA-Java-Swing-",
      webapp: "https://github.com/AjitMaddheshiya/Sorting-Algorithm-Visualizer-Using-GUI-Java-DSA-Java-Swing-",
    },
    {
      id: 5,
      title: "Quarterly Retail Sales Tax Data Analysis",
      description:
        "I analyzed quarterly retail sales and tax data using Python to uncover key trends, seasonal variations, and category-wise performance across different regions. Using Pandas and NumPy, I cleaned, preprocessed, and aggregated large datasets to generate accurate insights and statistical summaries. To visualize the findings, I leveraged Matplotlib and Seaborn to create bar charts, line graphs, and heatmaps that effectively represented sales growth, tax revenue, and category comparisons. Additionally, I generated quarterly comparison reports to support decision-making for retail strategies, tax planning, and identifying high-performing business segments.",
      image: dataLogo,
      tags: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/AjitMaddheshiya/Quarterly-Retail-Sales-Tax-Data-Analysis-Python-Numpy-Pandas-Seaborn-Matlpotlib-etc-",
      webapp: "https://github.com/AjitMaddheshiya/Quarterly-Retail-Sales-Tax-Data-Analysis-Python-Numpy-Pandas-Seaborn-Matlpotlib-etc-",
    },
    {
      id: 6,
      title: "Product Sales Analysis and Visualization ",
      description:
        "I designed and developed an interactive sales dashboard in Power BI using a multi-table relational model to provide a comprehensive view of global product sales. The dashboard included key KPIs such as Total Sales, Profit Margin, and Top-Selling Products, with DAX formulas enabling dynamic calculations like year-wise quantity sold, product category breakdown, and monthly sales goals. To deliver deep business insights, I integrated various data visualizations including bar charts, pie charts, maps, and slicers for filtering by year, city, product line, and employee. Additionally, I leveraged advanced Power BI features such as calculated columns, relationships, tooltips, and filters to support drill-down analysis and visually track performance trends across regions, years, and product categories.",
      image: biLogo,
      tags: ["Power BI"],
      github: "https://github.com/AjitMaddheshiya/Product-Sales-Analysis-and-Visualization-Power-BI",
      webapp: "https://github.com/AjitMaddheshiya/Product-Sales-Analysis-and-Visualization-Power-BI",
    },
    {
      id: 7,
      title: "Super Store Sales Dataset",
      description:
        "I designed an interactive sales dashboard in Tableau using multiple datasets (Orders, Returns, and Managers) to track KPIs such as sales, profit, and category-wise performance, with segmented views by Region and Segment (Consumer, Corporate, Home Office). The dashboard featured geospatial visualizations with map charts to display sales across U.S. cities and included dynamic filters and drill-down actions for highlighting specific locations and categories. I implemented diverse chart types such as bar charts, scatter plots, and pie charts to compare Sales vs Profit and provide category-wise breakdowns, supported by calculated fields and parameter controls for deeper analysis. Additionally, I prepared and cleaned raw Excel data (2015–2017), ensuring consistency through joins, data type adjustments, and field customizations, which enabled reliable and insightful visual storytelling.",
      image: tableuLogo,
      tags: [" Tableau Public"],
      github: "https://github.com/AjitMaddheshiya/Super-Store-sales-Dataset-Tableau-Public",
      webapp: "https://github.com/AjitMaddheshiya/Super-Store-sales-Dataset-Tableau-Public",
    },
    {
      id: 8,
      title: "Coffee Shop Sales Dashboard",
      description:
        "I utilized Excel Power Pivot to manage relationships between data fields and perform complex calculations on large datasets efficiently. Pivot Tables were applied to summarize, filter, and aggregate key metrics such as total revenue, units sold, and profit across regions, item types, and sales channels. To enhance understanding, I created charts and graphs that visualized sales trends, geographical performance, product demand, and profit distribution in an intuitive way. Additionally, I performed data cleaning to ensure accuracy and consistency by handling missing values, correcting formatting issues, and verifying data integrity across all fields.",
      image: excelfLogo,
      tags: ["MS Excel"],
      github: "https://github.com/AjitMaddheshiya/Coffee-Shop-Sales-Dashboard-MS-Excel",
      webapp: "https://github.com/AjitMaddheshiya/Coffee-Shop-Sales-Dashboard-MS-Excel",
    },
    {
  id: 9,
  title: "Heart Disease Prediction using Machine Learning",
  description:
    "I developed a Heart Disease Prediction system as part of my Predictive Analytics (Machine Learning) coursework. The project involved end-to-end data preprocessing and exploratory data analysis (EDA) on a heart disease dataset, including handling missing values, removing duplicates, outlier detection using IQR, and feature encoding. I implemented multiple machine learning models such as Multiple Linear Regression to predict cholesterol levels, and classification algorithms including Logistic Regression, K-Nearest Neighbors (KNN), and Support Vector Machine (SVM) to predict the presence of heart disease. Additionally, I applied K-Means clustering to identify patient risk groups, used Principal Component Analysis (PCA) for dimensionality reduction, and trained a Neural Network (MLP) for improved classification performance. The models were evaluated using metrics like MAE, MSE, RMSE, R² score, accuracy, confusion matrix, classification report, and k-fold cross-validation to ensure reliability and robustness.",
  image: heartDiseaseLogo,
  tags: [
    "Python",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn"
  ],
  github: "https://github.com/AjitMaddheshiya/Predictive-Analytics-Project-Machine-Learning-Pipeline-Heart-Disease-Dataset-",
  webapp: "https://github.com/AjitMaddheshiya/Predictive-Analytics-Project-Machine-Learning-Pipeline-Heart-Disease-Dataset-",
}

  ];

// Certificates Section
export const certificates = [
  {
    id: 0,
    title: "Google Advanced Data Analytics",
    description: "Professional certificate in Advanced Data Analytics from Google (Coursera). Covering data visualization, data analysis, and advanced analytics techniques.",
    image: googleDataAnalyticsLogo,
    tags: ["Google", "Coursera", "Data Analytics"],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/MG9GVTNIX14U",
  },
  {
    id: 1,
    title: "Microsoft Power BI Data Analyst",
    description: "Professional certificate in Power BI Data Analysis from Microsoft (Coursera). Covering data modeling, DAX, and business intelligence visualization.",
    image: microsoftPowerBILogo,
    tags: ["Microsoft", "Coursera", "Power BI"],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/EYRBOZ30RVD4",
  },
  {
    id: 2,
    title: "Data Science Professional",
    description: "Professional certificate in Data Science from Oracle. Covering machine learning, data mining, and predictive analytics.",
    image: oracleDataScienceLogo,
    tags: ["Oracle", "Data Science", "Machine Learning"],
    link: "https://www.linkedin.com/in/ajit-m2024/details/certifications/1761364161315/single-media-viewer?profileId=ACoAAEZ_xpUBlIpikjqTJfOfnHPqk2cjas9wZbk",
  },
  {
    id: 3,
    title: "Generative AI Professional",
    description: "Professional certificate in Generative AI from Oracle. Covering AI models, prompt engineering, and AI applications.",
    image: oracleGenerativeAILogo,
    tags: ["Oracle", "AI", "Generative AI"],
    link: "https://www.linkedin.com/in/ajit-m2024/details/certifications/1761364006529/single-media-viewer?profileId=ACoAAEZ_xpUBlIpikjqTJfOfnHPqk2cjas9wZbk",
  },
  {
    id: 4,
    title: "Cloud Computing",
    description: "NPTEL certified course in Cloud Computing. Covering cloud architecture, deployment models, and cloud services.",
    image: cloudComputingLogo,
    tags: ["NPTEL", "Cloud Computing"],
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S157020022704430245.pdf",
  },
];
