<script>
	import { onMount } from 'svelte';

	let endDate = new Date();
	endDate.setMonth(endDate.getMonth() + 3);

	let timeLeft = calculateTimeLeft();

	function calculateTimeLeft() {
		let now = new Date();
		let distance = endDate - now;

		let days = Math.floor(distance / (1000 * 60 * 60 * 24));

		return {
			days
		};
	}

	let interval;

	onMount(() => {
		interval = setInterval(() => {
			timeLeft = calculateTimeLeft();
			if (timeLeft.days <= 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

{timeLeft.days}
