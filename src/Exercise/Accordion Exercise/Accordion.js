import { useState } from "react";
import { FaqSection } from "./FaqSection";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      <ul className="content-box">
        {faqs.map((faq, i) => (
          <FaqSection
            title={faq.title}
            num={i}
            key={faq.title}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {faq.text}
          </FaqSection>
        ))}

        <FaqSection
          title="Title 1"
          num={23}
          key="Title"
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          <p>
            Get involved in it. It helps your experience level, no matter how
            difficult it might appear, it is summountable, as long as you
            persist.
          </p>
        </FaqSection>
      </ul>
    </div>
  );
}

// ///