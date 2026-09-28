<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '$lib/config';
</script>

<svelte:head><title>Terms and Conditions — {site.name}</title></svelte:head>

<article class="space-y-4">
	<h1 class="text-3xl font-bold">Terms and Conditions</h1>
	<p class="text-sm text-gray-500">Last updated: {site.lastUpdated}</p>

	<h2 class="pt-2 text-xl font-semibold">The service</h2>
	<p>
		{site.name} is a free, non-commercial SMS service operated personally by {site.operator} that sends
		announcements and reminders to members of the local community. It does not send advertising or marketing
		messages and is not paid for by anyone.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Opting in</h2>
	<p>
		You opt in by giving us your mobile number in one of two ways: adding it to a {site.name} sign-up
		sheet (paper or online) that displays our consent statement, or telling {site.operator} in person
		after hearing our sign-up statement read aloud. Both statements are shown on our
		<a href={resolve('/')} class="underline">home page</a>. Either way, we then send one text from {site.phoneNumber}
		asking you to reply
		<strong>{site.confirmKeyword}</strong>. Only after you reply {site.confirmKeyword} will you receive
		recurring announcement and reminder messages at that number. If you don't reply, we won't text you
		again. Consent is not a condition of any purchase.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Message frequency and cost</h2>
	<p>
		Message frequency varies ({site.messageFrequency}). {site.name} is free, but message and data rates
		may apply according to your mobile plan.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Opting out</h2>
	<p>
		Reply <strong>STOP</strong> to any message at any time to cancel. You will receive one
		confirmation message and no further messages. To rejoin, reply <strong>UNSTOP</strong>.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Help</h2>
	<p>
		Reply <strong>HELP</strong> for help, or email
		<a href="mailto:{site.contactEmail}" class="underline">{site.contactEmail}</a>.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Disclaimers</h2>
	<p>
		Carriers are not liable for delayed or undelivered messages. The service is provided "as is" and
		may be changed or discontinued at any time.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Privacy</h2>
	<p>
		See our <a href={resolve('/privacy')} class="underline">Privacy Policy</a> for how your information
		is handled.
	</p>
</article>
