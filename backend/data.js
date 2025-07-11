// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2020 - 2023',
     institution: 'SMK Dinamika Pembangunan 1 Jakarta',
     major: 'Teknik Komputer dan Jaringan' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' }
];
const projects = [ 
    { title: 'Website Perbelanjaan', image: '/src/assets/img/ecommerce.png',
    description: '', tech: ['Css# Js# HTML#'
], link: '#' },

];
module.exports = { educationHistory, skills, projects };