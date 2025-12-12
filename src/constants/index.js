
const navLinks = [
    {
        name: "Work",  /* work */
        link: "#work",
    },
    {
        name: "Team",  /* experience */
        link: "#team",
    },
    {
        name: "Tools", /* skills */
        link: "#tools",
    },
    {
        name: "Other", /* testimonial */
        link: "#other",
    },
];

const words = [
    {text: 'Unreal Engine', imgPath: '/images/ideas.svg'},
    {text: 'Rhino', imgPath: '/images/concepts.svg'},
    {text: 'Virtual Reality', imgPath: '/images/designs.svg'},
    {text: 'Cesium', imgPath: '/images/concepts.svg'},
    {text: 'Twin Motion', imgPath: '/images/concepts.svg'}
]


const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            " talk about each member here and what expertise they bring to the team.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "title for each member ",
        date: "sept 2025",
        responsibilities: [
            "add responsibilities for reclamation project",
        ],
    },
    {
        review:
            "more about each memebers expertise",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "add responsibilites for reclamation project ....",
        ],
    },
    {
        review:
            " more comments....",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            " add responsibilities for reclamation project ....",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: " member name 1",
        mentions: " linkedin member 1 ",
        review:
            "comment.....",
        imgPath: "/images/client1.png",
    },
    {
        name: "member name 2",
        mentions: "linkedin member 2 ",
        review:
            "comments??...",
        imgPath: "/images/client3.png",
    },
    {
        name: "member name 3",
        mentions: "linkedin member 3 ",
        review:
            "comments..",
        imgPath: "/images/client2.png",
    },
    {
        name: "member name ",
        mentions: "linedin 4",
        review:
            "comments ....",
        imgPath: "/images/client5.png",
    },
    {
        name: " member name",
        mentions: " linkedin 5",
        review:
            "comments...",
        imgPath: "/images/client4.png",
    },
    {
        name: "member name ",
        mentions: "linkedin link",
        review:
            "comments....",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};