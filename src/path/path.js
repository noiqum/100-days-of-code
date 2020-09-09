import firebase from '../firebaseConfig/firebaseConfig';

export const path = [
    {
        day: 1, title: 'html', links: [
            { source: 'https://bento.io/topic/html', done: false }
        ]
    },
    {
        day: 2, title: 'html', links: [
            { source: 'https://www.freecodecamp.org/', done: false }
        ]
    },
    {
        day: 3, title: 'html', links: [
            { source: 'https://learn.shayhowe.com/html-css/building-your-first-web-page/', done: false }
        ]
    },
    {
        day: 4, title: 'html', links: [
            { source: 'https://learn.shayhowe.com/html-css/getting-to-know-html/', done: false },
            { source: 'https://learn.shayhowe.com/html-css/writing-your-best-code/', done: false }
        ]
    },
    {
        day: 5, title: 'html', links: [
            { source: 'https://www.youtube.com/watch?v=QA0XpGhiz5w', done: false }
        ]
    },
    {
        day: 6, title: 'html', links: [
            { source: 'https://www.codecademy.com/learn/learn-html', done: false }
        ]
    },
    {
        day: 7, title: 'html', links: [
            { source: 'https://www.codecademy.com/learn/learn-html', done: false },
            { source: 'https://bento.io/login?redirect=http://blog.teamtreehouse.com/use-html5-sectioning-elements', done: false }
        ]
    },
    {
        day: 8, title: 'html', links: [
            { source: 'https://tutorialzine.com/2014/12/quick-tip-easy-form-validation-with-html5', done: false }
        ]
    },
    {
        day: 9, title: 'css', links: [
            { source: 'https://www.youtube.com/watch?v=1PnVor36_40', done: false }
        ]
    },
    {
        day: 10, title: 'css', links: [
            { source: 'https://learn.shayhowe.com/html-css/getting-to-know-css/', done: false }
        ]
    },
    {
        day: 11, title: 'css', links: [
            { source: 'https://css-tricks.com/attribute-selectors/', done: false },
            { source: 'http://flukeout.github.io/', done: false }
        ]
    },
    {
        day: 12, title: 'css', links: [
            { source: 'https://learn.shayhowe.com/html-css/opening-the-box-model/', done: false },
            { source: 'https://css-tricks.com/the-css-box-model/', done: false },
            { source: 'https://www.w3schools.com/css/css_boxmodel.asp', done: false },
        ]
    },
    {
        day: 13, title: 'css', links: [
            { source: 'https://www.youtube.com/watch?v=TiY5FuwgocI', done: false }
        ]
    },
    {
        day: 14, title: 'css', links: [
            { source: 'https://flexbox.io/', done: false }
        ]
    },
    {
        day: 15, title: 'css', links: [
            { source: 'https://www.youtube.com/playlist?list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid', done: false },
            { source: 'https://www.internetingishard.com/html-and-css/flexbox/', done: false },
            { source: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', done: false }
        ]
    },
    {
        day: 16, title: 'css', links: [
            { source: 'https://gridbyexample.com/video/', done: false },
            { source: 'https://www.youtube.com/watch?v=EFafSYg-PkI', done: false },
            { source: 'https://www.youtube.com/watch?v=T-slCsOrLcc&list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG', done: false }
        ]
    },
    {
        day: 17, title: 'JavaScript', links: [
            { source: 'https://www.youtube.com/watch?v=ei2HLyHwt-k', done: false },

        ]
    },
    {
        day: 18, title: 'JavaScript', links: [
            { source: 'https://www.freecodecamp.org/learn', done: false },

        ]
    },
    {
        day: 19, title: 'JavaScript', links: [
            { source: 'https://watchandcode.com/p/practical-javascript', done: false },

        ]
    },
    {
        day: 20, title: 'JavaScript', links: [
            { source: 'https://watchandcode.com/p/practical-javascript', done: false },

        ]
    },
    {
        day: 21, title: 'JavaScript', links: [
            { source: 'https://www.sololearn.com/Course/JavaScript/', done: false },

        ]
    },
    {
        day: 22, title: 'JavaScript', links: [
            { source: 'https://www.sololearn.com/Course/JavaScript/', done: false },

        ]
    },
    {
        day: 23, title: 'JavaScript', links: [
            { source: 'https://www.theodinproject.com/courses/javascript/lessons/todo-list', done: false },

        ]
    },
    {
        day: 24, title: 'JavaScript', links: [
            { source: 'https://www.theodinproject.com/courses/javascript/lessons/todo-list', done: false },

        ]
    },
    {
        day: 25, title: 'JQuery', links: [
            { source: 'https://www.freecodecamp.org/learn/front-end-libraries/jquery/', done: false },

        ]
    },
    {
        day: 26, title: 'JQuery', links: [
            { source: 'https://www.udacity.com/course/intro-to-jquery--ud245', done: false },

        ]
    },
    {
        day: 27, title: 'JQuery', links: [
            { source: 'https://www.udacity.com/course/intro-to-jquery--ud245', done: false },

        ]
    },
    {
        day: 28, title: 'Responsive Web Design', links: [
            { source: 'https://learn.shayhowe.com/advanced-html-css/responsive-web-design/', done: false },

        ]
    },
    {
        day: 29, title: 'Responsive Web Design', links: [
            { source: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', done: false },

        ]
    },
    {
        day: 30, title: 'Responsive Web Design', links: [
            { source: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', done: false },

        ]
    },
    {
        day: 31, title: 'Responsive Web Design', links: [
            { source: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', done: false },

        ]
    },
    {
        day: 32, title: 'Responsive Web Design', links: [
            { source: 'https://www.youtube.com/watch?v=j_Xa7Kn59Es', done: false },

        ]
    },
    {
        day: 33, title: 'Responsive Web Design', links: [
            { source: 'https://web.dev/responsive-web-design-basics/', done: false },

        ]
    },
    {
        day: 34, title: 'A11Y', links: [
            { source: 'https://www.udacity.com/course/web-accessibility--ud891', done: false },

        ]
    },
    {
        day: 35, title: 'A11Y', links: [
            { source: 'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/', done: false },

        ]
    },
    {
        day: 36, title: 'A11Y', links: [
            { source: 'https://www.a11yproject.com/about/', done: false },
            { source: 'https://www.a11yproject.com/checklist/', done: false }

        ]
    },
    {
        day: 37, title: 'GIT', links: [
            { source: 'https://www.youtube.com/watch?v=HVsySz-h9r4', done: false },


        ]
    },
    {
        day: 38, title: 'GIT', links: [
            { source: 'https://www.atlassian.com/git', done: false },


        ]
    },
    {
        day: 39, title: 'GIT', links: [
            { source: 'https://www.theodinproject.com/courses/web-development-101/lessons/practicing-git-basics', done: false },

        ]
    },
    {
        day: 40, title: 'NPM', links: [
            { source: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU', done: false },

        ]
    },
    {
        day: 41, title: 'NPM', links: [
            { source: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU', done: false },

        ]
    },
    {
        day: 42, title: 'NPM', links: [
            { source: 'https://www.sitepoint.com/beginners-guide-node-package-manager/', done: false },

        ]
    },
    {
        day: 43, title: 'NPM', links: [
            { source: 'https://nodeschool.io/#workshoppers', done: false },

        ]
    },
    {
        day: 44, title: 'NPM', links: [
            { source: 'https://nodeschool.io/#workshoppers', done: false },

        ]
    },
    {
        day: 45, title: 'SASS', links: [
            { source: 'https://sass-lang.com/documentation', done: false },

        ]
    },
    {
        day: 46, title: 'SASS', links: [
            { source: 'https://www.youtube.com/watch?v=roywYSEPSvc', done: false },

        ]
    },
    {
        day: 47, title: 'SASS', links: [
            { source: 'https://sass-lang.com/guide', done: false },

        ]
    },
    {
        day: 48, title: 'SASS', links: [
            { source: 'http://thesassway.com/beginner/how-to-structure-a-sass-project', done: false },

        ]
    },
    {
        day: 49, title: 'SASS', links: [
            { source: 'https://www.taniarascia.com/learn-sass-now/', done: false },

        ]
    },
    {
        day: 50, title: 'SASS', links: [
            { source: 'https://www.youtube.com/watch?v=_a5j7KoflTs', done: false },

        ]
    },
    {
        day: 51, title: 'Bootstrap', links: [
            { source: 'https://www.youtube.com/watch?v=hnCmSXCZEpU', done: false },

        ]
    },
    {
        day: 52, title: 'Bootstrap', links: [
            { source: 'https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/', done: false },

        ]
    },
    {
        day: 53, title: 'Bootstrap', links: [
            { source: 'https://getbootstrap.com/docs/4.5/getting-started/introduction/', done: false },

        ]
    },
    {
        day: 54, title: 'Bootstrap', links: [
            { source: 'https://getbootstrap.com/docs/4.5/getting-started/introduction/', done: false },

        ]
    },
    {
        day: 55, title: 'Bem', links: [
            { source: 'https://www.youtube.com/watch?v=er1JEDuPbZQ', done: false },

        ]
    },
    {
        day: 56, title: 'gulp', links: [
            { source: 'https://css-tricks.com/gulp-for-beginners/', done: false },

        ]
    },
    {
        day: 57, title: 'gulp', links: [
            { source: 'https://www.youtube.com/playlist?list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos', done: false },

        ]
    },
    {
        day: 58, title: 'gulp', links: [
            { source: 'https://www.tutorialspoint.com/gulp/index.htm', done: false },

        ]
    },
    {
        day: 59, title: 'gulp', links: [
            { source: 'https://www.toptal.com/nodejs/an-introduction-to-automation-with-gulp', done: false },

        ]
    },
    {
        day: 60, title: 'gulp', links: [
            { source: 'https://gulpjs.com/docs/en/getting-started/quick-start', done: false },

        ]
    },
    {
        day: 61, title: 'webpack', links: [
            { source: 'https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8', done: false },
            { source: 'https://blog.bitsrc.io/why-learning-webpack-is-important-as-front-end-developer-247bc0ca40bd', done: false }

        ]
    },
    {
        day: 62, title: 'webpack', links: [
            { source: 'https://laracasts.com/series/webpack-for-everyone', done: false },

        ]
    },
    {
        day: 63, title: 'webpack', links: [
            { source: 'https://www.youtube.com/playlist?list=PLLhEJK7fQIxB2gZBIzYI50NPsAQERD9rL', done: false },

        ]
    },
    {
        day: 64, title: 'webpack', links: [
            { source: 'https://frontendmasters.com/courses/webpack-fundamentals/', done: false },

        ]
    },
    {
        day: 65, title: 'eslint', links: [
            { source: 'https://eslint.org/docs/about/', done: false },
            { source: 'https://www.youtube.com/watch?v=YIvjKId9m2c', done: false }

        ]
    },
    {
        day: 66, title: 'react', links: [
            { source: 'https://medium.com/swlh/all-the-javascript-you-need-to-know-before-starting-with-react-abe2ebffb067', done: false },


        ]
    },
    {
        day: 67, title: 'react', links: [
            { source: 'https://www.freecodecamp.org/news/how-to-write-your-first-react-js-component-d728d759cabc/', done: false },


        ]
    },
    {
        day: 68, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 69, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 70, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 71, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 72, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 73, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 74, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 75, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 76, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 77, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 78, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 79, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 80, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 81, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 82, title: 'react', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 83, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 84, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 85, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 86, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 87, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 88, title: 'redux', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 89, title: 'jest', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 90, title: 'jest', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 91, title: 'jest', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 92, title: 'jest', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 93, title: 'jest', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 94, title: 'TypeScript', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 95, title: 'TypeScript', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 96, title: 'TypeScript', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 97, title: 'next js', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 98, title: 'next js', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 99, title: 'next js', links: [
            { source: '', done: false },


        ]
    },
    {
        day: 100, title: 'next js', links: [
            { source: '', done: false },


        ]
    },



]

export const record = () => {
    firebase.firestore().collection('path').doc('default').set({ path }, { merge: true }).then(() => {
        console.log('path is recorded')
    }).catch(err => {
        console.log(err)
    })
}



