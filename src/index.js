import './index.css'

console.log('Текст в консоль')

const decorations = document.querySelectorAll('.decorations img')

decorations.forEach((decoration) => {
	decoration.dataset.offsetMultiplier = Math.random() * 0.4 + 0.1 // от 0.1 до 0.5
})

document.addEventListener('mousemove', (e) => {
	const { clientX: mouseX, clientY: mouseY } = e

	decorations.forEach((decoration) => {
		const { left, top, width, height } = decoration.getBoundingClientRect()
		const offsetMultiplier = parseFloat(decoration.dataset.offsetMultiplier)

		const offsetX =
			((mouseX - (left + width / 2)) / window.innerWidth) *
			20 *
			offsetMultiplier
		const offsetY =
			((mouseY - (top + height / 2)) / window.innerHeight) *
			20 *
			offsetMultiplier

		decoration.style.transform =
			'translate(' + offsetX + 'px, ' + offsetY + 'px)'
	})
})
