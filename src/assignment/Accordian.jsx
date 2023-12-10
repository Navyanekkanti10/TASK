import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div>
      <div onClick={onClick} style={{ cursor: 'pointer' }}>
        {question}
      </div>
      {isOpen && <div>{answer}</div>}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // Add more FAQ items as needed
  ];

  const handleItemClick = (index) => {
    if (openIndex === index) {
      // Clicking on the open item again, close it
      setOpenIndex(null);
    } else {
      // Clicking on a new item, close the previously open item and open the new one
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
