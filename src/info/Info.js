import self from "../img/me.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    name: "Rama",
    firstName: "El",
    lastName: "Code",
    initials: "EL", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Addicted to coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Indonesia'
        },
        {
            emoji: "💼",
            text: "Frontend Dev at Klola Indonesia"
        },
        {
            emoji: "📧",
            text: "elcodeee@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://instagram.com/elcodee_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/elcodee",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rmdtya",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Rama Aditya. I am a full time programer building an application for an organization that helps many Indonesian community. I also freelance to increase my knowledge & experience in the tech world",
    skills:
        {
            proficientWith: ['Javascript', 'React-JS', "Next-JS", "Express JS", "Laravel 8",  'Git', 'Github', 'Gitlab', 'Bootstrap 5', 'Material-ui', 'Chakra-ui', 'Next-ui', "AntDesign-ui"],
            exposedTo: ['Node JS', "VS Code", "Adobe Dreamweaver 2022", "Github", "Gitlab", "Postman", "Vercel", "Kontenbase", "Domainesia", 'Adobe Photoshop 2022', 'Canva']
        }
    ,
    hobbies: [
        {
            label: 'Coding',
            emoji: '💻'
        },
        {
            label: 'Explore New Tech & Trend',
            emoji: '🤖'
        },
        {
            label: 'Watch Netflix',
            emoji: '🎥'
        },
        {
            label: 'Reading Article',
            emoji: '📖'
        },
        {
            label: 'Listen Spotify',
            emoji: '🎵'
        },
        {
            label: 'Playing Game',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    certificate: [
        {
            num: "2021 |",
            label: 'Fullstack React JavaScript Dev',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-dumbways-bootcamp-selection.png'
        },
        {
            num: "2021 |",
            label: 'Basic Fullstack React JavaScript Dev',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-dumbways-preclass.png'
        },
        {
            num: "2021 |",
            label: 'React & React Native',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-hacktiv8-rn.png'
        },
        {
            num: "2020 |",
            label: 'Junior Laravel Fullstack Dev',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-bwa.png'
        },
        {
            num: "2019 |",
            label: 'LSPR Radio Poster Design',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-lspr.png'
        },
        {
            num: "2019 |",
            label: 'BNSP Multimedia Service',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-bnsp.jpeg'
        },
        {
            num: "2019 |",
            label: 'Into To Programing',
            img: 'https://raw.githubusercontent.com/elcodee/certificate/main/rama-hacktiv8-intro.png'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Meet Us",
            live: "",
            source: "https://github.com/elcodee/MeetUs",
            image: "https://raw.githubusercontent.com/elcodee/MeetUs/Frontend/meetUsMain.png"
        },
        {
            title: "Ways Bean",
            live: "",
            source: "https://github.com/elcodee/waysbean",
            image: "https://raw.githubusercontent.com/elcodee/certificate/main/ways-beans.png"
        },
        {
            title: "React Native Crud",
            live: "",
            source: "https://github.com/elcodee/rn_crud",
            image: "https://raw.githubusercontent.com/elcodee/certificate/main/rn-crud.png"
        }
    ]
}
