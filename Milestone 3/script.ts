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
       <h2>Resume</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Father Name:</strong> ${fathername}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Mobile:</strong> ${mobile}</p>
       <p><strong>Address:</strong> ${address}</p>
       
       <h3>Education</h3>
       <p>${education}</p>

       <h3>Experience</h3>
       <p>${experience}</p>

       <h3>Skills</h3>
       <p>${skills}</p>`;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The resume output element is missing");
        }
    }
});
