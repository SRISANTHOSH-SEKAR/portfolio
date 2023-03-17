// import images
import Hero_person from './assets/images/Hero/person.png';

import figma from './assets/images/Skills/figma.png';
import sketch from './assets/images/Skills/sketch.png';
import ps from './assets/images/Skills/ps.png';
import reactjs from './assets/images/Skills/react.png';
import nodejs from './assets/images/Skills/node.png';
import python from './assets/images/Skills/python.png';

import services_logo1 from './assets/images/Services/logo1.png';
import services_logo2 from './assets/images/Services/logo2.png';
import services_logo3 from './assets/images/Services/logo3.png';

import project1 from './assets/images/projects/img1.png';
import project2 from './assets/images/projects/img2.png';
import project3 from './assets/images/projects/img3.png';
import person_project from './assets/images/projects/person.png';

import avatar1 from './assets/images/Testimonials/avatar1.png';
import avatar2 from './assets/images/Testimonials/avatar2.png';
import avatar3 from './assets/images/Testimonials/avatar3.png';
import avatar4 from './assets/images/Testimonials/avatar4.png';

import Hireme_person from './assets/images/Hireme/person.png';
import Hireme_person2 from './assets/images/Hireme/person2.png';

// import icons from react-icons
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'Automotive Electronics Engineer',
    firstName: 'SRISANTHOSH',
    LastName: 'SEKAR',
    btnText: 'Hire Me',
    image: Hero_person,
    hero_content: [
      {
        count: '2+',
        text: 'Years of Experience in E-mobility',
      },
      {
        count: '4+',
        text: 'Ev Projects in my career',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Power Electronics',
        para: 'Hardware Ethusiast in mobility',
        logo: figma,
        content: [
          'Design and development of choppers for batery based applications.',
          'Design and development of rectifiers and inverters for power grid.',
          'Power switches and contactors clarification',
          'Simulations of high voltage devices in Proteus and simulink.',
        ],
      },
      {
        name: 'Automotive Electronics',
        para: 'Embed with power electronics- Motor controller',
        logo: nodejs,
        content: [
          'DESIGN AND DEVELOPMENT OF ELECTRICAL ARCHITECTURE OF EV',
          'POWER MANAGEMENT OF EV SYSTEMS',
          'DESIGN AND DEVELOPMENT OF BMS SWITCHING CIRCUITS',
          'ENGINE SELF-START CIRCUIT IN ICV',
        ],
      },
      {
        name: 'Project management',
        para: 'Managed team in 4+ projects as Team lead',
        logo: ps,
        content: [
          'EFFECTIVE OBJECTIVE SETTING',
          'CONTINGENCY PLANNING',
          'FMEA ANALYSIS',
          'DVP ANALYSIS',
        ],
      },
      {
        name: 'Data Analysis',
        para: 'Intelligent Deep learning techniques',
        logo: reactjs,
        content: [
          'BASIC PYTHON',
          'LINEAR AND LOGISTIC REGRESSION',
          'PREDICTION TECHNIQUES',
          'FORECASTING TECHNIQUES',
        ],
      },
      {
        name: 'Industrial Automation',
        para: 'Programmable Logic Controller ',
        logo: sketch,
        content: [
          'SIEMENS PLC- S71200',
          'DELTA PLC - WPL SOFTWARE',
          'SIMPLE AND EFFECTIVE LOGIC DETERMINATION',
        ],
      },
      {
        name: 'Propulsion Engineer',
        para: 'Deep knowledge on marine propulsion system',
        logo: python,
        content: [
          'BASICS OF MARINE PROPULSION',
          'SYSTEM CALCULATIONS- PROPULSION SYSTEMS',
          'OUTBOARD PROPULSION - SKID STEERING',
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'High voltage engineering - DC',
        para: 'Designing and developing high voltage systems in Electric mobility ',
        logo: services_logo1,
      },
      {
        title: 'Power converters',
        para: 'Designing and developing of Converters based on requirements',
        logo: services_logo2,
      },
      {
        title: 'High voltage rectifiers and inverters',
        para: 'Designing and developing of AC-DC and DC-AC converters especially 6-phase',
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: person_project,
    project_content: [
      {
        title: 'Roboboat',
        image: project1,
        desc: [
          'Organization- Vyuha ASV- Team of 38 Members',
          'Under the guidance of the Maritime Technological Society, India',
          'Role - Propulsion System lead',
          'Jan - Jun 2022 (6 Months Completed)',
        ],
      },
      {
        title: 'Range Extended Electric vehicle',
        image: project2,
        desc: [
          'Organization- Presevarance Motors- Team of 25 Members',
          'Best Presentation & Team Coordination Award',
          'Role- Electrical Stream Captain',
          '2022-2023 (12 Months Completed)',
        ],
      },
      {
        title: 'Air Quality Index balancing in ports',
        image: project3,
        desc: [
          'Organization- Evolvers- Team of 4 Members',
          'Special Mention Award, presented by SIH 2022',
          'Role- Team Manager',
          'Jul-Sep 2022 (3 Months Completed)',
        ],
      },
    ],
  },
  Testimonials: {
    title: 'Achievements',
    subtitle: 'Feats',
    testimonials_content: [
      {
        review:
          '“Best Student Award - 2022 under - Admiring Leadership category”',
        img: avatar1,
        name: 'IET-Chennai local Network',
      },
      {
        review:
          '“Winner-Range Extended Electric Vehicle-2023 1.5 lakhs inr - Role - Electrical Stream Captain”',
        img: avatar2,
        name: 'SAE India Banglore Section',
      },
      {
        review:
          '“Second Runner-up in Smart city challenge-2022- 10k inr - Role - Team manager”',
        img: avatar3,
        name: 'IET Chennai Local Network',
      },
      {
        review: '“Special Mention Award - Smart India Hackathon 2022”',
        img: avatar4,
        name: "MoE's Innovation Cell- Government of India & AICTE",
      },
    ],
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: Hireme_person,
    image2: Hireme_person2,
    para: 'In the field of Automotive Electronics, E-mobility, and power electronics.Every projects are fabricated with bottom-up approach with detailed design validation, failure mode effect analysis and fail-safe features ',
    btnText: 'Hire Me',
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'srisanthoshofficial@gmail.com',
        icon: GrMail,
        link: 'mailto:srisanthoshofficial@gmail.com',
      },
      {
        text: '+91 6382958634',
        icon: MdCall,
        link: 'https://wa.me/6382958634',
      },
      {
        text: 'King_@_destiny',
        icon: BsInstagram,
        link: 'https://instagram.com/_king_at_destiny_?igshid=ZDdkNTZiNTM=',
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved 2022',
  },
};
