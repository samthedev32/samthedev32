// Theme Switching
const theme = document.getElementById('theme');

const auto = document.getElementById('auto');
const light = document.getElementById('light');
const dark = document.getElementById('dark');

auto.addEventListener('click', () => {
	theme.setAttribute('href', 'light.css')

	auto.classList.add('hidden')
	light.classList.remove('hidden')
	dark.classList.add('hidden')

	localStorage.setItem('theme', 'light');
})

light.addEventListener('click', () => {
	theme.setAttribute('href', 'dark.css')

	auto.classList.add('hidden')
	light.classList.add('hidden')
	dark.classList.remove('hidden')

	localStorage.setItem('theme', 'dark');
})

dark.addEventListener('click', () => {
	theme.setAttribute('href', 'auto.css')

	auto.classList.remove('hidden')
	light.classList.add('hidden')
	dark.classList.add('hidden')

	localStorage.setItem('theme', 'auto');
})

// Set Theme
const VALID_THEMES = ['auto', 'light', 'dark'];
const savedTheme = localStorage.getItem('theme');
if (!VALID_THEMES.includes(savedTheme)) {
	localStorage.removeItem('theme');
} else {
	theme.setAttribute('href', `${savedTheme}.css`);

	auto.classList.toggle('hidden', savedTheme !== 'auto');
	light.classList.toggle('hidden', savedTheme !== 'light');
	dark.classList.toggle('hidden', savedTheme !== 'dark');
}