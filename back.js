let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener("click", () => {
        let shop = document.querySelector(".shoppinglist");
        let temp = item.querySelector(".info").querySelector(".amount").querySelector(".add");
        temp.style.display = "none";
        shop.append(item);
        console.log(item);
    });
});

let courses = document.querySelector('.courses');
let instructors = document.querySelector('.instructors');

let course = document.querySelector('.course');
let tutor = document.querySelector('.tutors');

// Using getComputedStyle for a more reliable background color check
course.addEventListener("click", () => {
    let courseBgColor = getComputedStyle(course).backgroundColor;
    if (courseBgColor === "rgb(228, 232, 235)") { // "#E4E8EB" in rgb
        course.style.backgroundColor = "#2D2F31";
        instructors.style.display = "none";
        courses.style.display = "flex";
        tutor.style.backgroundColor = "#E4E8EB";
        tutor.style.color = "black";
        course.style.color = "aliceblue";
    }
});

tutor.addEventListener("click", () => {
    let tutorBgColor = getComputedStyle(tutor).backgroundColor;
    if (tutorBgColor === "rgb(228, 232, 235)") { // "#E4E8EB" in rgb
        tutor.style.backgroundColor = "#2D2F31";
        courses.style.display = "none";
        instructors.style.display = "flex";
        course.style.backgroundColor = "#E4E8EB";
        course.style.color = "black";
        tutor.style.color = "aliceblue";
    }
});

