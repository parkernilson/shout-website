<script lang="ts">
	import { site } from '$lib/config';
</script>

<svelte:head><title>Privacy Policy — {site.name}</title></svelte:head>

<article class="space-y-4">
	<h1 class="text-3xl font-bold">Privacy Policy</h1>
	<p class="text-sm text-gray-500">Last updated: {site.lastUpdated}</p>

	<p>
		{site.name} is a free, non-commercial SMS announcement service operated personally by {site.operator}.
		This policy explains what information we collect and how it is used.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Information we collect</h2>
	<p>
		We collect only the name and mobile phone number you write on the sign-up sheet, and a record of
		your consent and opt-out requests (such as the date you signed up, your {site.confirmKeyword} reply,
		or a STOP reply). Paper sign-up sheets are kept privately by {site.operator}.
	</p>

	<h2 class="pt-2 text-xl font-semibold">How we use it</h2>
	<p>
		Your phone number is used only to send you {site.name} announcements and reminders and to respond
		to {site.confirmKeyword}, HELP, and STOP replies.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Sharing</h2>
	<p>
		We do not sell, rent, or share your information with anyone. No mobile information will be
		shared with third parties or affiliates for marketing or promotional purposes. Text messaging
		opt-in data and consent will not be shared with any third parties. Your number is processed only
		by our SMS provider (Amazon Web Services) as needed to send and receive messages.
	</p>

	<h2 class="pt-2 text-xl font-semibold">Retention and deletion</h2>
	<p>
		When you reply STOP, you are removed from the announcement list. We may keep a record of the
		opt-out so we don't message you again. To have your information deleted entirely, email
		<a href="mailto:{site.contactEmail}" class="underline">{site.contactEmail}</a>.
	</p>

	<h2 class="pt-2 text-xl font-semibold">This website</h2>
	<p>This website does not use cookies, analytics, or tracking, and does not collect any data.</p>

	<h2 class="pt-2 text-xl font-semibold">Contact</h2>
	<p>
		Questions? Email <a href="mailto:{site.contactEmail}" class="underline">{site.contactEmail}</a>.
	</p>
</article>
