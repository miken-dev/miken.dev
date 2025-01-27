<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { MailIcon, PhoneIcon, ClockIcon } from "lucide-svelte";

	const contacts = [
		{
			icon: MailIcon,
			title: "Email",
			value: "contact@devagency.com",
		},
		{
			icon: PhoneIcon,
			title: "Phone",
			value: "+1 (555) 123-4567",
		},
		{
			icon: ClockIcon,
			title: "Business Hours",
			value: "Mon - Fri, 9:00 - 17:00",
		},
	];

	const onsubmit = (e: Event) => {
		e.preventDefault();
		// Handle form submission
	};
</script>

<section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-blue-950/50 dark:to-purple-950/50">
	<!-- Decorative Elements -->
	<div class="absolute -left-24 -top-24 size-48 rounded-full bg-blue-500/10 blur-3xl"></div>
	<div class="absolute -right-24 -bottom-24 size-48 rounded-full bg-purple-500/10 blur-3xl"></div>

	<h2 class="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">Start Your Project</h2>

	<div class="grid gap-8 lg:grid-cols-2">
		<Card class="border-0 bg-white/70 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-gray-950/70">
			<CardHeader>
				<CardTitle class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project Details</CardTitle>
				<CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
			</CardHeader>
			<CardContent>
				<form class="flex flex-col gap-4" {onsubmit}>
					<Input type="text" placeholder="Your Name" required class="border-blue-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800" />
					<Input type="email" placeholder="Email Address" required class="border-blue-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800" />
					<Input type="tel" placeholder="Phone Number" class="border-blue-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800" />
					<Textarea placeholder="Tell us about your project" required class="min-h-[150px] border-blue-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800" />
					<Button type="submit" class="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">Send Request</Button>
				</form>
			</CardContent>
		</Card>

		<div class="flex flex-col gap-6">
			{#each contacts as contact}
				<Card class="border-0 bg-white/70 backdrop-blur-sm transition duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:bg-gray-950/70">
					<CardContent class="flex items-center gap-4 p-6">
						<div class="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3">
							<svelte:component this={contact.icon} class="size-6 text-white" />
						</div>
						<div>
							<h3 class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent">
								{contact.title}
							</h3>
							<p>{contact.value}</p>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

