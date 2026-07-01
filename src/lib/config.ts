// Conference date and venue information
export const YEAR = 2026;
export const CONFERENCE_DATE = "October 15"
export const CONFERENCE_DAY = "Thursday";
export const PAPERS_PROPOSAL_DEADLINE = "Sunday, August 23"
export const CONFERENCE_VENUE = "Jaarbeurs Utrecht, Netherlands";

// Forms, links and emails
export const TICKETS_URL = "/coming-soon";
export const PAPERS_FORM_URL = 'https://forms.gle/iiFnW8oZ8p9do4TR7';
export const VOLUNTEERS_FORM_URL = "/coming-soon";
export const GITHUB_URL = 'https://github.com/PyCon-NL/website/';
export const PYNETHERLANDS_URL = 'https://www.pynl.org/';
export const CODE_OF_CONDUCT_URL = 'https://www.pynl.org/code-of-conduct/';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/104324288/';
export const INSTAGRAM_URL = 'https://www.instagram.com/pycon_nl/';
export const MASTODON_URL = 'https://mastodon.social/@pycon_nl/';
export const CONTACT_EMAIL = 'info@pycon-nl.org';

// Call for papers and volunteers visibility (hides the item from the nav entirely)
export const HIDE_CALL_FOR_PAPERS = false;
export const HIDE_CALL_FOR_VOLUNTEERS = false;

// Call for papers and volunteers page status. Controls what the page renders:
//   "coming-soon" -> shared "Coming soon!" holding page
//   "open"        -> the actual page, with the form link active
//   "closed"      -> the after-deadline page
export type CallStatus = "coming-soon" | "open" | "closed";
export const CALL_FOR_PAPERS_STATUS: CallStatus = "open";
export const CALL_FOR_VOLUNTEERS_STATUS: CallStatus = "coming-soon";

// Sponsor pricing information
export const PLATINUM_PRICE = "€9,000.00";
export const GOLD_PRICE = "€5,500.00";
export const SILVER_PRICE = "€3,000.00";
export const BRONZE_PRICE = "€1,500.00";