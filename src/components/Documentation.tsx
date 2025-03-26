
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from './CodeBlock';

const Documentation = () => {
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

  return (
    <section id="documentation" className="section-padding bg-gradient-to-b from-github-dark to-github-darker relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Documentation</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Learn how to install, configure, and use InputTextX in your Rainmeter skins
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-github-darker border border-github-border">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
              <TabsTrigger value="options">Options Reference</TabsTrigger>
            </TabsList>
            
            <TabsContent value="installation" className="space-y-6 animate-fade-in">
              <div className="glass p-6 rounded-lg border border-github-border bg-github-darker/50">
                <h3 className="text-xl font-medium mb-4 text-white">Installing InputTextX</h3>
                <ol className="space-y-4 text-github-text">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">1</span>
                    <span>Download the latest release from the <a href="#download" className="text-github-highlight hover:underline">download section</a> or GitHub repository.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">2</span>
                    <span>Extract the zip file to your Rainmeter plugins folder (usually <code className="bg-github-darker px-1 py-0.5 rounded text-github-text">%AppData%\Rainmeter\Plugins</code>).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 rounded-full h-6 w-6 bg-github-highlight/20 text-github-highlight flex items-center justify-center text-sm font-medium">3</span>
                    <span>Restart Rainmeter by right-clicking the Rainmeter icon in the system tray and selecting "Refresh all".</span>
                  </li>
                  <li className="flex gap-3">
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
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-github-darker border-b border-github-border">
                      <th className="px-4 py-3 text-left text-sm font-medium text-github-text">Option</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-github-text">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-github-text">Default</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-github-border">
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">FontFace</td>
                      <td className="px-4 py-3 text-sm text-github-text">The font used for the input text</td>
                      <td className="px-4 py-3 text-sm text-github-muted">Segoe UI</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">FontSize</td>
                      <td className="px-4 py-3 text-sm text-github-text">Size of the font in points</td>
                      <td className="px-4 py-3 text-sm text-github-muted">10</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">FontColor</td>
                      <td className="px-4 py-3 text-sm text-github-text">Color of the text (R,G,B,A format)</td>
                      <td className="px-4 py-3 text-sm text-github-muted">255,255,255,255</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">SolidColor</td>
                      <td className="px-4 py-3 text-sm text-github-text">Background color (R,G,B,A format)</td>
                      <td className="px-4 py-3 text-sm text-github-muted">0,0,0,0</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">StringStyle</td>
                      <td className="px-4 py-3 text-sm text-github-text">Text style (Normal, Bold, Italic, etc.)</td>
                      <td className="px-4 py-3 text-sm text-github-muted">Normal</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">StringAlign</td>
                      <td className="px-4 py-3 text-sm text-github-text">Text alignment (Left, Center, Right)</td>
                      <td className="px-4 py-3 text-sm text-github-muted">Left</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">X, Y</td>
                      <td className="px-4 py-3 text-sm text-github-text">Position coordinates</td>
                      <td className="px-4 py-3 text-sm text-github-muted">0, 0</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">W, H</td>
                      <td className="px-4 py-3 text-sm text-github-text">Width and height of the input field</td>
                      <td className="px-4 py-3 text-sm text-github-muted">100, 20</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">DefaultValue</td>
                      <td className="px-4 py-3 text-sm text-github-text">Default text shown in the input field</td>
                      <td className="px-4 py-3 text-sm text-github-muted">""</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">Password</td>
                      <td className="px-4 py-3 text-sm text-github-text">When set to 1, masks input with asterisks</td>
                      <td className="px-4 py-3 text-sm text-github-muted">0</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">Command1...Command10</td>
                      <td className="px-4 py-3 text-sm text-github-text">Actions to execute when input is submitted</td>
                      <td className="px-4 py-3 text-sm text-github-muted">None</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">FocusDismiss</td>
                      <td className="px-4 py-3 text-sm text-github-text">When set to 1, dismisses input when focus is lost</td>
                      <td className="px-4 py-3 text-sm text-github-muted">0</td>
                    </tr>
                    <tr className="hover:bg-github-darker/50">
                      <td className="px-4 py-3 text-sm font-medium text-github-highlight">AntiAlias</td>
                      <td className="px-4 py-3 text-sm text-github-text">Enables text anti-aliasing when set to 1</td>
                      <td className="px-4 py-3 text-sm text-github-muted">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
