const SKILLS_LIST = [
	{
		name: 'JavaScript',
		icon: 'img/skills/javascript-logo.png',
		level: {
			description: 'Senior',
			value: 4
		}
	},
	{
		name: 'TypeScript',
		icon: 'img/skills/typescript.png',
		level: {
			description: 'Major',
			value: 3
		}
	},
	{
		name: 'Automation Testing',
		icon: 'img/skills/automation.png',
		level: {
			description: 'Expert',
			value: 5
		}
	},
	{
		name: 'Webdriver.IO',
		icon: 'img/skills/wdio.svg',
		level: {
			description: 'Expert',
			value: 5
		}
	},
	{
		name: 'HTML5',
		icon: 'img/skills/html5.png',
		level: {
			description: 'Major',
			value: 3
		}
	},
	{
		name: 'CSS3',
		icon: 'img/skills/css-3.png',
		level: {
			description: 'Major',
			value: 3
		}
	},
	{
		name: 'Node.Js',
		icon: 'img/skills/nodejs.png',
		level: {
			description: 'Basic',
			value: 2
		}
	},
	{
		name: 'React',
		icon: 'img/skills/reactjs.svg',
		level: {
			description: 'Basic',
			value: 2
		}
	},
	{
		name: 'Vue.js',
		icon: 'img/skills/vuejs.png',
		level: {
			description: 'Familiarized',
			value: 1
		}
	},
	{
		name: 'Jenkins',
		icon: 'img/skills/jenkins.png',
		level: {
			description: 'Major',
			value: 3
		}
	},
	{
		name: 'Git',
		icon: 'img/skills/git.png',
		level: {
			description: 'Senior',
			value: 4
		}
	},
	{
		name: 'SQL',
		icon: 'img/skills/sql.svg',
		level: {
			description: 'Major',
			value: 3
		}
	},
]

function renderSkills() {
	const skillsContainer = document.querySelector('.technical_skills_container');
	SKILLS_LIST.forEach(skill => {
		const card = document.createElement('div');
		card.classList.add('technical_skill_card');
		skillsContainer.append(card);
		const skillWrapper = document.createElement('div');
		skillWrapper.classList.add('skill_icon_wrapper');
		card.append(skillWrapper);
		const img = document.createElement('img');
		img.src = skill.icon;
		img.alt = `${skill.name} icon`;
		skillWrapper.append(img);
		const skillName = document.createElement('p');
		skillName.classList.add('skill_name');
		skillName.innerText = skill.name;
		card.append(skillName);
		const skillLevel = document.createElement('p');
		skillLevel.classList.add('skill_level_description');
		skillLevel.innerText = skill.level.description;
		card.append(skillLevel);
		const starRating = document.createElement('div');
		starRating.classList.add('skill_level_visualization');
		card.append(starRating);
		let starRatingValue = skill.level.value;
		for (let i = 0; i<5; i+=1) {
			const star = document.createElement('div');
			if(starRatingValue>0) {
				star.classList.add('filled_star');
				starRatingValue-=1;
			} else {
				star.classList.add('empty_star');
			}
			starRating.append(star);
		}
	})
}

renderSkills();
