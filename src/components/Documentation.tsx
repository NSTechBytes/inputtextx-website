import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from './CodeBlock';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, AlertTriangle } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Documentation = () => {
  const isMobile = useIsMobile();
  
  const sampleCode = `[Rainmeter]
Update=1000
AccurateText=1
DynamicWindowSize=1

[MeasureInputText]
Measure=Plugin
Plugin=InputTextX
FontFace=Segoe UI
FontSize=10
FontColor=255,255,255,255
SolidColor=30,30,30,255
StringStyle=Bold
StringAlign=Left
W=200
H=30
X=0
Y=0
DefaultValue=Type something...
Command1=[!Log "$UserInput$" Notice]`;

  const installationCode = `[Rainmeter]
Update=1000

[MeasureInput]
Measure=Plugin
Plugin=InputTextX
FontFace=Segoe UI
FontSize=10
FontColor=255,255,255,255
SolidColor=30,30,30,255
AntiAlias=1
FocusDismiss=1
Password=0
StringAlign=Left
StringStyle=Normal
W=200
H=32
X=0
Y=0
DefaultValue=Click to type...
Command1=[!Log "The user typed: $UserInput$"]`;

  const configOptions = [
    { key: "W", description: "Width of the input overlay", type: "Integer", defaultValue: "300" },
    { key: "H", description: "Height of the input overlay", type: "Integer", defaultValue: "40" },
    { key: "SolidColor", description: "Background color in R,G,B format", type: "Color", defaultValue: "255,255,255" },
    { key: "FontColor", description: "Text color in R,G,B format", type: "Color", defaultValue: "0,0,0" },
    { key: "FontSize", description: "Font size for text input", type: "Float", defaultValue: "12" },
    { key: "Align", description: "Text alignment (`Left`, `Center`, or `Right`)", type: "String", defaultValue: "Center" },
    { key: "Password", description: "If set to 1, input will be masked", type: "Integer", defaultValue: "0" },
    { key: "FontStyle", description: "Font style (`Normal`, `Bold`, `Italic`, or `BoldItalic`)", type: "String", defaultValue: "Normal" },
    { key: "FontFace", description: "Name or path to the font file", type: "String", defaultValue: "Segoe UI" },
    { key: "Multiline", description: "If set to 1, allows multiline input", type: "Integer", defaultValue: "0" },
    { key: "AllowScroll", description: "If set to 1, enables vertical scroll for multiline input", type: "Integer", defaultValue: "0" },
    { key: "InputLimit", description: "Maximum number of characters allowed", type: "Integer", defaultValue: "0 (no limit)" },
    { key: "DefaultValue", description: "Initial text in the input box", type: "String", defaultValue: "Empty" },
    { key: "InputType", description: "Type of allowed input (see list below)", type: "String", defaultValue: "String" },
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
    { key: "TopMost", description: "If set to 1, the overlay is displayed on top of other windows", type: "Integer", defaultValue: "1" },
    { key: "Logging", description: "If set to 1, detailed log messages will be printed to the Rainmeter log", type: "Integer", defaultValue: "0" }
  ];

  return (
    <section id="documentation" className="section-padding bg-gradient-to-b from-github-dark to-github-darker relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Documentation</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Learn how to install, configure, and use InputTextX in your Rainmeter skins
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="installation" className="w-full">
            <TabsList className={`${isMobile ? 'flex flex-wrap' : 'grid grid-cols-3'} w-full mb-8 bg-github-darker border border-github-border rounded-md`}>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="installation" className="space-y-6 animate-fade-in">
              <div className="glass p-4 md:p-6 rounded-lg border border-github-border bg-github-darker/50">
                <h3 className="text-xl font-medium mb-4 text-white">Installing InputTextX</h3>
                <ol className="space-y-4 text-github-text">
                  <li className="flex gap-2 md:gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">1</span>
                    <span>Download the latest release from the <a href="#download" className="text-github-highlight hover:underline">download section</a> or GitHub repository.</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">2</span>
                    <span>Extract the zip file to your Rainmeter plugins folder (usually <code className="bg-github-darker px-1 py-0.5 rounded text-github-text">%AppData%\Rainmeter\Plugins</code>).</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">3</span>
                    <span>Restart Rainmeter by right-clicking the Rainmeter icon in the system tray and selecting "Refresh all".</span>
                  </li>
                  <li className="flex gap-2 md:gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">4</span>
                    <span>Create a new skin or modify an existing one using the configuration example below.</span>
                  </li>
                </ol>
              </div>

              <h3 className="text-xl font-medium mt-8 mb-4 text-white">Basic Example</h3>
              <CodeBlock 
                code={installationCode} 
                title="Sample Skin Config (basic.ini)"
              />
            </TabsContent>
            
            <TabsContent value="configuration" className="space-y-6 animate-fade-in">
              <div className="glass p-6 rounded-lg border border-github-border bg-github-darker/50">
                <h3 className="text-xl font-medium mb-4 text-white">Configuring InputTextX</h3>
                <p className="text-github-text mb-4">
                  InputTextX offers extensive configuration options to customize the appearance and behavior of your input fields. 
                  Below is a sample configuration with the most common options.
                </p>
              </div>

              <CodeBlock 
                code={sampleCode} 
                title="Comprehensive Example (advanced.ini)"
              />

              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-medium text-white">Common Configurations</h3>
                
                <div className="glass p-6 rounded-lg border border-github-border bg-github-darker/50">
                  <h4 className="text-lg font-medium mb-3 text-white">Password Field</h4>
                  <CodeBlock 
                    code={`[MeasurePassword]
Measure=Plugin
Plugin=InputTextX
Password=1
DefaultValue=Enter password...`} 
                    title="Password Input"
                    showLineNumbers={false}
                  />
                </div>

                <div className="glass p-6 rounded-lg border border-github-border bg-github-darker/50">
                  <h4 className="text-lg font-medium mb-3 text-white">Custom Styling</h4>
                  <CodeBlock 
                    code={`[MeasureCustomStyle]
Measure=Plugin
Plugin=InputTextX
FontFace=Roboto
FontSize=12
FontColor=255,255,255,255
SolidColor=40,44,52,255
MouseOverAction=[!SetOption MeasureCustomStyle SolidColor "50,54,62,255"]
MouseLeaveAction=[!SetOption MeasureCustomStyle SolidColor "40,44,52,255"]
StringStyle=Bold
X=10
Y=10
W=300
H=40
DefaultValue=Styled input field...`} 
                    title="Custom Styled Input"
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="options" className="animate-fade-in">
              <div className="glass p-6 rounded-lg border border-github-border bg-github-darker/50 mb-6">
                <h3 className="text-xl font-medium mb-4 text-white">Configuration Options Reference</h3>
                <p className="text-github-text">
                  InputTextX supports the following configuration options. All options are optional unless specified otherwise.
                </p>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-github-darker/70 hover:bg-github-darker/90">
                      <TableHead className="font-semibold text-github-text">Key</TableHead>
                      <TableHead className="font-semibold text-github-text">Description</TableHead>
                      <TableHead className="font-semibold text-github-text">Type</TableHead>
                      <TableHead className="font-semibold text-github-text">Default</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {configOptions.map((option, index) => (
                      <TableRow 
                        key={index}
                        className={index % 2 === 0 ? "bg-transparent hover:bg-github-darker/50" : "bg-github-darker/20 hover:bg-github-darker/50"}
                      >
                        <TableCell className="font-medium text-github-highlight">{option.key}</TableCell>
                        <TableCell className="text-github-text">{option.description}</TableCell>
                        <TableCell className="text-github-muted">{option.type}</TableCell>
                        <TableCell className="text-github-muted">{option.defaultValue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-6">Usage Notes</h2>
            
            <Alert className="bg-github-darker/50 border-github-highlight/30 text-github-text">
              <Info className="h-5 w-5 text-github-highlight" />
              <AlertDescription className="ml-4 md:ml-6 mt-1">
                <strong className="text-white">Note:</strong> The plugin dynamically replaces the placeholder <code className="bg-github-darker px-1 py-0.5 rounded text-github-text">$UserInput$</code> in action keys with the current input text. It also escapes special characters (such as double quotes) to ensure the resulting Rainmeter command is valid.
              </AlertDescription>
            </Alert>
            
            <Alert className="bg-github-darker/50 border-github-highlight/30 text-github-text">
              <Info className="h-5 w-5 text-github-highlight" />
              <AlertDescription className="ml-4 md:ml-6 mt-1">
                <strong className="text-white">InputTextX</strong> is incompatible with skins set to <strong className="text-white">Stay Topmost</strong>, or <code className="bg-github-darker px-1 py-0.5 rounded text-github-text">AlwaysOnTop=2</code>, as the conflict between the input field, which requires "focus", and the constant attempts by the skin to stay on "top", in front of the input field, will not allow InputTextX to function correctly.
              </AlertDescription>
            </Alert>
            
            <Alert className="bg-github-darker/50 border-destructive/30 text-github-text">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertDescription className="ml-4 md:ml-6 mt-1">
                <strong className="text-destructive">Warning:</strong> Ensure that your custom commands (especially those using <code className="bg-github-darker px-1 py-0.5 rounded text-github-text">$UserInput$</code>) are properly formatted. Improper command syntax may cause unexpected behavior in Rainmeter.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
