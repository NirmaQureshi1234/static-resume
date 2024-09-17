var toggleEducationButton = document.getElementById('toggleEducation');
var educationSection = document.getElementById('education');
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
var toggleExperienceButton = document.getElementById('toggleExperience');
var experienceSection = document.getElementById('experience');
toggleEducationButton.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    }
    else {
        educationSection.style.display = 'none';
    }
});
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
toggleExperienceButton.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    }
    else {
        experienceSection.style.display = 'none';
    }
});
