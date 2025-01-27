<script>
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
import { GithubSolid, TwitterSolid } from 'flowbite-svelte-icons';
import Logo from '$lib/Logo.svg'

</script>

<Footer footerType="socialmedia" class="dark:bg-slate-900">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand href="/" src="{Logo}" alt="miken.dev logo" name="miken.dev" />
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Apps</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/">Mobile Apps</FooterLink>
					<FooterLink liClass="mb-4" href="/">Web Apps</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Freelance</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/">Information</FooterLink>
					<FooterLink liClass="mb-4" href="/">Contact Me</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="miken.dev" />
		<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
			<FooterIcon href="https://bsky.app/profile/miken.dev">
				<TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
			</FooterIcon>
			<FooterIcon href="https://github.com/miken-dev">
				<GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
			</FooterIcon>
		</div>
	</div>
</Footer>
