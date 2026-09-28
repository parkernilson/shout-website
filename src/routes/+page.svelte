<script lang="ts">
	import { resolve } from '$app/paths';
	import { site, signupConsent, confirmationMessage } from '$lib/config';
</script>

<svelte:head><title>{site.name} — Community SMS Announcements</title></svelte:head>

<h1 class="mb-4 text-3xl font-bold">Community announcements by text message</h1>
<p class="mb-8 text-lg text-gray-700">
	{site.name} is a free SMS service that sends local community announcements and reminders to neighbors
	who sign up. No ads, no marketing, no cost.
</p>

<section class="mb-8 rounded-lg border border-gray-200 p-6">
	<h2 class="mb-3 text-xl font-semibold">How to sign up</h2>
	<ol class="mb-4 list-decimal space-y-2 pl-5">
		<li>
			Write your name and mobile number on a {site.name} sign-up sheet at a community gathering.
		</li>
		<li>
			You'll get one text from <strong>{site.phoneNumber}</strong> asking you to confirm. Reply
			<strong>{site.confirmKeyword}</strong> to start receiving announcements.
		</li>
	</ol>
	<p class="mb-4 text-sm text-gray-600">
		If you don't reply {site.confirmKeyword}, you won't receive any further messages. See our
		<a href={resolve('/terms')} class="underline">Terms and Conditions</a> and
		<a href={resolve('/privacy')} class="underline">Privacy Policy</a>.
	</p>

	<h3 class="mb-2 font-semibold">Consent statement on the sign-up sheet</h3>
	<blockquote class="mb-4 border-l-4 border-gray-300 pl-4 text-sm text-gray-700">
		{signupConsent}
	</blockquote>

	<h3 class="mb-2 font-semibold">Confirmation text you'll receive</h3>
	<blockquote class="border-l-4 border-gray-300 pl-4 text-sm text-gray-700">
		{confirmationMessage}
	</blockquote>
</section>

<section>
	<h2 class="mb-3 text-xl font-semibold">How to stop</h2>
	<p>
		Reply <strong>STOP</strong> to any message to unsubscribe immediately. You'll receive one final
		confirmation message and no further texts. Changed your mind? Reply <strong>UNSTOP</strong> to rejoin.
	</p>
</section>
