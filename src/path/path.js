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

]

export const record = () => {
    firebase.firestore().collection('path').doc('default').set({ path }).then(() => {
        console.log('path is recorded')
    }).catch(err => {
        console.log(err)
    })
}
