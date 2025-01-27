<script lang="ts">
	import { CircleCheckBigIcon, ClockIcon, CodeIcon, HeadphonesIcon } from "lucide-svelte";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";

	const benefits = [
		{
			icon: ClockIcon,
			title: "Fast Delivery",
			description: "Quick turnaround times without compromising on quality",
		},
		{
			icon: CodeIcon,
			title: "Clean Code",
			description: "Maintainable and scalable code following best practices",
		},
		{
			icon: HeadphonesIcon,
			title: "24/7 Support",
			description: "Dedicated support team available around the clock",
		},
		{
			icon: CircleCheckBigIcon,
			title: "Quality Assured",
			description: "Rigorous testing and quality assurance processes",
		},
	];
</script>

<section class="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-blue-950/50 dark:to-purple-950/50">
	<!-- Decorative Elements -->
	<div class="absolute -left-24 -top-24 size-48 rounded-full bg-blue-500/10 blur-3xl"></div>
	<div class="absolute -right-24 -bottom-24 size-48 rounded-full bg-purple-500/10 blur-3xl"></div>

	<h2 class="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">Why Work With Us</h2>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each benefits as benefit}
			<Card class="group border-0 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-gray-950/70">
				<CardHeader>
					<div class="mb-2 inline-block rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-2">
						<svelte:component this={benefit.icon} class="size-5 text-white" />
					</div>
					<CardTitle class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-lg text-transparent">
						{benefit.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>{benefit.description}</CardDescription>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>

