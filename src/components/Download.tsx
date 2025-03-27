
import { useEffect, useState } from 'react';
import { Download as DownloadIcon, Github, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/hooks/use-toast';

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  name: string;
}

const Download = () => {
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/NSTechBytes/InputTextX/releases/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch release data');
        }
        const data = await response.json();
        setLatestRelease(data);
      } catch (error) {
        console.error('Error fetching release data:', error);
        toast({
          title: "Couldn't fetch latest release",
          description: "Using fallback version information",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const version = latestRelease?.tag_name || 'v1.0';
  const releaseDate = latestRelease ? formatDate(latestRelease.published_at) : '';

  const handleDownload = (url: string, name: string) => {
    window.open(url, '_blank');
    toast({
      title: "Download initiated",
      description: `${name} is being downloaded`,
    });
  };

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
                {loading ? (
                  <>
                    <Skeleton className="h-8 w-3/4 mb-2" />
                    <Skeleton className="h-5 w-1/2 mb-8" />
                    <Skeleton className="h-10 w-full mb-4" />
                    <Skeleton className="h-10 w-full mb-4" />
                    <Skeleton className="h-10 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-white">InputTextX {version}</h3>
                    {releaseDate && (
                      <p className="text-github-muted mb-8">Released on {releaseDate}</p>
                    )}
                    
                    <div className="space-y-6">
                      <Button 
                        size="lg" 
                        className="w-full bg-github-accent hover:bg-github-accent/90 text-white group"
                        onClick={() => handleDownload(`https://github.com/NSTechBytes/InputTextX/releases/download/${version}/InputTextX_dll_${version}.zip`, 'InputTextX DLL')}
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
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-github-border text-github-text hover:bg-github-border/30 hover:text-white"
                        onClick={() => window.open('https://github.com/nstechbytes/InputTextX/archive/refs/heads/main.zip', '_blank')}
                      >
                        <DownloadIcon className="mr-2 h-5 w-5" />
                        Download Source Code
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-github-border text-github-text hover:bg-github-border/30 hover:text-white"
                        onClick={() => handleDownload(`https://github.com/NSTechBytes/InputTextX/releases/download/${version}/InputTextX_${version}.rmskin`, 'Example Skins')}
                      >
                        <DownloadIcon className="mr-2 h-5 w-5" />
                        Download Example Skins
                      </Button>
                    </div>
                  </>
                )}
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
