
import { 
  Palette, 
  Terminal, 
  RefreshCw, 
  Type, 
  Clock, 
  Shield, 
  Zap, 
  Box
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass rounded-lg p-6 card-hover bg-github-darker hover:bg-github-darker/70 border border-github-border">
      <div className="h-12 w-12 rounded-full bg-github-highlight/10 flex items-center justify-center mb-4 text-github-highlight">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-github-muted">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Palette size={24} />,
      title: "Customizable Appearance",
      description: "Fully customize font styles, colors, borders, and backgrounds to match your desktop theme."
    },
    {
      icon: <Terminal size={24} />,
      title: "Dynamic Input Handling",
      description: "Capture and display user input with real-time updates and custom formatting options."
    },
    {
      icon: <Type size={24} />,
      title: "Placeholder Replacement",
      description: "Set custom placeholder text that updates dynamically based on user interaction."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Real-time Updates",
      description: "Seamlessly updates as you type, with configurable update intervals for optimal performance."
    },
    {
      icon: <Clock size={24} />,
      title: "Input History",
      description: "Maintain a history of recent inputs with configurable history size and persistence."
    },
    {
      icon: <Shield size={24} />,
      title: "Input Validation",
      description: "Configure input validation rules to ensure data integrity and format consistency."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightweight Performance",
      description: "Minimal resource usage with optimized code ensures smooth performance on any system."
    },
    {
      icon: <Box size={24} />,
      title: "Extensive Integration",
      description: "Easily integrate with other Rainmeter skins and plugins for a cohesive desktop experience."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
