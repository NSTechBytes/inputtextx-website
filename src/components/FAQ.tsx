
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I enable error logging for troubleshooting?",
      answer: "To enable detailed error logging, add 'LogErrors=1' to your measure configuration. Logs will be saved to the Rainmeter log file, which you can access by right-clicking the Rainmeter icon in the system tray and selecting 'Open log'."
    },
    {
      question: "The plugin crashes when I try to use it. What should I do?",
      answer: "First, ensure you're using the latest version of InputTextX. If crashes persist, try these steps: 1) Verify that your Rainmeter is up to date, 2) Check for conflicting plugins or skins, 3) Add 'LogErrors=1' to your measure to get detailed error information, 4) Report the issue on GitHub with the error log and your configuration."
    },
    {
      question: "Can I customize the appearance of the input cursor?",
      answer: "Yes, InputTextX allows you to customize the cursor appearance. Use 'CursorColor' to set the cursor color (in R,G,B,A format) and 'CursorWidth' to adjust its width. For example: 'CursorColor=255,255,255,255' for a white cursor and 'CursorWidth=2' for a 2-pixel width cursor."
    },
    {
      question: "How do I handle multiline text input?",
      answer: "InputTextX supports multiline text input. Set 'MultiLine=1' in your measure configuration and ensure the height (H) is sufficient for multiple lines. You can also use 'DefaultValue' with line breaks using the '\\n' escape sequence."
    },
    {
      question: "Can I limit the maximum number of characters?",
      answer: "Yes, use 'MaxLength' to limit the number of characters. For example, 'MaxLength=50' will limit input to 50 characters. When the limit is reached, the user won't be able to type more characters until some are deleted."
    },
    {
      question: "How do I retrieve the input value in another measure or skin?",
      answer: "You can access the input value in other measures using the GetMeasure's GetValue function. For example, in a string measure: 'Formula=[MeasureInputText]'. Alternatively, use Command1 to set a variable that can be accessed by other skins: 'Command1=[!SetVariable UserInput \"$UserInput$\"]'."
    },
    {
      question: "Does InputTextX support input validation?",
      answer: "InputTextX doesn't have built-in validation, but you can implement validation using Command actions. For example, use Command1 with Rainmeter's conditional checks to validate input and provide feedback: 'Command1=[!SetOption ValidationText Text \"Invalid input\"][!ShowMeter ValidationText]'"
    },
    {
      question: "Can I use InputTextX with other languages and special characters?",
      answer: "Yes, InputTextX supports unicode and can handle special characters from various languages. Make sure to use a font that supports the characters you need by setting the appropriate 'FontFace' value."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-github-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Find answers to common questions about InputTextX
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-github-border bg-github-darker/50 glass mb-4 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-github-darker/70 text-white hover:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-github-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
