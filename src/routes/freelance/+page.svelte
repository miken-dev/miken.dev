<script lang="ts">
	import Services from "$lib/freelance/Services.svelte";
	import WhyChooseUs from "$lib/freelance/WhyChooseUs.svelte";
	import Projects from "$lib/freelance/Projects.svelte";
	import Contact from "$lib/freelance/Contact.svelte";

	// Theme toggle state

	// Toggle theme function
</script>

<div class="min-h-screen w-full bg-background text-foreground">
	<main class="container mx-auto px-4 py-12">
		<div class="mb-12 flex items-center justify-between">
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Development Services</h1>
		</div>
		<!-- <Services /> -->
		<WhyChooseUs />
		<Projects />
		<Contact />
	</main>
</div>

