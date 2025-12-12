'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import useFadeInUp from "@/hooks/animation/useFadeInUp";


const propalyFAQs = [
  {
    question: "What is Propaly?",
    answer:
      "Propaly is a modern real estate platform designed to help agents, developers, and property owners manage listings, streamline transactions, and grow their business with powerful digital tools."
  },
  {
    question: "Who can use Propaly?",
    answer:
      "Real estate agents, property developers, brokers, landlords, and businesses looking to list, manage, or sell properties can all use Propaly."
  },
  {
    question: "What makes Propaly different?",
    answer:
      "Propaly stands out with automated workflows, verified property data, easy listing management, embedded analytics, and a seamless experience built specifically for the Nigerian real estate market."
  },
  {
    question: "How do I list a property on Propaly?",
    answer:
      "Once you create an account, simply go to your dashboard, click 'Add Property,' upload images, fill in the details, and publish. Your listing goes live instantly."
  },
  {
    question: "Is Propaly free to use?",
    answer:
      "Propaly offers a free tier with essential tools and a premium plan with advanced features for scaling your real estate business."
  },
  {
    question: "Can I manage multiple properties?",
    answer:
      "Yes! Propaly allows you to manage unlimited listings, track engagements, and monitor property performance in one dashboard."
  },
  {
    question: "Do you verify properties?",
    answer:
      "Yes, Propaly conducts verification checks with property owners or developers to reduce fraud and ensure trust in the marketplace."
  },
  {
    question: "Does Propaly help me generate leads?",
    answer:
      "Absolutely. Propaly optimizes your listings for discovery, provides built-in lead capture forms, and helps you manage inquiries easily."
  },
  {
    question: "Can I collaborate with other agents?",
    answer:
      "Yes, Propaly supports co-listing and allows agents to collaborate securely and transparently on deals."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach Propaly support anytime via the Help Center, live chat, or email support@propaly.com."
  }
];


export function Faq() {
  const fadeInUpRef = useFadeInUp()
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h3 className="md:text-4xl text-2xl text-center font-semibold mb-10">Frequently Asked Questions</h3>
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
      ref={fadeInUpRef} 
    >
      {propalyFAQs.slice(0,5).map((faq, index) =>(
          <AccordionItem value={`item-${index}`} key={index} className="border border-black/30 p-4 rounded-lg my-4">
        <AccordionTrigger className="data-[state=open]:text-primary">
          {faq.question}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            {faq.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
      ))}

    </Accordion>      
    </div>
  )
}
