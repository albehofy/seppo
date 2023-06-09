// nav vaiables 
const navTogglerIcon = document.querySelector('.toggler-icon');
const navLinks = document.querySelector('.navbar .links');
const animatedTogglerIcon = document.querySelector('.toggler-icon-center')
// about variables 
const aboutTopSection = document.querySelector('.about')
const aboutTopSectionPositionY = aboutTopSection.getBoundingClientRect().top
const movedImage = document.querySelector('.about-image');
// team variables 
const teamSectionOne = document.querySelector('.team-card-1.team-member')
const teamSectionOneY = teamSectionOne.getBoundingClientRect().top
const teamSectionTwo = document.querySelector('.team-card-2.team-member')
const teamSectionTwoY = teamSectionTwo.getBoundingClientRect().top
const teamSectionThree = document.querySelector('.team-card-3.team-member')
const teamSectionThreeY = teamSectionThree.getBoundingClientRect().top
const aboutTeamOne = document.querySelector('.team-card-1 .contact-info')
const aboutTeamTwo = document.querySelector('.team-card-2 .contact-info')
const aboutTeamThree = document.querySelector('.team-card-3 .contact-info')
// navigation
const likns = document.querySelectorAll('nav .links span');

// portfolio variables
let portfolio = document.querySelector('.portfolio')
let portfolioDynamicData = document.querySelector('#portfolio-dynamic-data')
let portfolioContainer = document.querySelector('.portfolio-content-wrapper')
let portfolioSwitch = document.querySelector('.portfolio-switch');
let portfolioArrow = document.querySelector('.portfolio .arrow');

// carousel variables
let carouselCard = document.querySelectorAll('.carousel-card')
let firstCarousl = document.getElementById("carousel-card-1")
let secondCarousl = document.getElementById("carousel-card-2");
let thirdCarousl = document.getElementById("carousel-card-3");
let crouselCardsHolder = [firstCarousl, secondCarousl, thirdCarousl];
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 2;
let inPrevPosition = false;

// form an contacts variables
let  form = document.querySelector("form");
let inputs = document.querySelectorAll(".contact input")
let textArea = document.querySelector(".contact textarea")


observingSections()

// remove preloader
window.setTimeout(() => {
    document.querySelector(".loader").classList.add("remove")
}, 1300
)
// toggling active class on scroll 
document.addEventListener("scroll", observingSections)

portfolioContainer.addEventListener("click", () => {
    portfolioDynamicData.style.display = 'block';
    portfolio.style.height = "auto";
    portfolioContainer.style.display = "none";
})
portfolioArrow.addEventListener("click", () => {
    portfolioContainer.style.display = "block";
    portfolioDynamicData.style.display = 'none';
    portfolio.style.height = "105vh";
    portfolioSwitch.style.paddingTop = "0px"


});


prev.addEventListener("click", () => {
    inPrevPosition = true;
    if (index >= 0) {

        if (index == 3) {
            index = 1
            m(crouselCardsHolder[index])
            index--
        } else {
            m(crouselCardsHolder[index])
            index--
        }

    } else {
        index = crouselCardsHolder.length - 1;

        m(crouselCardsHolder[index])


        index--
    }
})

next.addEventListener("click", () => {
    if (inPrevPosition) {
        index += 2;
    }
    inPrevPosition = false;
    if (index < crouselCardsHolder.length) {

        m(crouselCardsHolder[index])


        index++
    } else {
        index = 0;

        m(crouselCardsHolder[index])


        index++
    }
})


//Calling a function during form submission.
form.addEventListener('submit', submitForm);

// add or remove class active in the naebar
likns.forEach((link) => {
    link.addEventListener("click", (e) => {
        let y = document.getElementById(`${e.target.getAttribute("data-navigation")}`).getBoundingClientRect().top + window.scrollY +70;
        window.scroll({
            top: y,
            behavior: 'smooth',
        });
    })

})

// toggling nav bar links in mobile or any screen with width greater than (996px)
togglingClass(navTogglerIcon, "click", navLinks, 'links-open')
togglingClass(navTogglerIcon, "click", animatedTogglerIcon, 'toggler-icon-open')



// animating about image with offset element and scrollY
// checking if we handling with with mobile or tablet or not 
if (document.querySelector('html').getBoundingClientRect().width >= 996) {

    // about image " how we are" section
    document.addEventListener("scroll", () => {

        // checing this is "who we are section" if this true and this's the right place then check if we on the top of item and if we arrived the end of the item for saving our desing
        if (window.scrollY >= (aboutTopSectionPositionY - 90) && (window.scrollY - aboutTopSectionPositionY) <= 0) {
            moved = (window.scrollY - aboutTopSectionPositionY).toString()
            movedImage.style.transform = `translateY(${moved}px)`
        }
        else if (window.scrollY >= (teamSectionOneY) && (window.scrollY - teamSectionOneY) <= 220) {
            moved = (window.scrollY - teamSectionOneY).toString()
            aboutTeamOne.style.transform = `translateX(${moved}px)`;

        } else if (window.scrollY >= (teamSectionTwoY) && (window.scrollY - teamSectionTwoY) <= 220) {
            moved = (-(window.scrollY - teamSectionTwoY)).toString()
            aboutTeamTwo.style.transform = `translateX(${moved}px)`;

        } else if (window.scrollY >= (teamSectionThreeY) && (window.scrollY - teamSectionThreeY) <= 220) {
            moved = (window.scrollY - teamSectionThreeY).toString()
            aboutTeamThree.style.transform = `translateX(${moved}px)`;
        }
    })
}

function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
    resetFormData();
    alert("message submit successful")

}

function resetFormData() {
    textArea.value = ''
    inputs.forEach(input => {
        input.value = ''
    });
}

// toggling class with eventsListener 
function togglingClass(EventSelector, event, StyledItem, ToggledClass) {
    EventSelector.addEventListener(`${event}`, () => {
        StyledItem.classList.toggle(`${ToggledClass}`)

    })
}

function m(element) {

    carouselCard.forEach(element => {
        element.style.display = "none"
        element.style.width = "0"
    });

    element.style.display = "block"
    element.style.width = "100%";

}


function observingSections() {
    document.querySelectorAll("section").forEach(activeSec => {
        let activeLin = document.querySelector(`[data-navigation="${activeSec.id}"]`)
        let activeSecHeight = activeSec.getBoundingClientRect().height;
        if (activeSec.getBoundingClientRect().top >= -activeSecHeight  +50 && activeSec.getBoundingClientRect().top <= 0) {
            activeLin.classList.add("active");
        } else {
            activeLin.classList.remove("active");
        }
    })
}
