
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement;
    const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

   form.addEventListener('submit' , function (event){
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name =(document.getElementById('name') as HTMLInputElement).value;
    const fathername=(document.getElementById('fathername') as HTMLInputElement).value;
    const email= (document.getElementById('email') as HTMLInputElement).value;
    const mobile= (document.getElementById('mobile') as HTMLInputElement).value;
    const address= (document.getElementById('address') as HTMLInputElement).value;
    const education= (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience= (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills= (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeData = {
            name,
            fathername,
            email,
            mobile,
            address,
            education,
            experience,
            skills
            };
        
            localStorage.setItem(username, JSON.stringify(resumeData));
        
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
        }
            const shareableURL =
            `${window.location.origin}?username=${encodeURIComponent(username)}`;

            shareableLinkContainer.style.display = 'block';
            shareableLinkElement.href = shareableURL;
            shareableLinkElement.textContent = shareableURL;

            });
             downloadPdfButton.addEventListener('click', () => {
             window.print();
        
            });
            window.addEventListener('DOMContentLoaded', () => {
                const urlParams = new URLSearchParams(window.location.search);
                const username = urlParams.get('username');

                if (username) {

             const savedResumeData = localStorage.getItem(username);
               if (savedResumeData) {
               const resumeData = JSON.parse(savedResumeData);
               (document.getElementById('username') as HTMLInputElement).value =username;
                 (document.getElementById('name') as HTMLInputElement).value =resumeData.name;
                 (document.getElementById('fathername') as HTMLInputElement).value =resumeData.fathername;
                (document.getElementById('email') as HTMLInputElement).value =resumeData.email;
               (document.getElementById('mobile') as HTMLInputElement).value =resumeData.mobile;
               (document.getElementById('address') as HTMLInputElement).value =resumeData.address;
              (document.getElementById('education') as HTMLTextAreaElement).value =resumeData.education;
             (document.getElementById('experience') as HTMLTextAreaElement).value= resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value =resumeData.skills;
               }
             }
            });

