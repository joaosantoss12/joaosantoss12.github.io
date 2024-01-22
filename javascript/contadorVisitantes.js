const countEl = document.getElementById('contador');
const countEl2 = document.getElementById('contador2');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/valek/d96003cb-1dd0-41da-9073-94f1d178332e/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML =res.value + ' VISITORS';
		countEl2.innerHTML =res.value + ' VISITORS';
	})
}