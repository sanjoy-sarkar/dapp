import './App.css';

function App() {
  return (
    <div className="App">
       
       <header className="header">
        <nav className="header-nav">
          <a href="/">
            <img
              alt="logo"
              width="134"
              height="56"
              srcSet="https://images.unsplash.com/photo-1636487658544-7704a1fad45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              src="https://images.unsplash.com/photo-1636487658544-7704a1fad45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            />
          </a>
          <button className="connect-wallet-button">Connect Wallet</button>
        </nav>
      </header>
      <main className="main">
        <div className="middle-page">
          <div className="middle-wrapper">
            <div className="middle-media">
              <picture>
                <source media="(max-width: 767px)" />
                <source media="(min-width: 768px)" />
                <img
                  alt=""
                  width="655"
                  height="655"
                  srcSet="https://images.unsplash.com/photo-1636487658544-7704a1fad45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                />
              </picture>
            </div>
            <div className="middle-content">  
              <p className="middle-text">NFT: PROJECT</p>
              <div className="middle-panels">
                <div className="sale-panel locked">
                  <div className="sale-panel-header">
                    <div className="sale-panel-label">
                      <p className="sale-panel-title">
                        <svg className="sale-panel-lock-icon" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" />
                        </svg>
                        Stage 1: Locked
                      </p>
                    </div>
                  </div>
                  <div className="sale-panel-content">
                    <div className="sale-panel-content-inner">
                      <div className="sale-panel-countdown">
                        <svg className="sale-panel-clock-icon" xmlns="">
                          <circle cx="12" cy="12" r="10" />
                          <path d="put lock icon path" />
                        </svg>
                        <span className="sale-panel-countdown-value">00:00:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sale-panel unlocked">
                  <div className="sale-panel-header">
                    <div className="sale-panel-label">
                      <p className="sale-panel-title">
                        <svg className="sale-panel-lock-icon" xmlns="">
                          <path d="put lock icon path" />
                        </svg>
                        Stage 2: Unlocked
                      </p>
                    </div>
                  </div>
                  <div className="sale-panel-content">
                    <div className="sale-panel-content-inner">
                      <div className="sale-panel-countdown">
                        <svg className="sale-panel-clock-icon" xmlns="">
                          <circle cx="12" cy="12" r="10" />
                          <path d="put lock icon path" />
                        </svg>
                        <span className="sale-panel-countdown-value">00:00:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sale-panel unlocked">
                  <div className="sale-panel-header">
                    <div className="sale-panel-label">
                      <p className="sale-panel-title">
                        <svg className="sale-panel-lock-icon" xmlns="">
                          <path d="put lock icon path" />
                        </svg>
                        Stage 3: Unlocked
                      </p>
                    </div>
                  </div>
                  <div className="sale-panel-content">
                    <div className="sale-panel-content-inner">
                      <div className="sale-panel-countdown">
                        <svg className="sale-panel-clock-icon" xmlns="">
                          <circle cx="12" cy="12" r="10" />
                          <path d="put lock icon path" />
                        </svg>
                        <span className="sale-panel-countdown-value">00:00:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-wrapper">
            <ul className="footer-menu">
              <li>
                <a href="/faq" className="footer-link">FAQ</a>
              </li>
              <li>
                <a href="/terms" className="footer-link">Terms</a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">Privacy</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="enter link" className="footer-social-link">
                <img src="" alt="Twitter" />
              </a>
              <a href="enter link" className="footer-social-link">
                <img src="" alt="Discord" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;