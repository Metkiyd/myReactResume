import portfolioImage1 from '../../images/portfolioWorks/1.webp';
import portfolioImage2 from '../../images/portfolioWorks/2.webp';
import portfolioImage6 from '../../images/portfolioWorks/6.webp';
import portfolioImage4 from '../../images/portfolioWorks/4.webp';
import portfolioImage5 from '../../images/portfolioWorks/5.webp';
import portfolioImage3 from '../../images/portfolioWorks/3.webp';

const works = [
	{
		id: 'spa-1',
		title: 'SPA #1',
		description: 'Тестовое задание, сверстать главную страницу сайта по картинке (без макета Figma)',
		link: 'https://github.com/Metkiyd/testAssignment',
		stack: ['react', 'BEM', 'scss'],
		image: portfolioImage1,
		
	},

	{
		id: 'spa-2',
		title: 'SPA #2',
		description: 'Моё резюме',
		link: 'https://github.com/Metkiyd/myReactResume',
		stack: ['react'],
		image: portfolioImage2,
	},
	{
		id: 'spa-3',
		title: 'SPA #3',
		description: 'Третий проект',
		link: '#',
		stack: ['react', 'redux', 'scss'],
		image: portfolioImage6,
	},
	{
		id: 'spa-4',
		title: 'SPA #4',
		description: 'Четвертый проект',
		link: '#',
		stack: ['react', 'redux', 'scss'],
		image: portfolioImage4,
	},
	{
		id: 'spa-5',
		title: 'SPA #5',
		description: 'Пятый проект',
		link: '#',
		stack: ['react', 'redux', 'scss'],
		image: portfolioImage5,
	},
	{
		id: 'spa-6',
		title: 'SPA #6',
		description: 'Шестрой проект',
		link: '#',
		stack: ['react', 'redux', 'scss'],
		image: portfolioImage3,
	}
]
export default works
