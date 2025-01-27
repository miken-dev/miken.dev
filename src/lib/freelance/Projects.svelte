<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";

	const projects = [
		{
			title: "E-commerce Platform",
			description: "A full-featured online store with inventory management",
			image: "$assets/ui-placeholder.png",
			tags: ["React", "Node.js", "MongoDB"],
		},
		{
			title: "Healthcare App",
			description: "Mobile application for patient management",
			image: "$assets/ui-placeholder.png",
			tags: ["React Native", "Firebase", "TypeScript"],
		},
		{
			title: "Real Estate Portal",
			description: "Property listing and management system",
			image: "$assets/ui-placeholder.png",
			tags: ["Vue.js", "Laravel", "PostgreSQL"],
		},
	];
</script>

<section class="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 dark:from-purple-950/50 dark:to-blue-950/50">
	<!-- Decorative Elements -->
	<div class="absolute -right-24 -top-24 size-48 rounded-full bg-blue-500/10 blur-3xl"></div>
	<div class="absolute -left-24 -bottom-24 size-48 rounded-full bg-purple-500/10 blur-3xl"></div>

	<h2 class="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">Recent Projects</h2>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card class="group overflow-hidden border-0 bg-white/70 backdrop-blur-sm transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-gray-950/70">
				<div class="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
					<img src={project.image} alt={project.title} class="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
				</div>
				<CardContent class="p-6">
					<h3 class="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold text-transparent">
						{project.title}
					</h3>
					<p class="mb-4 text-sm">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<Badge class="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
								{tag}
							</Badge>
						{/each}
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>

