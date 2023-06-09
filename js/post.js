// let y  =  document.getElementById(`${e.target.getAttribute("data-position")}`).getBoundingClientRect().top + window.scrollY - 70;

if (document.querySelector('html').getBoundingClientRect().width >= 996) {
    let article = document.querySelector("article").getBoundingClientRect().top + window.scrollY - 100;
    let footer = document.querySelector("footer").getBoundingClientRect().top + window.scrollY - 320;
    let aside = document.querySelector(".post article aside")
    let articeltitle = document.querySelector(".post .articel-title")
    document.addEventListener("scroll", () => {
        console.log(footer, window.scrollY)
        if (window.scrollY >= footer) {
            aside.style.position = "absolute"
            aside.style.top = "auto"
            aside.style.bottom = "0px"

        } else if (window.scrollY >= article) {
            aside.style.position = "fixed"
            aside.style.top = "110px"
            aside.style.marginBottom = "0px"
            aside.style.width = "180px"
            aside.style.backgroundColor = "#fff"
            articeltitle.style.marginLeft = "285px";
        } else {
            aside.style.position = "relative"
            aside.style.top = ""
            aside.style.width = "180px"
            aside.style.backgroundColor = "#fff"
            articeltitle.style.marginLeft = "0";
        }
    })
}

// remove preloader
window.setTimeout(() => {
    document.querySelector(".loader").classList.add("remove")
}, 1300
)
function observingSections() {
    document.querySelectorAll("section").forEach(activeSec => {
        let activeLin = document.querySelector(`[data-navigation="${activeSec.id}"]`)
        let activeSecHeight = activeSec.getBoundingClientRect().height
        console.log(activeLin.innerHTML + "  ," + activeSec.id)
        if (activeSec.getBoundingClientRect().top >= -activeSecHeight  +50 && activeSec.getBoundingClientRect().top <= 0) {
            activeLin.classList.add("active");
        } else {
            activeLin.classList.remove("active");
        }
    })
}
