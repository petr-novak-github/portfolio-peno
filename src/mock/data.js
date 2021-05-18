import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Petr Novák | Developer', // e.g: 'Name | Developer'
  lang: 'cz', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Petr',
  subtitle: 'I like to code.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpg',
  paragraphOne: 'I am a Developer with enthusiasm and focus on Object Oriented Programming and Web Development.',
  paragraphTwo: 'I am passionate about building software, creating effective solutions, and learning every day to grow professionally in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time.',
  resume: 'https://www.linkedin.com/in/petr-nov%C3%A1k-2503/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'robofriends_view_pic_bw.jpg',
  //   title: 'Robofriends',
  //   info: 'Its my first React.js project which was done by using tutorial. Its kind of visual database of my friends. Every friend has its own card. Its possible to search specific friend.',
  //   info2: '',
  //   url: 'https://petr-novak-github.github.io/robofriends/',
  //   repo: 'https://github.com/petr-novak-github/robofriends', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'facerecognitionapp_bw.jpg',
  //   title: 'Face Recognition App',
  //   info: 'Its my second project done by using tutorial, its based on React too. It cooperates with external API which finds the face on the picture. It also use SQL database for Sign In users. Passwords in DB are encrypted. There are Front End part, Back End part and Database part.',
  //   info2: 'Copy the link with the picture, and App will recognize where the face is, and mark it by blue rectangle.',
  //   url: 'https://smart-brain-peno.herokuapp.com/',
  //   repo: 'https://github.com/petr-novak-github/facerecognitionapp', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'zverimex.jpg',
    title: 'Company presentation website',
    info: 'This web was done as project when I studied web dev at Technical University of Ostrava in 2021. It was done according task description, for practisize stuff what we learned there. So sometimes it has no sense :).',
    info2: 'Technologies used here: Bootstrap, Sass compliler, CSS, HTML ..',
    url: 'http://petr-novak.wz.cz/firma/',
    repo: 'https://github.com/petr-novak-github/firma', // if no repo, the button will not show up
  },



  //{
   // id: nanoid(),
    //img: 'project.jpg',
    //title: '',
    //info: '',
    //info2: '',
    //url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  //},
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'e-mail',
  email: 'petr-novak-donald@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/petr_novak_1359',
    },
    //{
      //id: nanoid(),
      //name: 'codepen',
      //url: '',
    //},
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/petr-nov%C3%A1k-2503/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/petr-novak-github',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
