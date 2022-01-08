// console.log("test");
var getStudentsBtn = document.getElementById("getStudentsBtn")
var getTopicsBtn = document.getElementById("getTopicsBtn")
var getInstructorsBtn = document.getElementById("getInstructorsBtn")
var contentContainer = document.getElementById("contentContainer")




// Student Information: https://student-project-api.herokuapp.com/students
var getStudentInformation = function() {

    fetch("https://student-project-api.herokuapp.com/students")

    .then(response => {
        if (response.ok) {
            response.json().then(function(data) {
                console.log("Student data", data);
                displayContent(data)
            })
        } else {
            alert("Student information not found");
        }
    })
    .catch(err => {
        console.error(err);
    })
}

// List of Instructors: https://student-project-api.herokuapp.com/instructors
var getInstructors = function() {

    fetch("https://student-project-api.herokuapp.com/instructors")

    .then(response => {
        if (response.ok) {
            response.json().then(function(data) {
                console.log("Instructors data", data);
                displayContent(data)
            })
        } else {
            alert("Student information not found");
        }
    })
    .catch(err => {
        console.error(err);
    })
}

// List of Topics: https://student-project-api.herokuapp.com/topics
var getTopics = function() {

    fetch("https://student-project-api.herokuapp.com/topics")

    .then(response => {
        if (response.ok) {
            response.json().then(function(data) {
                console.log("Topics data", data);
                displayContent(data)
            })
        } else {
            alert("Student information not found");
        }
    })
    .catch(err => {
        console.error(err);
    })
}

var displayContent = function(data) {
    contentContainer.innerHTML = '';

    for (let index = 0; index < data.length; index++) {
        var divEl = document.createElement("div")

        if (data[index].topic) {
            divEl.textContent = data[index].topic
        } else {
            divEl.textContent = data[index].first_name + ' ' + data[index].last_name; 
        }
        divEl.className = "content-display"
        contentContainer.appendChild(divEl)

    }
    // loop through data
    //  and create div for each item
    //  append text to each 
    //  append child
}



getStudentsBtn.addEventListener('click',getStudentInformation)
getTopicsBtn.addEventListener('click',getTopics)
getInstructorsBtn.addEventListener('click',getInstructors)

