<script lang="ts">
	// Generate random positions for the floating elements
	const elements = Array.from({ length: 8 }, (_, i) => ({
		id: i,
		size: Math.random() * 200 + 100, 
		x: Math.random() * 100,
		y: Math.random() * 100,
		duration: Math.random() * 15 + 20, 
		delay: Math.random() * -20,
	}));
</script>

<div class="absolute inset-0 overflow-hidden">
	{#each elements as element (element.id)}
		<div
			class="absolute rounded-full bg-[#166EA2]/10 dark:bg-[#3ba7d9]/10 blur-3xl"
			style="
				width: {element.size}px;
				height: {element.size}px;
				left: {element.x}%;
				top: {element.y}%;
				animation: float{element.id} {element.duration}s infinite ease-in-out {element.delay}s
			"
		/>
	{/each}
</div>

<style>
	@keyframes float0 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(100px, 50px) scale(1.1);
		}
	}
	@keyframes float1 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-100px, -50px) scale(0.9);
		}
	}
	@keyframes float2 {
		0%,
		100% {
			transform: translate(0, 0) scale(0.9);
		}
		50% {
			transform: translate(80px, -80px) scale(1);
		}
	}
	@keyframes float3 {
		0%,
		100% {
			transform: translate(0, 0) scale(1.1);
		}
		50% {
			transform: translate(-70px, 70px) scale(1);
		}
	}
	@keyframes float4 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(120px, -60px) scale(1.1);
		}
	}
	@keyframes float5 {
		0%,
		100% {
			transform: translate(0, 0) scale(0.9);
		}
		50% {
			transform: translate(-90px, 90px) scale(1);
		}
	}
	@keyframes float6 {
		0%,
		100% {
			transform: translate(0, 0) scale(1.1);
		}
		50% {
			transform: translate(70px, 70px) scale(1);
		}
	}
	@keyframes float7 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-120px, -40px) scale(0.9);
		}
	}
</style>

