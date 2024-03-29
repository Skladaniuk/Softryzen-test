import scss from "./section-header.module.scss";



export const SectionHeader = () => {

   
  return (
  
      <header className={scss.header}>
        <a href="/" className={scss.logo}>
          <svg
            className={scss.logoIcon}
            width="40"
            height="36"
            viewBox="0 0 40 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_37_29)">
              <path d="M37.0025 2.69091C33.2628 2.90351 25.8298 3.67734 21.2412 6.49101C20.9245 6.68515 20.745 7.03037 20.745 7.39131V32.2652C20.745 33.0548 21.6069 33.5538 22.3337 33.1874C27.0547 30.8071 33.8824 30.1577 37.2584 29.98C38.411 29.9191 39.307 28.9936 39.307 27.8841V4.78955C39.3077 3.5789 38.2595 2.61982 37.0025 2.69091ZM18.0658 6.49101C13.4779 3.67734 6.04492 2.9042 2.30523 2.69091C1.04821 2.61982 0 3.5789 0 4.78955V27.8848C0 28.9949 0.896024 29.9205 2.04864 29.9807C5.42596 30.1584 12.257 30.8085 16.9781 33.1901C17.7028 33.5559 18.562 33.0575 18.562 32.27V7.379C18.562 7.01738 18.3832 6.68584 18.0658 6.49101Z" />
            </g>
            <defs>
              <clipPath id="clip0_37_29">
                <rect
                  width="39.3077"
                  height="35"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className={scss.finance}>Finance</span>
          <span className={scss.ledger}>Ledger</span>
        </a>
        <nav>
          <ul className={scss.navItems}>
            <li className={scss.navItem}>Home</li>
            <li className={scss.navItem}>About</li>
            <li className={scss.navItem}>Cases</li>
            <li className={scss.navItem}>Blog</li>
            <li className={scss.navItem}>Contact</li>
          </ul>
        </nav>
      </header>
   
  );
};
