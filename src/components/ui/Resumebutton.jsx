import React, { useState } from 'react';

const DownloadButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    // 1. Start the animation
    setIsChecked(true);

    // 2. Wait for the "installing" animation to finish (3.5 seconds)
    setTimeout(() => {
      // 3. Create a temporary link to trigger the download
      const link = document.createElement('a');
      link.href = '/prakharmainresume.pdf.pdf'; // Path to file in public folder
      link.download = 'Prakhar_Resume.pdf'; // The name it will save as on the user's computer
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 4. Optional: Reset button state after 2 seconds so it can be clicked again
      setTimeout(() => setIsChecked(false), 2000);
    }, 3500);
  };

  return (
    <>
      <style>{`
        /* Scoped styles for DownloadButton */
        .db-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
          
          /* POSITIONING: Fixed to Top Right */
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999; /* Ensures it sits on top of everything */
        }

        .db-label {
          background-color: transparent;
          border: 2px solid rgb(91, 91, 240);
          display: flex;
          align-items: center;
          border-radius: 50px;
          width: 160px;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 5px;
          position: relative;
          user-select: none;
        }

        .db-label::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
          border-radius: 100%;
          margin: auto;
          opacity: 0;
          visibility: hidden;
        }

        .db-input {
          display: none;
        }

        .db-title {
          font-size: 17px;
          color: #fff;
          transition: all 0.4s ease;
          position: absolute;
          right: 18px;
          bottom: 14px;
          text-align: center;
          pointer-events: none;
        }

        .db-title:last-child {
          opacity: 0;
          visibility: hidden;
        }

        .db-circle {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          background-color: rgb(91, 91, 240);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
          position: relative;
          box-shadow: 0 0 0 0 rgb(255, 255, 255);
          overflow: hidden;
          flex-shrink: 0;
        }

        .db-icon {
          color: #fff;
          width: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
          pointer-events: none;
        }

        .db-square {
          aspect-ratio: 1;
          width: 15px;
          border-radius: 2px;
          background-color: #fff;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
          pointer-events: none;
        }

        .db-circle::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-color: #3333a8;
          width: 100%;
          height: 0;
          transition: all 0.4s ease;
        }

        /* Animation States */
        .db-label:has(.db-input:checked) {
          width: 57px;
          animation: db-installed 0.4s ease 3.5s forwards;
        }

        .db-label:has(.db-input:checked)::before {
          animation: db-rotate 3s ease-in-out 0.4s forwards;
        }

        .db-input:checked + .db-circle {
          animation:
            db-pulse 1s forwards,
            db-circleDelete 0.2s ease 3.5s forwards;
          rotate: 180deg;
        }

        .db-input:checked + .db-circle::before {
          animation: db-installing 3s ease-in-out forwards;
        }

        .db-input:checked + .db-circle .db-icon {
          opacity: 0;
          visibility: hidden;
        }

        .db-input:checked ~ .db-circle .db-square {
          opacity: 1;
          visibility: visible;
        }

        .db-input:checked ~ .db-title {
          opacity: 0;
          visibility: hidden;
        }

        .db-input:checked ~ .db-title:last-child {
          animation: db-showInstalledMessage 0.4s ease 3.5s forwards;
        }

        /* Keyframes */
        @keyframes db-pulse {
          0% { scale: 0.95; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { scale: 1; box-shadow: 0 0 0 16px rgba(255, 255, 255, 0); }
          100% { scale: 0.95; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        @keyframes db-installing {
          from { height: 0; }
          to { height: 100%; }
        }

        @keyframes db-rotate {
          0% { transform: rotate(-90deg) translate(27px) rotate(0); opacity: 1; visibility: visible; }
          99% { transform: rotate(270deg) translate(27px) rotate(270deg); opacity: 1; visibility: visible; }
          100% { opacity: 0; visibility: hidden; }
        }

        @keyframes db-installed {
          100% { width: 150px; border-color: rgb(35, 174, 35); }
        }

        @keyframes db-circleDelete {
          100% { opacity: 0; visibility: hidden; }
        }

        @keyframes db-showInstalledMessage {
          100% { opacity: 1; visibility: visible; right: 56px; }
        }
      `}</style>

      <div className="db-container">
        <label className="db-label">
          <input 
            type="checkbox" 
            className="db-input" 
            checked={isChecked}
            onChange={handleChange}
          />
          <span className="db-circle">
            <svg
              className="db-icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              ></path>
            </svg>
            <div className="db-square"></div>
          </span>
          <p className="db-title">RESUME</p>
          <p className="db-title">Open</p>
        </label>
      </div>
    </>
  );
};

export default DownloadButton;