import React from "react";
import AccordionItem from "../acc-item";

const FAQs = [
  {
    question: "What is an NFT?",
    answer:
      "NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same.",
  },
  {
    question: "Customer support is available ?",
    answer:
      "Customer service work 24/7,  You can get supports by email support@whalescapital.io, with urgent case you can contact Telegram community group.",
  },
  {
    question: "How do I find my transaction hash?",

    answer:
      "All transactions will record direct on wallet transaction history by Blockchain explorer      ",
  },
  {
    question: "What are gas fees on To The Moon?",
    answer:
      "To the moon use Moonrium help users have low fee and can change any NFTs chain.",
  }
];

export default function FAQAccordion() {
  return (
    <div className={`accordion my-4`}>
      {FAQs.map((faq, i) => (
        <div className="my-4" key={i}>
          <AccordionItem faq={faq} />
        </div>
      ))}
    </div>
  );
}
