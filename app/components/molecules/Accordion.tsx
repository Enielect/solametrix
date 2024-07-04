// components/Accordion.js

import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from '@radix-ui/react-icons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({
  value,
  header,
  content,
}: {
  value: string;
  header: string;
  content: string;
}) => (
  <Accordion.Item className="border-b border" value={value}>
    <Accordion.Header className="">
      <Accordion.Trigger className="w-full py-2 flex justify-between px-8">
        {header}
        {/* <ChevronDownIcon className="accordion-chevron" aria-hidden /> */}
        <ExpandMoreIcon className="accordion-chevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      {content}
    </Accordion.Content>
  </Accordion.Item>
);

const CustomAccordion = () => {
  return (
    <Accordion.Root type="single" collapsible className="accordion-root">
      <AccordionItem
        value="item-1"
        header="Header 1"
        content="What is the Olametrix"
      />
      <AccordionItem
        value="item-2"
        header="Header 2"
      content="Is SolarMetrix case A Paid service"
      />
      <AccordionItem
        value="item-3"
        header="Header 3"
        content="How does SOlametrix work"
      />
      <AccordionItem value="item-4" header="Header 4" content="How do I get started" />

    </Accordion.Root>
  );
};

export default CustomAccordion;
