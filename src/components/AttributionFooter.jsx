import React from 'react';

function AttributionFooter() {
  return (
    <footer className="fixed hidden bottom-4 left-1/2 transform -translate-x-1/2 desktop:block text-lightCyan">
      Challenge by{' '}
      <a
        className="text-neonGreen cursor-pointer"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className="text-neonGreen cursor-pointer" href="https://github.com/brayanobisto">
        Brayan Obispo Torres
      </a>
      .
    </footer>
  );
}

export default AttributionFooter;
