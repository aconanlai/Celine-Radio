import React from 'react';
import './LanguageToggler.css';

const LanguageToggler = (props) => {
  return (
    <div
      className="language-toggle"
      onClick={props.toggleLanguage}
    >
      <span
        className={props.language === 'en' ? 'language-selected' : ''}
      >EN
      </span>
      <span className="language-toggle-slash">/</span>
      <span
        className={props.language === 'fr' ? 'language-selected' : ''}
      >FR
      </span>
    </div>
  );
};

export default LanguageToggler;
