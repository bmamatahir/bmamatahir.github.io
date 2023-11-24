import {ProjectStatus} from "../components/Budge";
import {Technologies} from "../components/Technology";



function loadImage(companyName, artword) {
    return require(`../assets/projects/${companyName}-${artword}.${artword === 'logo' ? 'png' : 'jpg'}`).default;
}

export const projects = [
    {
        logo: loadImage('spotbusiness', 'logo'),
        status: ProjectStatus.Active,
        name: 'Spotbusiness',
        visitLink: 'https://spotbusiness.ma',
        technologies: [Technologies.Laravel, Technologies.Livewire,  Technologies.AlpineJs, Technologies.Odoo, Technologies.CMI],
        color: '#3c57e0',
        description: `
            E-commerce rental subscriptions application for a business center, composed from tree layers website, Client portal and Admin panel.
            I integrated the UI components based on the given templates provided by the designer.
            The development experience was fascinating with the help of Laravel, Also ODOO came to play the role as a both third-party and backend support. 
            I built and maintained the app from idea to production. In addition, The website respects SEO norms to generate the traffic and well recognized in search engine.
        `,
        screenshots: loadImage('spotbusiness', 'screenshots'),
    },
    {
        logo: loadImage('spotfit', 'logo'),
        status: ProjectStatus.OnHold,
        name: 'Spotfit',
        technologies: [Technologies.Angular, Technologies.Laravel, Technologies.Ionic, Technologies.Cordova],
        color: '#DDBCFF',
        screenshots: loadImage('spotfit', 'screenshots'),
        description: `
            Platform where each member has his own customizable application (client, gym owner, admin), plus a brochure website.
            The application allows customers to explore gyms and pay passes with multiple methods of payment. 
            The app is hybrid and the code has been written inside Angular framework and wrapped withing a Cordova webview to target multiple platform especially Android and IOS systems.  
        `,
    },
    {
        logo: loadImage('spotbills', 'logo'),
        status: ProjectStatus.Active,
        name: 'Spotbills',
        visitLink: 'https://spotbills.com',
        technologies: [Technologies.Angular, Technologies.ThreeJs, Technologies.RxJs],
        color: '#FFCD65',
        description: `
            A static website describe the company products and services in creative manner with the power of Three.js. 
            We developed a 3D world and a smart smooth UX, and we toke advantage of Angular as front-end to enhance user interactivity and website performance.
        `,
        screenshots: loadImage('spotbills', 'screenshots'),
    },
    {
        logo: loadImage('peer', 'logo'),
        status: ProjectStatus.Ceased,
        name: 'Peer',
        technologies: [Technologies.Flutter, Technologies.WebRTC, Technologies.NodeJs, Technologies.MongoDB, Technologies.SocketIO],
        color: '#708DE9',
        screenshots: require('../assets/projects/peer-screenshots.jpg').default,
        description: `
              Decentralized instant messaging app built on top of Flutter framework, 
              using webRTC technology for P2P to perform Video/Audio calls, with high intention to security, considering the data transmission are totally 
              E2E encryption and powered by AI.
        `,
    },
    {
        logo: loadImage('opentech', 'logo'),
        status: ProjectStatus.Active,
        name: 'Opentech',
        visitLink: 'https://opentech.ma',
        technologies: [Technologies.WordPress, Technologies.AJAX, Technologies.Bootstrap],
        color: '#F08219',
        screenshots: loadImage('opentech', 'screenshots'),
        description: `
            Brochure website where the company expose its products and services with beautiful design and new look to the digital market.
            This artwork powered by Wordpress, with intensive customizations in the theme made by us. 
            The website raise reputation of the company and make it more accessible throughout the internet.
        `,
    },
    {
        logo: loadImage('satfleet', 'logo'),
        status: ProjectStatus.Active,
        name: 'Satfleet',
        visitLink: 'https://www.satfleet.ma/',
        technologies: [Technologies.PHP, Technologies.Javascript, Technologies.NodeJs, Technologies.GoogleMaps, Technologies.IoT],
        color: '#252A38',
        screenshots: loadImage('satfleet', 'screenshots'),
        description: `
            Fleet management platform that enable us to monitor vehicles in real time on Map view, 
            tracking the hardware status and control them remotely using IOT Technology.  
        `,
    },
    {
        logo: loadImage('OMS', 'logo'),
        status: ProjectStatus.Active,
        name: 'Opentech management system',
        visitLink: 'http://alpha.opentech.codes:1111/',
        technologies: [Technologies.Angular, Technologies.Laravel, Technologies.AngularMaterialUI, Technologies.Docker],
        color: '#252A38',
        screenshots: loadImage('OMS', 'screenshots'),
        description: `
            The new generation of the company's internal management system. 
            In order to solve the previous application performance as the data grow,
            we decided to refactor the app with trending technologies that moment,
            the app was a SPA consumes an external API and we secured the communication using JWT.
            When it comes to deployment the app components was isolated into Docker containers.  
        `,
    },
    {
        logo: loadImage('caftan-ahlam', 'logo'),
        status: ProjectStatus.Ceased,
        name: 'Caftan Ahlam',
        technologies: [Technologies.PHP, Technologies.Javascript, Technologies.Bootstrap, Technologies.HTML5, Technologies.PayPal],
        color: '#E70978',
        screenshots: loadImage('caftan-ahlam', 'screenshots'),
        description: `
            E-commerce website for selling traditional moroccan clothes. 
            The code was in PHP and structured following MVC pattern. 
            Thanks to Bootstrap library for building the UI components quickly.
            regarding to payment we handled the translations using PayPal payment gateway and the final product deployed inside shared hasted. 
        `,
    },
    {
        logo: loadImage('franni', 'logo'),
        name: 'Franni',
        technologies: [Technologies.Flutter, Technologies.HiveDB],
        color: '#607D8B',
        github: 'https://github.com/bmamatahir/franni',
        screenshots: loadImage('franni', 'screenshots'),
        description: `
            The easiest and efficient way to note answers for driving school lessons 🚗
        `,
    },
    {
        logo: loadImage('jood', 'logo'),
        name: 'Jood',
        technologies: [Technologies.Flutter, Technologies.Firebase, Technologies.GoogleMaps],
        color: '#01317D',
        github: 'https://github.com/bmamatahir/jood',
        screenshots: loadImage('jood', 'screenshots'),
        description: `
            The app users can signal a homeless and identify their locations, then the app notifies their volunteers and provides them with a detailed report about homeless needs. 
            Briefly, the app act as a bridge between the homeless and volunteers
        `,
    },
]

export const links = {
    github: 'https://github.com/bmamatahir',
    codinGame: 'https://www.codingame.com/profile/a6f1248dbc5265d36c117f072e21bdce3274172',
    jood: 'https://jood.ma/',
    leetcode: 'https://leetcode.com/bmamatahir/',
}
