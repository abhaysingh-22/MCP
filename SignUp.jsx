function App() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const accountItems = [
        { 
            icon: '👤', 
            title: 'Account Settings',
            iconBg: '#E8EAF6'
        },
        { 
            icon: '🛡️', 
            title: 'Security',
            iconBg: '#E8EAF6'
        }
    ];

    const regulatoryItems = [
        { 
            icon: '🏛️', 
            title: 'RBI Guidelines',
            iconBg: '#E8EAF6'
        },
        { 
            icon: '⚖️', 
            title: 'SEBI Regulations',
            iconBg: '#E8EAF6'
        },
        { 
            icon: '📄', 
            title: 'IT Act',
            iconBg: '#E8EAF6'
        }
    ];

    return (
        <div className="app-container">
            {/* Header */}
            <header className="header">
                <button className="back-button">‹</button>
                <h1 className="header-title">Settings & Regulatory KB</h1>
            </header>

            {/* Main Content */}
            <main className="main-content">
                {/* Account Section */}
                <section className="section">
                    <h2 className="section-title">Account</h2>
                    <div className="card">
                        {accountItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`menu-item ${index !== accountItems.length - 1 ? 'menu-item-border' : ''}`}
                            >
                                <div className="menu-item-left">
                                    <div className="icon-container" style={{ backgroundColor: item.iconBg }}>
                                        <span className="icon">{item.icon}</span>
                                    </div>
                                    <span className="menu-item-title">{item.title}</span>
                                </div>
                                <span className="chevron">›</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Preferences Section */}
                <section className="section">
                    <h2 className="section-title">Preferences</h2>
                    <div className="card">
                        <div className="menu-item">
                            <span className="menu-item-title">Language</span>
                            <div className="menu-item-right">
                                <span className="language-text">English</span>
                                <span className="chevron">›</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regulatory Knowledge Base Section */}
                <section className="section">
                    <h2 className="section-title">Regulatory Knowledge Base</h2>
                    
                    {/* Search Bar */}
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search RBI, SEBI, IT Act"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Regulatory Items */}
                    <div className="card">
                        {regulatoryItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`menu-item ${index !== regulatoryItems.length - 1 ? 'menu-item-border' : ''}`}
                            >
                                <div className="menu-item-left">
                                    <div className="icon-container" style={{ backgroundColor: item.iconBg }}>
                                        <span className="icon">{item.icon}</span>
                                    </div>
                                    <span className="menu-item-title">{item.title}</span>
                                </div>
                                <span className="chevron">›</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <button className="nav-item">
                    <span className="nav-icon">🏠</span>
                    <span className="nav-label">Home</span>
                </button>
                <button className="nav-item">
                    <span className="nav-icon">📤</span>
                    <span className="nav-label">Upload</span>
                </button>
                <button className="nav-item">
                    <span className="nav-icon">🕐</span>
                    <span className="nav-label">History</span>
                </button>
                <button className="nav-item">
                    <span className="nav-icon">⇄</span>
                    <span className="nav-label">Compare</span>
                </button>
                <button className="nav-item nav-item-active">
                    <span className="nav-icon">👤</span>
                    <span className="nav-label">Profile</span>
                </button>
            </nav>
        </div>
    );
}