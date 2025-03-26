
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Contact as ContactIcon, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    // Send email using EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    )
    .then((response) => {
      console.log("Email sent successfully:", response);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      toast({
        title: "Message Failed",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };

  return (
    <section className="section-padding bg-gradient-to-b from-github-dark to-github-darker">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Have questions or suggestions about InputTextX? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass p-8 rounded-lg border border-github-border">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-github-highlight/20 rounded-full p-4">
              <ContactIcon size={32} className="text-github-highlight" />
            </div>
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-github-text">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-github-darker/50 border-github-border"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-github-text">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-github-darker/50 border-github-border"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-github-text">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="bg-github-darker/50 border-github-border"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-github-text">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="min-h-[150px] bg-github-darker/50 border-github-border"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-github-highlight hover:bg-github-highlight/90 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
