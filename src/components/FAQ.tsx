import { useState, type FC } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Which operating systems are supported?",
    answer: "Scaffold is currently built exclusively for macOS. It runs natively on Apple Silicon and Intel-based Macs via Rosetta 2."
  },
  {
    question: "Do I need to own the creative apps to use Scaffold?",
    answer: "Yes, you need to have the creative apps (like After Effects or Cinema 4D) installed for Scaffold's setup scripts and templates to work. However, you can still use Scaffold to create folder structures even if you don't have all the apps."
  },
  {
    question: "How does the 7-day free trial work?",
    answer: "When you first launch Scaffold, you'll have full access to all features for 7 days. No credit card is required. After the trial period, you'll need to purchase a license key to continue using the app."
  },
  {
    question: "Can I use my own folder structure?",
    answer: "Absolutely. You can point Scaffold to any folder on your machine to use as a template for your project structure. Scaffold will copy that entire hierarchy into every new project."
  },
  {
    question: "How does the subscription work?",
    answer: "For the price of just two coffees a month, you get a tool that saves you hours of setup time every week. Choose between a flexible $10 monthly plan or save $20 with our $100 annual plan. All updates and new app integrations are included."
  }
];

const FAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="faq-subtitle">Support</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
