
import { Download as DownloadIcon, Github, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Download = () => {
  const installSteps = [
    "Download the latest release zip file",
    "Extract the contents to your Rainmeter plugins folder",
    "Restart Rainmeter or refresh all skins",
    "Create a new skin using the InputTextX plugin"
  ];

  return (
    <section id="download" className="section-padding bg-gradient-to-b from-github-darker to-github-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#238636,transparent_60%)]"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,#388bfd,transparent_50%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Download InputTextX</h2>
          <p className="text-github-muted max-w-2xl mx-auto">
            Get the latest version of InputTextX and enhance your Rainmeter experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-lg border border-github-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-github-accent/20 to-transparent">
                <h3 className="text-2xl font-bold mb-2 text-white">InputTextX v1.0.0</h3>
                <p className="text-github-muted mb-8">Latest stable release with all features</p>
                
                <div className="space-y-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-github-accent hover:bg-github-accent/90 text-white group"
                    onClick={() => window.open('https://github.com/nstechbytes/InputTextX/releases/latest', '_blank')}
                  >
                    <DownloadIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-github-border text-github-text hover:bg-github-border/30 hover:text-white"
                    onClick={() => window.open('https://github.com/nstechbytes/InputTextX', '_blank')}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Button>
                </div>
              </div>
              
              <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-github-border bg-github-darker/50">
                <h3 className="text-xl font-medium mb-6 text-white">Installation Steps</h3>
                <ul className="space-y-4">
                  {installSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-github-accent flex-shrink-0 mt-0.5" />
                      <span className="text-github-text">{step}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-github-border">
                  <h4 className="text-sm uppercase tracking-wider text-github-muted mb-3">System Requirements</h4>
                  <ul className="text-sm text-github-text space-y-2">
                    <li>• Rainmeter 4.0 or newer</li>
                    <li>• Windows 7/8/10/11</li>
                    <li>• .NET Framework 4.5 or newer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
