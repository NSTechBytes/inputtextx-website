
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'ini', 
  showLineNumbers = true,
  title
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-lg overflow-hidden border border-github-border bg-github-darker mb-6">
      {title && (
        <div className="px-4 py-2 bg-github-border/30 border-b border-github-border flex justify-between items-center">
          <span className="text-sm font-medium text-github-text">{title}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copyToClipboard}
            className="h-8 px-2 text-github-muted hover:text-white hover:bg-github-border/30"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            <span className="ml-2 text-xs">{copied ? 'Copied!' : 'Copy'}</span>
          </Button>
        </div>
      )}
      
      <div className="p-4 overflow-x-auto">
        <pre className="text-github-text text-sm font-mono">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-github-muted opacity-50">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
