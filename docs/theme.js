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
const savedTheme = localStorage.getItem('theme');
if (savedTheme != 'auto' && savedTheme != 'light' && savedTheme != 'dark') localStorage.removeItem('theme')
else {
	theme.setAttribute('href', `${savedTheme}.css`)

	if (savedTheme != 'auto') auto.classList.add('hidden')
	if (savedTheme == 'light') light.classList.remove('hidden')
	if (savedTheme == 'dark') dark.classList.remove('hidden')
}