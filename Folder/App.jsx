const { useState } = React;

function App() {
    return (
        <div className="container">
            <Header />
            <div className="content-wrapper">
                <AccountSection />
                <PreferencesSection />
                <RegulatoryKnowledgeBase />
            </div>
            <BottomNav />
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <button className="back-button">‹</button>
            <h1 className="header-title">Settings & Regulatory KB</h1>
        </div>
    );
}

function AccountSection() {
    return (
        <div className="section">
            <h2 className="section-title">Account</h2>
            <div className="menu-card">
                <MenuItem 
                    icon="👤" 
                    text="Account Settings" 
                    bgColor="#e8f0fe"
                />
                <MenuItem 
                    icon="🛡️" 
                    text="Security" 
                    bgColor="#e8f0fe"
                />
            </div>
        </div>
    );
}

function PreferencesSection() {
    return (
        <div className="section">
            <h2 className="section-title">Preferences</h2>
            <div className="language-selector">
                <span className="language-label">Language</span>
                <div className="language-value">
                    <span>English</span>
                    <span className="menu-arrow">›</span>
                </div>
            </div>
        </div>
    );
}

function RegulatoryKnowledgeBase() {
    return (
        <div className="section">
            <h2 className="section-title">Regulatory Knowledge Base</h2>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search RBI, SEBI, IT Act"
                />
            </div>
            <div className="menu-card">
                <MenuItem 
                    icon="🏛️" 
                    text="RBI Guidelines" 
                    bgColor="#e8f0fe"
                />
                <MenuItem 
                    icon="⚖️" 
                    text="SEBI Regulations" 
                    bgColor="#e8f0fe"
                />
                <MenuItem 
                    icon="📄" 
                    text="IT Act" 
                    bgColor="#e8f0fe"
                />
            </div>
        </div>
    );
}

function MenuItem({ icon, text, bgColor }) {
    return (
        <div className="menu-item">
            <div className="icon-wrapper" style={{ backgroundColor: bgColor }}>
                <span className="icon">{icon}</span>
            </div>
            <span className="menu-text">{text}</span>
            <span className="menu-arrow">›</span>
        </div>
    );
}

function BottomNav() {
    return (
        <nav className="bottom-nav">
            <button className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Home</span>
            </button>
            <button className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>Upload</span>
            </button>
            <button className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>History</span>
            </button>
            <button className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10"></path>
                    <path d="M12 20V4"></path>
                    <path d="M6 20v-6"></path>
                </svg>
                <span>Compare</span>
            </button>
            <button className="nav-item">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Profile</span>
            </button>
        </nav>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
