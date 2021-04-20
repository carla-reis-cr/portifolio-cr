import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Carla Reis',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.canva.com/design/DAEcIJbB_Bo/2ceIxjKFry6IDyvyWiNs2w/view?utm_content=DAEcIJbB_Bo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'carla.cr.reis@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CR_CarlaReis',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/carla-reis-60888413b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/carla-reis-cr',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/carla-reis-cr',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/reis.carla.cr/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/cr_carlareis/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
