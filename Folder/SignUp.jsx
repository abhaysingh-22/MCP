const { useState } = React;

function SignUpApp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Sign up successful!');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Continue with ${provider}`);
        alert(`Continuing with ${provider}`);
    };

    return (
        <div className="signup-container">
            <Logo />
            <Header />
            <SocialButtons onSocialLogin={handleSocialLogin} />
            <Divider />
            <SignUpForm 
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    );
}

function Logo() {
    return (
        <div className="logo">
            <h1 className="logo-text">FinLex</h1>
        </div>
    );
}

function Header() {
    return (
        <div className="header-section">
            <h2 className="title">Get Started</h2>
            <p className="subtitle">Create an account or sign in.</p>
        </div>
    );
}

function SocialButtons({ onSocialLogin }) {
    return (
        <div className="social-buttons">
            <button 
                className="social-button btn-email"
                onClick={() => onSocialLogin('Email')}
            >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Continue with Email
            </button>
            
            <button 
                className="social-button btn-google"
                onClick={() => onSocialLogin('Google')}
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
            </button>
            
            <button 
                className="social-button btn-linkedin"
                onClick={() => onSocialLogin('LinkedIn')}
            >
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Continue with LinkedIn
            </button>
        </div>
    );
}

function Divider() {
    return (
        <div className="divider">
            <span className="divider-text">Or</span>
        </div>
    );
}

function SignUpForm({ formData, onInputChange, onSubmit }) {
    return (
        <form className="form-section" onSubmit={onSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-input"
                    value={formData.password}
                    onChange={onInputChange}
                    required
                />
            </div>
            
            <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-input"
                    value={formData.confirmPassword}
                    onChange={onInputChange}
                    required
                />
            </div>
            
            <button type="submit" className="submit-button">
                Sign Up
            </button>
        </form>
    );
}

function Footer() {
    return (
        <p className="footer-text">
            By continuing, you agree to our{' '}
            <a href="#" className="footer-link">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="footer-link">Privacy Policy</a>.
        </p>
    );
}

ReactDOM.render(<SignUpApp />, document.getElementById('root'));
