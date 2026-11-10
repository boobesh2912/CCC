export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ answers are provisional. Replace with confirmed CCC policies before launch.
 * Where details are unknown, the answer points visitors to the enquiry form or WhatsApp.
 */
export const homeFaqs: FAQItem[] = [
  {
    id: 'branding-include',
    question: 'What does Personal Branding include?',
    answer:
      'Personal Branding covers content strategy, scripting, shooting and editing, plus building out your presence on Instagram, YouTube, LinkedIn and your own website. We agree the exact scope with you first, based on where you are and where you want to be.',
  },
  {
    id: 'marketing-include',
    question: 'What does Digital Marketing include?',
    answer:
      'Digital Marketing covers Meta Ads, Google Ads, SEO and the wider paid strategy that ties them together. We plan campaigns around your goals and budget, then test, measure and refine.',
  },
  {
    id: 'need-both',
    question: 'Do I need both services?',
    answer:
      'No. Many people start with one. Personal Branding builds the story and the content; Digital Marketing puts it in front of more of the right people. Tell us your goal and we will suggest where to begin.',
  },
  {
    id: 'cost',
    question: 'How much does it cost?',
    answer:
      'It depends on the services, the platforms and how much is involved. That is why the enquiry form asks about your monthly budget: it helps us recommend a plan that fits, rather than guess. No prices are fixed on this site yet.',
  },
  {
    id: 'results',
    question: 'Can you guarantee results?',
    answer:
      'No honest agency can promise virality, leads or revenue. What we can promise is a clear plan, careful execution, and straight conversations about what is and is not working.',
  },
  {
    id: 'studio',
    question: 'Is the CCC studio open?',
    answer:
      'Not yet. The studio is coming soon. If you want to know when it opens, message us and we will keep you posted.',
  },
  {
    id: 'start',
    question: 'How do I get started?',
    answer:
      'Fill in the short enquiry form on the Contact page, or message us on WhatsApp. Tell us about your brand and your budget, and we will come back with the next step.',
  },
];
