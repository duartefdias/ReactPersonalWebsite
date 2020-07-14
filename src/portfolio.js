
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "duarte dias",
  title: "Hi, I'm Duarte",
  subTitle: emoji("Passionate about software engineering 🚀 experienced in building Full-Stack Web applications with JavaScript / Python / Vuejs / Reactjs / Nodejs / MongoDB / SQL and other techologies."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/duartefdias",
  linkedin: "https://www.linkedin.com/in/duarte-dias/",
  //gmail: "saadpasta70@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/DuartexDias",
  instagram: "https://www.instagram.com/duartefdias/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "COMPUTER SOFTWARE ENGINEER PASSIONATE TO LEARN ABOUT NEW TECHNOLOGIES",
  skills: [
    emoji("⚡ Experience in developing distributed full-stack applications"),
    emoji("⚡ Knowledgeable in cloud architectures")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-pepper-hot"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Support Engineer",  
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "September 2019 – Present",
      desc: "Daily engaging with customers, partners and engineers from all around the world to empower companies in using Microsoft Dynamics 365.",
      descBullets: [
        "Close contact with product engineering team to improve Microsoft products."
      ]
    },
    {
      role: "Full-Stack Engineer / Project Manager",   
      company: "Junitec",
      companylogo: require("./assets/images/junitecMinLogo.png"),
      date: "November 2018 – August 2019",
      desc: "Managing and working alongside a team of 3 talented engineering students from Instituto Superior Técnico in order to develop a platform for managing all of the 60.000+ art pieces of The Berardo Collection over a 10 month period of time."
    },
    {
      role: "Software Engineer Intern",  
      company: "Uphill",
      companylogo: require("./assets/images/uphillLogo.jpg"),
      date: "July 2018 – Sep 2018",
      desc: "Developing testing software for an Angular full-stack medical-related application."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/colecaoBerardo.jpg"),
      link: "https://en.museuberardo.pt/"
    },
    {
      image: require("./assets/images/junitecLogo.png"),
      link: "https://junitec.ist.utl.pt/en/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements & Certifications 🏆 "),
  subtitle: "Achievements, Certifications and other awards",

  achivementsCards: [
    {
      //title: "Azure Data Scientist ",
      //subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/azure-data-scientist-associate.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/5274ca5b-7924-4cf1-97d2-62ba77fe9215" },
      ]
    },
    {
      image: require("./assets/images/azure-fundamentals-600x600.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/0a313c97-d21d-43f4-a958-85c8162b8795" },
      ]
    },
    {
      image: require("./assets/images/CERT-Expert-Dynamics365-Power-Platform-Solution-Architect.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/07ba479d-761d-40a2-8757-b98b14a14732" },
      ]
    },
    {
      image: require("./assets/images/dynamics365-for-marketing-functional-consultant-associate-600x600.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/2ea117a4-d8b2-4131-9128-d3efb138af07" },
      ]
    },
    {
      image: require("./assets/images/CERT-Fundamentals-Power-Platform.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/4a61afb0-de5c-4d84-9ba0-a06b93cd752e" },
      ]
    },
    {
      image: require("./assets/images/dynamics365-fundamentals-600x600.png"),
      footerLink: [
        { name: "Credential", url: "https://www.youracclaim.com/badges/dc4e4b9d-ca8a-42d5-a82f-6dfafbc75571" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-3243454077",
  email_address: "duartefdias@outlook.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
