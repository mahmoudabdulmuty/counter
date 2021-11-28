let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const classList = e.currentTarget.classList;
		classList.contains('decrease')
			? count--
			: classList.contains('increase')
			? count++
			: (count = 0);
		value.textContent = count;
		count > 0
			? (value.style.color = 'green')
			: count < 0
			? (value.style.color = 'red')
			: (value.style.color = 'black');
	});
});
