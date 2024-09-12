document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fathernameElement = document.getElementById('fathername') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const mobileElement = document.getElementById('mobile') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (nameElement && fathernameElement && emailElement && mobileElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const fathername = fathernameElement.value;
        const email = emailElement.value;
        const mobile = mobileElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

       const resumeOutput = `
       <h2>Editable Resume</h2>
       <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
       <p><strong>Father Name:</strong><span contenteditable="true">${fathername}</span></p>
       <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
       <p><strong>Mobile:</strong><span contenteditable="true">${mobile}</span></p>
       <p><strong>Address:</strong><span contenteditable="true">${address}</span></p>
       
       <h3>Education</h3>
       <p contenteditable="true">${education}</p>

       <h3>Experience</h3>
       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>
       <p contenteditable="true">${skills}</p>`;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing");
        }
    }
});
