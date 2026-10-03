// Site-wide details shown on the landing page, privacy policy, and terms.
export const site = {
	name: 'Shout',
	// Operator's full legal name; the footer's "operated by" line links it to the Shout brand.
	operator: 'Parker Todd Nilson',
	url: 'shout.parkernilson.dev',
	// Toll-free SMS origination number (AWS End User Messaging, two-way enabled).
	phoneNumber: '+1 (844) 493-3651',
	contactEmail: 'parker.todd.nilson@gmail.com',
	confirmKeyword: 'YES',
	messageFrequency: 'up to 4 messages per month',
	lastUpdated: 'September 28, 2026'
};

// Consent wording shown at the top of every sign-up sheet (paper or online). Keep it in sync with
// the actual sheets; it is also what AWS reviews as the opt-in workflow.
export const signupConsent = `By adding my name and mobile number to this sign-up sheet, I agree to receive recurring text messages from ${site.name} (run by ${site.operator}) with local community announcements and reminders. I will first get a text from ${site.phoneNumber} asking me to reply ${site.confirmKeyword} to confirm. Message frequency varies (${site.messageFrequency}). Message and data rates may apply. Reply HELP for help or STOP to opt out at any time. Consent is not a condition of any purchase. Terms: ${site.url}/terms. Privacy: ${site.url}/privacy.`;

// Script read aloud before taking a number verbally. It gives the same disclosures as the sheet.
// The operator then writes down the name, number, date, and that the script was read.
export const verbalScript = `Would you like to get ${site.name} texts? ${site.name} is run by ${site.operator} and sends recurring local community announcements and reminders. If you give me your mobile number, you'll first get a text from ${site.phoneNumber} asking you to reply ${site.confirmKeyword} to confirm, and nothing else is sent until you do. Message frequency varies (${site.messageFrequency}). Message and data rates may apply. Reply HELP for help or STOP to opt out at any time. Consent is not a condition of any purchase. Terms and privacy policy are at ${site.url}.`;

// First (and only unconfirmed) text sent to each number, however it was collected.
export const confirmationMessage = `${site.name}: Reply ${site.confirmKeyword} to get local community announcements & reminders. Up to 4 msgs/mo. Msg & data rates may apply. Reply HELP for help, STOP to opt out.`;
