
import { 
  Palette, 
  Terminal, 
  Type, 
  Shield, 
  Zap, 
  Settings,
  Filter,
  Code,
  LayoutGrid,
  Layers,
  Wrench
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Features = () => {
  const featureCategories = [
    {
      title: "Customizable Appearance",
      icon: <Palette size={24} />,
      description: "Full control over how the input overlay looks and feels",
      features: [
        "Adjustable width, height, and position of the overlay window",
        "Customizable background and optional borders with configurable color and thickness",
        "Font settings including font face, size, style, and text alignment"
      ]
    },
    {
      title: "Input Behavior",
      icon: <Type size={24} />,
      description: "Flexible input handling for different use cases",
      features: [
        "Supports both single-line and multiline input",
        "Option to enable or disable scroll bars in multiline mode",
        "Password mode for masking input"
      ]
    },
    {
      title: "Input Filtering & Validation",
      icon: <Filter size={24} />,
      description: "Ensure data integrity with comprehensive validation options",
      features: [
        "Multiple input types supported: String, Integer, Float, Letters, Alphanumeric, Hexadecimal, Email, and Custom",
        "Filters keystrokes in real time to prevent invalid characters",
        "Numeric input validation ensures values remain within defined limits"
      ]
    },
    {
      title: "Dynamic Command Execution",
      icon: <Terminal size={24} />,
      description: "Trigger Rainmeter actions based on user input and interactions",
      features: [
        "Execute commands when user submits input (OnEnterAction)",
        "Trigger actions when user cancels input (OnESCAction)",
        "Run commands when input overlay loses focus (OnDismissAction)",
        "Dynamic placeholder substitution with $UserInput$"
      ]
    },
    {
      title: "Logging and Debugging",
      icon: <Code size={24} />,
      description: "Powerful troubleshooting capabilities",
      features: [
        "Conditional logging outputs detailed messages for actions",
        "Track command strings, errors, and overall flow",
        "Helpful for debugging and monitoring plugin behavior"
      ]
    },
    {
      title: "Rainmeter Integration",
      icon: <Layers size={24} />,
      description: "Seamless integration with the Rainmeter ecosystem",
      features: [
        "Interfaces directly with the Rainmeter API for command execution",
        "Manages skin window interaction automatically",
        "Disables underlying skin when overlay is active to avoid conflicts"
      ]
    },
    {
      title: "Threading and Performance",
      icon: <Zap size={24} />,
      description: "Optimized for stability and responsiveness",
      features: [
        "Runs on a dedicated Single-Threaded Apartment (STA) thread",
        "No timer-based manual updates for better performance",
        "Reduces potential resource overhead"
      ]
    },
    {
      title: "Advanced Configuration",
      icon: <Settings size={24} />,
      description: "Extensive customization options for power users",
      features: [
        "Fine-grained control over appearance and behavior",
        "Multiple input validation strategies",
        "Flexible positioning and sizing"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding bg-github-dark relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0d1117_70%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Experience the power and flexibility of InputTextX with these essential features
          </p>
        </div>
        
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featureCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="glass bg-github-darker/50 border-github-border hover:bg-github-darker/70 transition-colors">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-full bg-github-highlight/10 flex items-center justify-center mb-4 text-github-highlight">
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">{category.title}</CardTitle>
                        <CardDescription className="text-github-muted">{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-github-muted">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="glass p-8 rounded-lg border border-github-border bg-github-darker/50">
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
              <Wrench className="mr-2 text-github-highlight" /> Configuration Options
            </h3>
            <p className="text-github-muted mb-4">
              InputTextX provides extensive configuration options to customize the input overlay to your exact requirements.
              Below is a table showing the key configuration parameters with their default values:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-github-border/30">
                    <th className="p-2 text-left text-github-highlight border border-github-border">Key</th>
                    <th className="p-2 text-left text-github-highlight border border-github-border">Description</th>
                    <th className="p-2 text-left text-github-highlight border border-github-border">Type</th>
                    <th className="p-2 text-left text-github-highlight border border-github-border">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-github-border text-white">W</td>
                    <td className="p-2 border border-github-border text-github-muted">Width of the input overlay</td>
                    <td className="p-2 border border-github-border text-github-muted">Integer</td>
                    <td className="p-2 border border-github-border text-github-muted">300</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-github-border text-white">H</td>
                    <td className="p-2 border border-github-border text-github-muted">Height of the input overlay</td>
                    <td className="p-2 border border-github-border text-github-muted">Integer</td>
                    <td className="p-2 border border-github-border text-github-muted">40</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-github-border text-white">SolidColor</td>
                    <td className="p-2 border border-github-border text-github-muted">Background color in R,G,B format</td>
                    <td className="p-2 border border-github-border text-github-muted">Color</td>
                    <td className="p-2 border border-github-border text-github-muted">255,255,255</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-github-border text-white">FontColor</td>
                    <td className="p-2 border border-github-border text-github-muted">Text color in R,G,B format</td>
                    <td className="p-2 border border-github-border text-github-muted">Color</td>
                    <td className="p-2 border border-github-border text-github-muted">0,0,0</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-github-border text-white">FontSize</td>
                    <td className="p-2 border border-github-border text-github-muted">Font size for text input</td>
                    <td className="p-2 border border-github-border text-github-muted">Float</td>
                    <td className="p-2 border border-github-border text-github-muted">12</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-github-border text-white">Align</td>
                    <td className="p-2 border border-github-border text-github-muted">Text alignment (Left, Center, or Right)</td>
                    <td className="p-2 border border-github-border text-github-muted">String</td>
                    <td className="p-2 border border-github-border text-github-muted">Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-github-muted text-sm">
              See the documentation for the complete list of configuration options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
