let grade = document.querySelectorAll(".button__rating");

let grade1 = grade[0]
let grade2 = grade[1]
let grade3 = grade[2]
let grade4 = grade[3]
let grade5 = grade[4] 

console.log(document.querySelector("span"))

const GRADECLICKER = (grades, index) => {
    grades.addEventListener("click", () => {
        grade1.classList.remove("button__rating--active");
        grade2.classList.remove("button__rating--active");
        grade3.classList.remove("button__rating--active");
        grade4.classList.remove("button__rating--active");
        grade5.classList.remove("button__rating--active");

        grade1.classList.add("hover--pos");
        grade2.classList.add("hover--pos");
        grade3.classList.add("hover--pos");
        grade4.classList.add("hover--pos");
        grade5.classList.add("hover--pos");

        grades.classList.add("button__rating--active");
        grades.classList.remove("hover--pos");

        document.querySelector("span").innerText = index;
    })
}

GRADECLICKER(grade1, "1")
GRADECLICKER(grade2, "2")
GRADECLICKER(grade3, "3")
GRADECLICKER(grade4, "4")
GRADECLICKER(grade5, "5")

let submitButton = document.querySelector(".button__submit")

submitButton.addEventListener("click", () => {
    if(document.querySelector("span").innerText != "") {
        document.querySelector(".startingscreen").classList.add("off")
        document.querySelector(".endingscreen").classList.remove("off")
    }
})

