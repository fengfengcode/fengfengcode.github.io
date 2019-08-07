import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>凤凤</span>
          </a>
          <span>个人业务平台</span>
        </h1>
      </div>
    </header>
  );
}
