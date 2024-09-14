function toggleSection(toggleId) {
    var button = document.getElementById(toggleId);
    if (button) {
        if (button.classList.contains('hidden')) {
            button.classList.remove('hidden');
        }
        else {
            button.classList.add('hidden');
        }
    }
}
function toggleAllSections() {
    toggleSection('skills');
    toggleSection('education');
    toggleSection('experience');
}
