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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsMobile } from '@/hooks/use-mobile';

const Features = () => {
  const isMobile = useIsMobile();
  
  const featureCategories = [
    {
      id: "appearance",
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
      id: "behavior",
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
      id: "validation",
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
      id: "commands",
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
      id: "logging",
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
      id: "integration",
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
      id: "performance",
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
      id: "advanced",
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

  const configOptions = [
    { key: "W", description: "Width of the input overlay", type: "Integer", defaultValue: "300" },
    { key: "H", description: "Height of the input overlay", type: "Integer", defaultValue: "40" },
    { key: "SolidColor", description: "Background color in R,G,B format", type: "Color", defaultValue: "255,255,255" },
    { key: "FontColor", description: "Text color in R,G,B format", type: "Color", defaultValue: "0,0,0" },
    { key: "FontSize", description: "Font size for text input", type: "Float", defaultValue: "12" },
    { key: "Align", description: "Text alignment (Left, Center, or Right)", type: "String", defaultValue: "Center" },
    { key: "Password", description: "If set to 1, input will be masked", type: "Integer", defaultValue: "0" },
    { key: "FontStyle", description: "Font style (Normal, Bold, Italic, or BoldItalic)", type: "String", defaultValue: "Normal" },
    { key: "FontFace", description: "Name or path to the font file", type: "String", defaultValue: "Segoe UI" },
    { key: "Multiline", description: "If set to 1, allows multiline input", type: "Integer", defaultValue: "0" },
    { key: "AllowScroll", description: "If set to 1, enables vertical scroll for multiline input", type: "Integer", defaultValue: "0" },
    { key: "InputLimit", description: "Maximum number of characters allowed", type: "Integer", defaultValue: "0 (no limit)" },
    { key: "DefaultValue", description: "Initial text in the input box", type: "String", defaultValue: "Empty" },
    { key: "InputType", description: "Type of allowed input String, Integer, Float, Letters, Alphanumeric, Hexadecimal, Email, Custom", type: "String", defaultValue: "String" },
    { key: "AllowedChars", description: "For InputType=Custom, characters allowed", type: "String", defaultValue: "Empty" },
    { key: "OnDismissAction", description: "Rainmeter command executed when the input overlay loses focus", type: "String", defaultValue: "Empty" },
    { key: "OnEnterAction", description: "Rainmeter command executed on pressing Enter", type: "String", defaultValue: "Empty" },
    { key: "OnESCAction", description: "Rainmeter command executed on pressing Escape", type: "String", defaultValue: "Empty" },
    { key: "InValidAction", description: "Command executed when invalid input is detected", type: "String", defaultValue: "Empty" },
    { key: "X", description: "Horizontal offset for the overlay relative to the skin", type: "Integer", defaultValue: "20" },
    { key: "Y", description: "Vertical offset for the overlay relative to the skin", type: "Integer", defaultValue: "20" },
    { key: "AllowBorder", description: "If set to 1, a border will be drawn around the input box", type: "Integer", defaultValue: "0" },
    { key: "BorderColor", description: "Border color in R,G,B format", type: "Color", defaultValue: "0,0,0" },
    { key: "BorderThickness", description: "Thickness of the border in pixels", type: "Integer", defaultValue: "2" },
    { key: "MinValue", description: "Minimum numeric value (for Integer/Float types)", type: "Double", defaultValue: "double.MinValue" },
    { key: "MaxValue", description: "Maximum numeric value (for Integer/Float types)", type: "Double", defaultValue: "double.MaxValue" },
    { key: "TopMost", description: "If set to 1, the overlay is displayed on top of other windows", type: "Integer", defaultValue: "0" },
    { key: "UnFocusDismiss", description: "If set to 1 (default), clicking anywhere other than on the input field will dismiss the input without taking action. If set to 0, the mouse is disabled until Enter or Escape is pressed.", type: "Integer", defaultValue: "1" },
    { key: "Logging", description: "If set to 1, detailed log messages will be printed to the Rainmeter log", type: "Integer", defaultValue: "0" }
  ];

  return (
    <section id="features" className="section-padding bg-github-dark relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0d1117_70%)]"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Experience the power and flexibility of InputTextX with these essential features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16">
          {featureCategories.map((category) => (
            <div 
              key={category.id}
              className="reveal flex flex-col md:flex-row md:space-x-6 p-4 md:p-6 rounded-lg border border-github-border bg-github-darker/20 hover:bg-github-darker/40 transition-colors"
            >
              <div className="min-w-12 h-12 rounded-full bg-github-highlight/10 flex items-center justify-center text-github-highlight shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">{category.title}</h3>
                <p className="text-github-muted mb-4">{category.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-github-muted">
                  {category.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass p-4 md:p-8 rounded-lg border border-github-border bg-github-darker/50 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-white flex items-center justify-center md:justify-start">
            <Wrench className="mr-2 text-github-highlight" /> Configuration Options
          </h3>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-6 bg-github-darker/50 overflow-x-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-border/30">
                      <TableHead className="text-left text-github-highlight">Key</TableHead>
                      <TableHead className="text-left text-github-highlight">Description</TableHead>
                      <TableHead className="text-left text-github-highlight">Type</TableHead>
                      <TableHead className="text-left text-github-highlight">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions.map((option, index) => (
                      <TableRow key={index} className="border-github-border hover:bg-github-darker/40">
                        <TableCell className="text-white font-mono">{option.key}</TableCell>
                        <TableCell className="text-github-muted">{option.description}</TableCell>
                        <TableCell className="text-github-muted">{option.type}</TableCell>
                        <TableCell className="text-github-muted font-mono">{option.defaultValue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="appearance" className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-border/30">
                      <TableHead className="text-left text-github-highlight">Key</TableHead>
                      <TableHead className="text-left text-github-highlight">Description</TableHead>
                      <TableHead className="text-left text-github-highlight">Type</TableHead>
                      <TableHead className="text-left text-github-highlight">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions
                      .filter(option => 
                        ['W', 'H', 'SolidColor', 'FontColor', 'FontSize', 'Align', 'FontStyle', 'FontFace', 'X', 'Y', 'AllowBorder', 'BorderColor', 'BorderThickness'].includes(option.key)
                      )
                      .map((option, index) => (
                        <TableRow key={index} className="border-github-border hover:bg-github-darker/40">
                          <TableCell className="text-white font-mono">{option.key}</TableCell>
                          <TableCell className="text-github-muted">{option.description}</TableCell>
                          <TableCell className="text-github-muted">{option.type}</TableCell>
                          <TableCell className="text-github-muted font-mono">{option.defaultValue}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="input" className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-border/30">
                      <TableHead className="text-left text-github-highlight">Key</TableHead>
                      <TableHead className="text-left text-github-highlight">Description</TableHead>
                      <TableHead className="text-left text-github-highlight">Type</TableHead>
                      <TableHead className="text-left text-github-highlight">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions
                      .filter(option => 
                        ['Password', 'Multiline', 'AllowScroll', 'InputLimit', 'DefaultValue', 'InputType', 'AllowedChars', 'MinValue', 'MaxValue'].includes(option.key)
                      )
                      .map((option, index) => (
                        <TableRow key={index} className="border-github-border hover:bg-github-darker/40">
                          <TableCell className="text-white font-mono">{option.key}</TableCell>
                          <TableCell className="text-github-muted">{option.description}</TableCell>
                          <TableCell className="text-github-muted">{option.type}</TableCell>
                          <TableCell className="text-github-muted font-mono">{option.defaultValue}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="actions" className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-border/30">
                      <TableHead className="text-left text-github-highlight">Key</TableHead>
                      <TableHead className="text-left text-github-highlight">Description</TableHead>
                      <TableHead className="text-left text-github-highlight">Type</TableHead>
                      <TableHead className="text-left text-github-highlight">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions
                      .filter(option => 
                        ['OnDismissAction', 'OnEnterAction', 'OnESCAction', 'InValidAction'].includes(option.key)
                      )
                      .map((option, index) => (
                        <TableRow key={index} className="border-github-border hover:bg-github-darker/40">
                          <TableCell className="text-white font-mono">{option.key}</TableCell>
                          <TableCell className="text-github-muted">{option.description}</TableCell>
                          <TableCell className="text-github-muted">{option.type}</TableCell>
                          <TableCell className="text-github-muted font-mono">{option.defaultValue}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="advanced" className="space-y-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-border/30">
                      <TableHead className="text-left text-github-highlight">Key</TableHead>
                      <TableHead className="text-left text-github-highlight">Description</TableHead>
                      <TableHead className="text-left text-github-highlight">Type</TableHead>
                      <TableHead className="text-left text-github-highlight">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions
                      .filter(option => 
                        ['TopMost', 'Logging','UnFocusDismiss'].includes(option.key)
                      )
                      .map((option, index) => (
                        <TableRow key={index} className="border-github-border hover:bg-github-darker/40">
                          <TableCell className="text-white font-mono">{option.key}</TableCell>
                          <TableCell className="text-github-muted">{option.description}</TableCell>
                          <TableCell className="text-github-muted">{option.type}</TableCell>
                          <TableCell className="text-github-muted font-mono">{option.defaultValue}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;
