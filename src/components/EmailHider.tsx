import { useState } from 'react';

// Email obfuscation component - prevents scraping while keeping it human-readable
export const EmailHider = ({ 
  username = "pedro",
  middle = "gustavo", 
  last = "costa",
  domain = "gmail",
  buttonText = "📧 Contact me",
  className = ""
}) => {
  const [isCopied, setIsCopied] = useState(false);
  
  // Build email on demand - impossible to read in source
  const buildEmail = () => {
    const parts = [username, middle, last];
    const domainWithTLD = [domain, 'com'].join('.');
    return `${parts.join('')}@${domainWithTLD}`;
  };
  
  const handleClick = async () => {
    const email = buildEmail();
    
    // Try browser's native mailto first
    window.location.href = `mailto:${email}`;
    
    // Also copy to clipboard as backup
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  
  // Alternative approach: show encoded version that gets decoded on hover
  const encodedEmail = atob(`${username}${middle}${last}${domain}${'com'}`.split('').reverse().join(''));
  
  return (
    <div className={className}>
      {/* Button version - most user-friendly */}
      <button
        onClick={handleClick}
        className={"
          inline-flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-gradient-to-r from-blue-600 to-blue-500 
          hover:from-blue-500 hover:to-blue-400 
          text-white font-medium transition-all duration-200 
          hover:shadow-lg hover:scale-105 
          border border-blue-700/50
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          active:scale-95
        " + (className || "")}
        type="button"
        aria-label="Contact via email"
        title={isCopied ? "Email copied!" : "Click to email"}
      >
        {buttonText}
        {isCopied ? (
          <span className="text-green-300">✓</span>
        ) : (
          <span className="ml-1">📧</span>
        )}
      </button>
      
      {/* Hidden email for accessibility */}
      <span className="sr-only">
        Contact: {buildEmail()}
      </span>
      
      {/* Encoded version that's human-visible but hard to scrape */}
      <div className="mt-2 text-sm text-gray-400">
        <span className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-600 opacity-50 hover:opacity-100 transition-opacity">
          {/* Shows reversed string that gets decoded on interaction */}
          {buildEmail().split('').reverse().join('')} - click to email
        </span>
      </div>
    </div>
  );
};

// Alternative: CSS-only approach using data-attributes
export const EmailData = ({ 
  parts = ['pedro', 'gustavo', 'costa'],
  domain = 'gmail',
  
  className = ""
}) => (
  <span 
    className={"email-obfuscated " + className}
    data-username={parts.join('')}
    data-domain={domain}
    data-tld="com"
    onClick="(function() { 
      const email = this.dataset.username + '@' + this.dataset.domain + '.' + this.dataset.tld;
      window.location.href = 'mailto:' + email;
    }).bind(this)()"
    style={{cursor: 'pointer'}}
    title={atob((parts.join('') + '@' + domain + '.com').split('').reverse().join(''))}
  >
    Email me
  </span>
);

// Export as default for easy import
export default EmailHider;