<script lang="ts">
	import { Input, Label, Textarea, Button } from 'flowbite-svelte';
</script>

<main class="dark:bg-slate-800 py-60 px-96 ">
	<h1 class="text-xl dark:text-slate-50">Reach out!</h1>
	<p class="dark:text-slate-50 pb-8">If you're interested in hiring me as a consultant, or just have some feedback on one of my apps, feel free to reach out below!</p>
	<form name="contact" method="POST" data-netlify="true">
		<Label for="name" class="block mb-2">Name</Label>
		<Input id="name" />

		<Label for="companyname" class="block mb-2 pt-6">Company Name</Label>
		<Input id="companyname" />
		<Label for="emailaddress" class="block mb-2 pt-6">Email Address</Label>
		<Input id="emailaddress" />
		<Label for="message" class="block mb-2 pt-6">Your message</Label>
		<Textarea id="message" />
		<Button type="submit" form="contact" value="Submit" class="mt-6">Submit</Button> 
	</form>
</main>
