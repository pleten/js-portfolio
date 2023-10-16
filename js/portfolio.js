const PORTFOLIO_ITEMS = [
	{
		img: 'img/portfolio/creativoBig.webp',
		title: 'Web Agency landing',
		link: 'https://pleten.github.io/web_agency_html/',
		description: 'Landing page of free Figma design for Web Agency',
		linkToDesign: 'https://www.figma.com/file/97CsqQlZcrfhePGIu1CJZx/Yumi-Web-agency-(Community)'
	}
]


function renderPortfolioList() {
	const portfolioList = document.querySelector('.portfolio_list');
	PORTFOLIO_ITEMS.forEach((portfolioItem) => {
		const li = document.createElement('li');
		li.classList.add('portfolio_item');
		portfolioList.append(li);
		const imgWrap = document.createElement('div');
		li.append(imgWrap);
		imgWrap.classList.add('portfolio_img_wrapper');
		const img = document.createElement('img');
		img.src = portfolioItem.img;
		img.alt = portfolioItem.title;
		imgWrap.append(img);
		const title = document.createElement('a');
		title.classList.add('portfolio_item_title');
		title.innerText = portfolioItem.title;
		title.setAttribute('href', portfolioItem.link);
		title.setAttribute('target', '_blank');
		li.append(title);
		const description = document.createElement('p');
		description.classList.add('portfolio_item_description');
		description.innerText = portfolioItem.description;
		li.append(description);
		if (portfolioItem.linkToDesign) {
			const designLink = document.createElement('a');
			designLink.classList.add('portfolio_item_design_link');
			designLink.innerText = 'Figma design';
			designLink.setAttribute('href', portfolioItem.linkToDesign);
			designLink.setAttribute('target', '_blank');
			li.append(designLink);
		}
	})
}

renderPortfolioList();
