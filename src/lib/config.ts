// Site-wide details shown on the landing page, privacy policy, and terms.
export const site = {
	name: 'Shout',
	operator: 'Parker Nilson',
	url: 'shout.parkernilson.dev',
	// Toll-free SMS origination number (AWS End User Messaging, two-way enabled).
	phoneNumber: '+1 (844) 493-3651',
	contactEmail: 'parker.todd.nilson@gmail.com',
	confirmKeyword: 'YES',
	messageFrequency: 'up to 4 messages per month',
	lastUpdated: 'September 28, 2026'
};

// Consent wording printed at the top of the paper sign-up sheet. Keep it in sync with the
// physical sheet; it is also what AWS reviews as the opt-in workflow.
export const signupConsent = `By writing my mobile number on this sheet, I agree to receive recurring text messages from ${site.name} (run by ${site.operator}) with local community announcements and reminders. I will first get a text from ${site.phoneNumber} asking me to reply ${site.confirmKeyword} to confirm. Message frequency varies (${site.messageFrequency}). Message and data rates may apply. Reply HELP for help or STOP to opt out at any time. Consent is not a condition of any purchase. Terms: ${site.url}/terms. Privacy: ${site.url}/privacy.`;

// First (and only unconfirmed) text sent to each number from the sign-up sheet.
export const confirmationMessage = `${site.name}: Reply ${site.confirmKeyword} to get local community announcements & reminders. Up to 4 msgs/mo. Msg & data rates may apply. Reply HELP for help, STOP to opt out.`;
