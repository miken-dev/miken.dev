<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';

	import { Github } from 'lucide-svelte';	
	import { Twitter } from 'lucide-svelte'
	let { children } = $props();

	let activeURL = $derived(page.url.pathname);
</script>

<Navbar>
	<NavBrand href="/">
		<img src="https://placehold.co/200x100" class="me-3 h-6 sm:h-9" alt="miken.dev logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>miken.dev</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeURL}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/freelance">Freelance</NavLi>
		<NavLi href="/mobileapps">Mobile Apps</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact Me</NavLi>
		<NavLi href="https://github.com/miken-dev"><Github /></NavLi>
		<NavLi href="https://bsky.app/profile/miken.dev"><Twitter /> </NavLi>
		<NavLi><DarkMode /></NavLi>
	</NavUl>
</Navbar>

{@render children()}
