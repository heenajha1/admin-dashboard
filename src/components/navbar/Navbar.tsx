import './navbar.scss';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='../../../public/logo.svg' alt='logo' />
                <span>Dashboard Admin</span>
            </div>
            <div className='icons'>
                <img src='../../../public/search.svg' alt='search' />
                <img src='../../../public/app.svg' alt='app' />
                <img src='../../../public/expand.svg' alt='expand' />
                <div className='notification'>
                    <img
                        src='../../../public/notifications.svg'
                        alt='notification'
                    />
                    <span>1</span>
                </div>
                <div className='user'>
                    <img
                        src='https://i.seadn.io/gae/nB99Cnn0mXfp6EMiDflAL9DnV3ckcta0czwG_wF6whkzhE5D-SEz8-dZ475X2UfUTuR9pdgqPbJUTcAUQqhCGDwqk8OgQQbpYI0NwA?auto=format&dpr=1&w=1000'
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                        }}
                        alt='user'
                    />
                    <span>User Name</span>
                </div>
                <img src='../../../public/settings.svg' alt='settings' />
            </div>
        </div>
    );
};
