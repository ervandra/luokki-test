import React from 'react';

export default function Page({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {children}
        </div>
      </div>
    </div>
  )
}