const btn = document.querySelector('button');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
	callNotification();
});

function callNotification() {
	var toast = document.createElement('div');
	toast.textContent = "Hello Mr's  Hassan iqbal!!!!";

	container.append(toast);

	setTimeout(() => {
		toast.remove();
	}, 3000);
}
