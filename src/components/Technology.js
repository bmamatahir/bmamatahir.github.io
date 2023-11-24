import React from 'react';

import {
    IoLogoAngular,
    IoLogoCss3,
    IoLogoFirebase,
    IoLogoHtml5,
    IoLogoIonic,
    IoLogoJavascript,
    IoLogoLaravel,
    IoLogoNodejs,
    IoLogoPwa,
    IoLogoPython,
    IoLogoVue,
} from "react-icons/io5";

import { BiCodeAlt, BiPackage, } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";

import {
    DiJqueryLogo,
    DiJqueryUiLogo,
    DiMongodb,
    DiMysql,
    DiPostgresql,
    DiRust,
    DiSqllite,
} from "react-icons/di";

import {
    FaAws,
    FaDocker,
    FaGitAlt,
    FaPhp,
    FaReact,
    FaWordpress,
} from "react-icons/fa";

import { SiApachecordova, SiDart, SiFlask, SiGooglemaps, SiGraphql, SiKubernetes, SiMaterialdesign, SiNextdotjs, SiSocketdotio, SiTailwindcss, SiTypescript, SiWebrtc } from "react-icons/si";

import { GrPaypal } from "react-icons/gr";
import { HiDatabase } from "react-icons/hi";
import { RiFlutterFill } from "react-icons/ri";


class Skill {
    constructor(label, color, icon = BiCodeAlt) {
        this.label = label;
        this.color = color;
        this.icon = icon;
    }
}

export const Technologies = {
    /* Frameworks & libraries */

    Laravel: new Skill('Laravel', '#F72C1F', IoLogoLaravel),
    Livewire: new Skill('Livewire', '#F36CA4', (props) => <BiCodeAlt {...props}/>),
    Odoo: new Skill('Odoo', '#9D4485', (props) => <BiCodeAlt {...props}/>),
    Flask: new Skill('Flask', '#000000', (props) => <SiFlask {...props}/>),
    Flutter: new Skill('Flutter', '#5CC4F0', (props) => <RiFlutterFill {...props}/>),
    PWA: new Skill('PWA', '#570FC2', (props) => <IoLogoPwa {...props}/>),
    WebRTC: new Skill('WebRTC', '#F7C600', (props) => <SiWebrtc {...props}/>),
    SocketIO: new Skill('SocketIO', '#010101', (props) => <SiSocketdotio {...props}/>),
    Angular: new Skill('Angular', '#D6002F', (props) => <IoLogoAngular {...props}/>),
    Cordova: new Skill('Cordova', '#4C5562', (props) => <SiApachecordova {...props}/>),
    Ionic: new Skill('Ionic', '#4786F7', (props) => <IoLogoIonic {...props}/>),
    jQuery: new Skill('jQuery', '#0B66A9', (props) => <DiJqueryLogo {...props}/>),
    jQueryUI: new Skill('jQuery UI', '#F2A022', (props) => <DiJqueryUiLogo {...props}/>),
    WordPress: new Skill('WordPress', '#007095', (props) => <FaWordpress {...props}/>),
    Bootstrap: new Skill('Bootstrap', '#6E12EF', (props) => <BsFillBootstrapFill {...props}/>),
    Tailwind: new Skill('Tailwind', '#0CA4B2', (props) => <SiTailwindcss {...props}/>),
    React: new Skill('React', '#48CEF7', (props) => <FaReact {...props}/>),
    CMI: new Skill('CMI Payment', '#EE4230', (props) => <BiPackage {...props}/>),
    ThreeJs: new Skill('ThreeJs', '#403D7E', (props) => <BiCodeAlt {...props}/>),
    RxJs: new Skill('RxJs', '#A1008D', (props) => <BiCodeAlt {...props}/>),
    AJAX: new Skill('AJAX', '#0780C6', (props) => <BiCodeAlt {...props}/>),
    AngularMaterialUI: new Skill('AngularMaterialUI', '#F38800', (props) => <SiMaterialdesign {...props}/>),
    GoogleMaps: new Skill('Google Maps', '#32A34F', (props) => <SiGooglemaps {...props}/>),
    IoT: new Skill('IoT', '#57514F', (props) => <BiCodeAlt {...props}/>),
    PayPal: new Skill('PayPal', '#002E82', (props) => <GrPaypal {...props}/>),
    Docker: new Skill('Docker', '#1993EF', (props) => <FaDocker {...props}/>),
    Git: new Skill('Git', '#E84D31', (props) => <FaGitAlt {...props}/>),
    K8s: new Skill('K8s', '#416BDD', (props) => <SiKubernetes {...props}/>),
    Firebase: new Skill('Firebase', '#F4C43D', (props) => <IoLogoFirebase {...props}/>),
    AlpineJs: new Skill('AlpineJs', '#9CC6D1', (props) => <BiCodeAlt {...props}/>),
    HiveDB: new Skill('Hive', '#F5E720', (props) => <HiDatabase {...props}/>),
    ExpressJs: new Skill('ExpressJs', '#7E7E7E', (props) => <BiCodeAlt {...props}/>),
    VueJs: new Skill('VueJs', '#3FB27F', (props) => <IoLogoVue {...props}/>),


    /* Programing Languages */
    PHP: new Skill('PHP', '#4F5D95', (props) => <FaPhp {...props}/>),
    Javascript: new Skill('Javascript', '#EFD81D', (props) => <IoLogoJavascript {...props}/>),
    Typescript: new Skill('Typescript', '#2F74C0', (props) => <SiTypescript {...props}/>),
    Dart: new Skill('Dart', '#00CBB2', (props) => <SiDart {...props}/>),
    Python: new Skill('Python', '#3572A5', (props) => <IoLogoPython {...props}/>),
    NodeJs: new Skill('NodeJs', '#43853D', (props) => <IoLogoNodejs {...props}/>),
    HTML5: new Skill('HTML5', '#ff3e00', (props) => <IoLogoHtml5 {...props}/>),
    CSS3: new Skill('CSS3', '#2862E9', (props) => <IoLogoCss3 {...props}/>),
    Rust: new Skill('Rust', '#000000', (props) => <DiRust {...props}/>),

    GraphQL: new Skill('GraphQL', '#CC44A2', (props) => <SiGraphql {...props}/>),
    AWS: new Skill('AWS', '#E99936', (props) => <FaAws {...props}/>),
    NextJs: new Skill('NextJs', '#000000', (props) => <SiNextdotjs {...props}/>),


    /* Databases */
    Postgres: new Skill('Postgres', '#336791', (props) => <DiPostgresql {...props}/>),
    MongoDB: new Skill('MongoDB', '#52A74B', (props) => <DiMongodb {...props}/>),
    MySql: new Skill('Mysql', '#E48D06', (props) => <DiMysql {...props}/>),
    SqLite: new Skill('SqLite', '#379BD9', (props) => <DiSqllite {...props}/>),
};

const Technology = ({label, color, icon}) => {
    const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;

    return (
        <div className="rounded-full leading-none p-1 px-1 md:px-2 text-xs md:text-sm lg:text-base font-medium inline-block flex items-center gap-1 border"
             style={{backgroundColor: setOpacity(color, 0.1), color, borderColor: setOpacity(color, .2)}}>{icon()} {label}</div>
    );
};

export default Technology;
