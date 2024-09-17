const toggleEducationButton = document.getElementById('toggleEducation') as HTMLButtonElement;
const educationSection = document.getElementById('education') as HTMLElement;
const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
const toggleExperienceButton = document.getElementById('toggleExperience') as HTMLButtonElement;
const experienceSection = document.getElementById('experience') as HTMLElement;

toggleEducationButton.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
    } else {
        educationSection.style.display = 'none';
    }
});

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});

toggleExperienceButton.addEventListener('click', () => {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    } else {
        experienceSection.style.display = 'none';
    }
});
