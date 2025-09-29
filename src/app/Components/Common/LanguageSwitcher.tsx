"use client";
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'ar',
    name: 'Arabic',
    flag: '🇸🇦',
    nativeName: 'العربية'
  }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current locale from URL path
  const currentLocale = pathname.startsWith('/ar') ? 'ar' : 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    setIsOpen(false);
    
    // Get the current path without the locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.length > 1 ? `/${segments.slice(1).join('/')}` : '';
    
    // Navigate to the new locale
    router.push(`/${languageCode}${pathWithoutLocale}`);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="flag-emoji">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.nativeName}</span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${language.code === currentLocale ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag-emoji">{language.flag}</span>
              <span className="language-details">
                <span className="language-native">{language.nativeName}</span>
                <span className="language-english">{language.name}</span>
              </span>
            </button>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }
        
        .language-switcher-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        
        .language-switcher-trigger:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .flag-emoji {
          font-size: 16px;
        }
        
        .language-name {
          flex: 1;
          text-align: left;
        }
        
        .language-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          margin-top: 4px;
          overflow: hidden;
        }
        
        .language-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
          text-align: left;
        }
        
        .language-option:hover {
          background-color: #f5f5f5;
        }
        
        .language-option.active {
          background-color: #e3f2fd;
          color: #1976d2;
        }
        
        .language-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .language-native {
          font-weight: 500;
          font-size: 14px;
          color: #333;
        }
        
        .language-english {
          font-size: 12px;
          color: #666;
        }
        
        .language-option.active .language-native,
        .language-option.active .language-english {
          color: #1976d2;
        }
        
        /* RTL Support */
        :global(.rtl-layout) .language-switcher-trigger {
          direction: rtl;
        }
        
        :global(.rtl-layout) .language-name {
          text-align: right;
        }
        
        :global(.rtl-layout) .language-dropdown {
          left: auto;
          right: 0;
        }
      `}</style>
    </div>
  );
}
