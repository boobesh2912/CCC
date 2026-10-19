export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ answers are provisional. Replace with confirmed CCC policies before launch.
 * Where details are unknown, the answer directs visitors to WhatsApp.
 */
export const homeFaqs: FAQItem[] = [
  {
    id: 'studio-only',
    question: 'Can I rent the studio without production support?',
    answer:
      'Yes. CCC offers studio-only sessions where you bring your own team and use the space independently. If you need help with recording, editing, or production, that can be added. Ask CCC via WhatsApp to discuss what suits your session.',
  },
  {
    id: 'recording-editing',
    question: 'Can CCC help with recording and editing?',
    answer:
      "CCC can support sessions with recording assistance and handle post-production editing for video and podcast content. The scope depends on the project, so share your needs through WhatsApp and CCC will outline what's possible.",
  },
  {
    id: 'topics-scripts',
    question: 'Can you help plan topics and scripts?',
    answer:
      'Yes. CCC offers content strategy and scripting as part of the creative services. This includes topic planning, episode or video outlines, interview preparation, and creative briefs. Reach out to discuss your goals.',
  },
  {
    id: 'social-support',
    question: 'Do you offer ongoing social media support?',
    answer:
      'CCC provides social media management including planning, content creation, scheduling, and performance tracking. The arrangement can be ongoing or project-based. Start a conversation on WhatsApp to explore what works for you.',
  },
  {
    id: 'availability-pricing',
    question: 'How do I check availability and pricing?',
    answer:
      'Availability and pricing depend on the type of session, duration, and any additional production support. Contact CCC through WhatsApp with your requirements to get a clear outline and confirm availability.',
  },
  {
    id: 'what-to-bring',
    question: 'What should I bring to a studio session?',
    answer:
      'This depends on your session type. CCC will share preparation details after your booking conversation. In general, bring any notes, scripts, or reference material relevant to your recording. Ask CCC via WhatsApp for specific guidance.',
  },
];

export const studioFaqs: FAQItem[] = [
  {
    id: 'studio-rental-options',
    question: 'What are the studio rental options?',
    answer:
      'CCC offers studio-only rental as well as sessions with production support. The setup depends on your project needs. Contact CCC via WhatsApp to discuss the right option.',
  },
  {
    id: 'studio-suitable-for',
    question: 'What can I use the studio for?',
    answer:
      'The studio is suitable for podcast recording, video shoots, interviews, founder content, brand content, and similar creative sessions. If you have something specific in mind, ask CCC via WhatsApp.',
  },
  {
    id: 'studio-enquiry-info',
    question: 'What information should I share when enquiring?',
    answer:
      'Share the type of session (podcast, video, etc.), your preferred date and time, approximate duration, and whether you need production support. This helps CCC respond with the right options.',
  },
  {
    id: 'studio-booking-process',
    question: 'What happens after I enquire?',
    answer:
      'After you reach out, CCC will confirm availability, discuss your requirements, help plan the session, and then you record or create. The process is designed to be straightforward.',
  },
];
