"use client";

import { useState } from "react";
import Accordion from "@/components/accordion"; // Ensure this path is correct

// Define types for our data structures
interface Faq {
  question: string;
  answer: string;
  active?: boolean;
}

interface Tab {
  id: string;
  name: string;
}

type FaqData = {
  [key: string]: Faq[];
};

export default function Faqs() {
  // State to manage the active tab, explicitly typed
  const [activeTab, setActiveTab] = useState<string>("loan");

  // FAQ data organized by tab - UPDATED
  const faqData: FaqData = {
    loan: [
      {
        question: "How do I apply for a loan?",
        answer:
          "Simply download the HappyCash app, sign-up using your mobile number, complete your profile with the required personal information and contacts information (for verification and repayment); and click apply!",
        active: true, // This one will be open by default
      },
      {
        question:
          "What is the nominal loan that can be submitted and how long is the loan term?",
        answer:
          "The nominal loan that can be submitted is up to PHP25000.00 for a period of 90 days.",
      },
      {
        question: "What documents do I need to submit for this Happycash Loan?",
        answer:
          "Prepare your Government Identity card Like National ID, SSS ID, UMID ID, Driver's License, TIN, Pag IBIG, Philhealth or Passport. Hapi is Happy to inform you that there is no any additional requirements. We believe in you Ka-Hapi.",
      },
      {
        question: "Why is my loan application not approved?",
        answer:
          "As much as we’d love to cater to everyone, our loan decisions are based on HappyCash’s credit and underwriting model, which considers many factors in your loan application.",
      },
      {
        question: "How do I receive my loan?",
        answer:
          "Your funds are currently disbursed via GCash and Maya only. We'll promptly notify you if additional channels become available soon!",
      },
      {
        question: "Can I apply again if I was rejected?",
        answer:
          "Yes, you can apply again! Check your HappyCash app's homepage to see when you become eligible to reapply!",
      },
    ],
    repayment: [
      {
        question: "How do I make a payment?",
        answer:
          "To do this, please log in to the HappyCash app and follow the instructions. You can repay your loan via 7Eleven, GCash, Paymaya, Cebuana Lhuillier many more!",
      },
      {
        question:
          "What should I do if my payment fails to proceed or is unsuccessful?",
        answer:
          "If your payment fails to proceed, please refresh the app or reinstall it and try again. If the issue persists, submit a ticket request via customer service for immediate assistance.",
      },
      {
        question: "Will I receive payment reminders?",
        answer:
          "We will send a message and will contact you by phone as the due date approaches, reminding you to make payment on or before the due date.",
      },
      {
        question:
          "I already made a payment. How long is the posting of my loan payment?",
        answer:
          "Verification of loan payments will be processed no later than 2 hours after you make a payment. If your payment has not been updated, please fill in the feedback.",
      },
    ],
    other: [
      {
        question: "What is Happycash?",
        answer:
          "HappyCash is an online lending platform under Yinshan Lending Inc. (SEC# CS201900108), offering QuickLoan for your urgent financial needs. Always verify our SEC registration for your safety Ka-Hapi!",
      },
      {
        question: "Is my personal information safe with you?",
        answer:
          "Your information is 100% secure as we strictly comply with the Data Privacy Act of 2012 and SEC guidelines. Your data safety is our top priority Ka-Hapi!",
      },
      {
        question: "How do I check my loan billing history?",
        answer:
          "You can view your billing history anytime! Click 'Bill' to see consolidated loan details, or tap 'Repay' if you have outstanding balances to settle - all available in your HappyCash app for easy tracking.",
      },
    ],
  };

  const tabs: Tab[] = [
    { id: "loan", name: "Loan" },
    { id: "repayment", name: "Repayment" },
    { id: "other", name: "Other" },
  ];

  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:pt-30 pt-22 md:py-20">
        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn-sm font-normal shadow-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-900" // Active Style
                  : "bg-white text-gray-800 hover:bg-gray-50" // Inactive Style
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              id={`faq-${activeTab}-${index}`}
              active={faq.active}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
