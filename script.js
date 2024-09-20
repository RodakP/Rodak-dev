//buttons
const homeBtn = document.querySelector('.nav-home')
const aboutmeBtn = document.querySelector('.nav-aboutme')
const projectsBtn = document.querySelector('.nav-projects')
const burgerBtn = document.querySelector('.menu-button')

// NAV
const navItems = document.querySelector('.nav-items')

//pages
const homePage = document.querySelector('#home')
const aboutmePage = document.querySelector('#aboutme')
const projectsPage = document.querySelector('#projects')

const showHome = () => {
    homePage.style.display = 'block'

    aboutmePage.style.display = 'none'
    projectsPage.style.display = 'none'
}
const showAboutme = () => {
    aboutmePage.style.display = 'flex'

    homePage.style.display = 'none'
    projectsPage.style.display = 'none'
}

const showProjects = () => {
    projectsPage.style.display = 'block'

    homePage.style.display = 'none'
    aboutmePage.style.display = 'none'
}

const handleMobileNav = () => {
    navItems.classList.toggle('active')
    document.body.classList.toggle('sticky-body')
}

const closeMobileNav = () => {
    navItems.classList.remove('active')
}


// AddEventListerners
homeBtn.addEventListener('click', showHome)
aboutmeBtn.addEventListener('click', showAboutme)
projectsBtn.addEventListener('click', showProjects)
burgerBtn.addEventListener('click', handleMobileNav)
navItems.addEventListener('click', closeMobileNav)