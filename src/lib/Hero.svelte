<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { ArrowRightIcon, SparklesIcon } from 'lucide-svelte';

	const stats = [
		{
			value: 'Most Major Platforms',
			label: 'iOS, iPadOS, watchOS, tvOS, macOS, Android and the web'
		},
		{
			value: 'Hundreds of Clients',
			label:
				"Throughout my career, I've helped clients ranging from Fortune 500 to the smallest of small businesses"
		},
		{
			value: 'Full Stack',
			label: 'I can write your front-end, back-end, and everything in between'
		}
	];
</script>

<section class=" bg-background relative h-lvh overflow-hidden dark:bg-[#030712]">
	<!-- Animated Blobs -->
	<div class="absolute inset-0">
		<!-- Primary Blob -->
		<div class="animate-blob absolute left-1/4 top-1/4 -translate-x-1/2 opacity-70">
			<div class="h-[40rem] w-[40rem] rounded-full bg-[#166EA2]/50 blur-3xl dark:bg-[#00A3FF]/40" />
		</div>
		<!-- Accent Blob -->
		<div
			class="animate-blob animation-delay-2000 absolute right-1/4 top-1/2 translate-x-1/2 opacity-70"
		>
			<div
				class="h-[35rem] w-[35rem] rounded-full bg-purple-600/40 blur-3xl dark:bg-fuchsia-500/40"
			/>
		</div>
		<!-- Secondary Blob -->
		<div
			class="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/2 -translate-x-1/2 opacity-70"
		>
			<div class="h-[45rem] w-[45rem] rounded-full bg-blue-500/40 blur-3xl dark:bg-indigo-500/40" />
		</div>
	</div>

	<!-- Gradient Overlay -->
	<div
		class="via-background/90 to-background absolute inset-0 bg-gradient-to-br from-transparent dark:from-transparent dark:via-[#030712]/90 dark:to-[#030712]"
	/>

	<!-- Animated Dots -->
	<div class="absolute inset-0">

		<div class="relative h-full w-full">
			{#each Array(300) as _, i (i)}
				{@const x = Math.random() * 100}
				{@const y = Math.random() * 100}
				{@const size = Math.random() * 3.7 + 1}
				{@const duration = Math.random() * 10 + 15}
				{@const delay = Math.random() * -20}
				{@const pulseDelay = Math.random() * 5}
				<div
					class="absolute rounded-full bg-[#166EA2]/30 dark:bg-[#00A3FF]/30 animate-pulse"
					style="
					left: {x}%;
						top: {y}%;
						width: {size}px;
					height: {size}px;
					animation: pulse {duration}s infinite {pulseDelay}s, float {duration}s infinite {delay}s;
					transform-origin: center;
					"
				/>
			{/each}
		</div>
	</div>

	<style>
	@keyframes float {
	0%,
	100% {
		transform: translate(0, 0);
	}
	25% {
		transform: translate(50px, 50px);
	}
	50% {
		transform: translate(0, 100px);
	}
	75% {
		transform: translate(-50px, 50px);
	}
	}

	@keyframes pulse {
	0%,
	100% {
		opacity: 0.3;
		transform: scale(1);
	}
	50% {
		opacity: 1.0;
		transform: scale(1.5);
	}
	}
	</style>

	<div class="container relative mx-auto px-4 py-24 sm:py-40">
		<div class="flex flex-col items-center gap-10 text-center">
			<!-- Main heading -->
			<div
				in:fly={{ y: -200, duration: 1500, delay: 200 }}
				class="bg-background/30 group flex items-center gap-3 rounded-full border border-[#166EA2]/20 px-5 py-2 backdrop-blur-sm transition-transform duration-500 hover:scale-110 dark:bg-[#030712]/30"
			>
				<SparklesIcon class="size-6 text-[#166EA2]" />
				<span class="text-sm font-semibold text-[#166EA2] dark:text-[#00A3FF]"
					>Indie and Freelance App Development</span
				>
				<SparklesIcon class="size-6  text-[#166EA2]" />
			</div>

			<!-- Hero title -->
			<h1
				in:fly={{ y: 200, duration: 1500, delay: 400 }}
				class="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl dark:text-slate-50"
			>
				Hey, I'm Mike, and I make
				<span class="relative mt-2 block text-[#166EA2] dark:text-[#00A3FF]">
					Native and Web Apps
					<span
						class="absolute bottom-0 left-0 h-3 w-full animate-bounce bg-[#166EA2]/20 dark:bg-[#00A3FF]/20"
					/>
				</span>
			</h1>

			<!-- Description -->
			<p
				in:fly={{ y: 200, duration: 1500, delay: 600 }}
				class="text-muted-foreground max-w-2xl text-xl dark:text-slate-50"
			>
				I build fast, native mobile apps using SwiftUI and Jetpack Compose, and Web Apps using
				SvelteKit. <br />Reach out below for help with your project!
			</p>

			<!-- CTA buttons -->
			<div
				in:fly={{ y: 200, duration: 1500, delay: 800 }}
				class="flex flex-wrap items-center justify-center gap-6"
			>
				<button
					class="group flex h-14 items-center rounded-md bg-[#166EA2] px-8 text-lg text-white transition-transform duration-500 hover:scale-110 hover:bg-[#166EA2]/90 dark:bg-[#00A3FF] dark:hover:bg-[#00A3FF]/90"
				>
					<span>Contact Me</span>
					<ArrowRightIcon
						class="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-4"
					/>
				</button>
				<button
					class="h-14 rounded-md border-2 border-[#166EA2] px-8 text-lg text-[#166EA2] transition-transform duration-500 hover:scale-110 hover:bg-[#166EA2]/10 dark:border-[#00A3FF] dark:text-[#00A3FF] dark:hover:bg-[#00A3FF]/20"
					>See my apps</button
				>
			</div>

			<!-- Stats -->
			<div
				in:fly={{ y: 200, duration: 1500, delay: 1000 }}
				class="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12"
			>
				{#each stats as stat}
					<div
						class="bg-background/30 group relative rounded-xl border border-[#166EA2]/20 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-125 hover:bg-[#166EA2]/10 dark:bg-[#030712]/30 dark:hover:bg-[#2C8ED8]/10"
					>
						<div class="text-4xl font-bold text-[#166EA2] dark:text-[#00A3FF]">{stat.value}</div>
						<div
							class="text-muted-foreground group-hover:text-foreground mt-2 text-base dark:text-slate-50"
						>
							{stat.label}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(50px, 50px);
		}
		50% {
			transform: translate(0, 100px);
		}
		75% {
			transform: translate(-50px, 50px);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.5);
		}
	}

	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(300px, -300px) scale(1.5);
		}
		66% {
			transform: translate(-300px, 300px) scale(0.5);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}
	.animate-blob {
		animation: blob 25s infinite cubic-bezier(0.4, 0, 0.2, 1);
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
