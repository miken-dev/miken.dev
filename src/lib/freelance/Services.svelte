<script lang="ts">
	import { CodeIcon, ServerIcon, SmartphoneIcon, PencilRulerIcon } from "lucide-svelte";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";

	const services = [
		{
			icon: CodeIcon,
			title: "Web Development",
			description: "Custom websites and web applications built with modern technologies and best practices.",
			features: ["Svelte Applications", "E-commerce Solutions", "Progressive Web Apps", "CMS Integration"],
		},
		{
			icon: SmartphoneIcon,
			title: "Apple Platform Development",
			description: "Native  apps for all Apple platforms.",
			features: ["Fully native with SwiftUI and UIKit", "iOS, iPadOS, macOS, tvOS, watchOS, and visionOS", "We can create a native Kotlin Android app, based on your iOS source code", "App Store Deployment"],
		},
		{
			icon: ServerIcon,
			title: "Backend Development",
			description: "Scalable and secure backend solutions to power your applications.",
			features: ["API Development", "Database Design", "Cloud Services", "Server Management"],
		},
		{
			icon: PencilRulerIcon,
			title: "UI/UX Design",
			description: "User-centered design that creates engaging and intuitive experiences.",
			features: ["Interface Design", "User Research", "Prototyping", "Design Systems"],
		},
	];
</script>

<section class="mb-24 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-blue-950/50 dark:to-purple-950/50">
	<div class="grid gap-8 md:grid-cols-2">
		{#each services as service, i}
			<Card class="group overflow-hidden border-0 bg-white/70 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-gray-950/70">
				<CardHeader>
					<div class="mb-4 inline-block rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3">
						<svelte:component this={service.icon} class="size-6 text-white" />
					</div>
					<CardTitle class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl text-transparent">
						{service.title}
					</CardTitle>
					<CardDescription class="mt-2">{service.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<ul class="grid grid-cols-2 gap-2">
						{#each service.features as feature}
							<li class="flex items-center gap-2 text-sm">
								<div class="size-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
								{feature}
							</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>

