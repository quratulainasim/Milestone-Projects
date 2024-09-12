var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var fathernameElement = document.getElementById('fathername');
    var emailElement = document.getElementById('email');
    var mobileElement = document.getElementById('mobile');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && fathernameElement && emailElement && mobileElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var fathername = fathernameElement.value;
        var email = emailElement.value;
        var mobile = mobileElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n       <h2>Resume</h2>\n       <p><strong>Name:</strong> ".concat(name_1, "</p>\n       <p><strong>Father Name:</strong> ").concat(fathername, "</p>\n       <p><strong>Email:</strong> ").concat(email, "</p>\n       <p><strong>Mobile:</strong> ").concat(mobile, "</p>\n       <p><strong>Address:</strong> ").concat(address, "</p>\n       \n       <h3>Education</h3>\n       <p>").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p>").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
});
