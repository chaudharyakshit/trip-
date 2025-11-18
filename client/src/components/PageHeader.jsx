import React from 'react';
import headerBanner from '/assets/images/innerpage banner.png';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
      <img src={headerBanner} alt="Header Banner" className="header-banner-img" />
      <div className="header-overlay">
        <div className="header-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <style jsx>{`
        .page-header {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .header-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-content {
          text-align: center;
          color: white;
        }

        .header-content h1 {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 15px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header-content p {
          font-size: 18px;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .page-header {
            height: 200px;
          }

          .header-content h1 {
            font-size: 32px;
          }

          .header-content p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            height: 150px;
          }

          .header-content h1 {
            font-size: 24px;
          }

          .header-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default PageHeader;
