
function toggleSection(toggleId:string): void {
    const button = document.getElementById(toggleId);
    
    if (button) {
         if (button.classList.contains('hidden')) {
             button.classList.remove('hidden');
         } else {
             button.classList.add('hidden'); 
         }
     }
 }
 function toggleAllSections(): void {
     toggleSection('skills');
     toggleSection('education');
     toggleSection('experience');
 }
