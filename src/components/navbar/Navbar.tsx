import './navbar.scss';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='/logo.svg' alt='logo' />
                <span>Dashboard Admin</span>
            </div>
            <div className='icons'>
                <img src='/public/search.svg' alt='search' />
                <img src='/public/app.svg' alt='app' />
                <img src='/public/expand.svg' alt='expand' />
                <div className='notification'>
                    <img src='/public/notifications.svg' alt='notification' />
                    <span>1</span>
                </div>
                <div className='user'>
                    <img
                        src='https://lpsonline.sas.upenn.edu/sites/default/files/2023-12/plpso-ferature-academic-prof-writing-2.jpg'
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                        }}
                        alt='user'
                    />
                    <span>Jane Smith</span>
                </div>
                <img src='/public/settings.svg' alt='settings' />
            </div>
        </div>
    );
};
