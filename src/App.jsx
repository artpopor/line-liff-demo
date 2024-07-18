import React, { useState, useEffect } from 'react';

const liff = window.liff;

const App = () => {
  const [name, setName] = useState('');
  const [userLineID, setUserLineID] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId: '2005869975-nMZOOGBm' });
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          setName(profile.displayName);
          setUserLineID(profile.userId);
          setPictureUrl(profile.pictureUrl);
        } else {
          liff.login();
        }
      } catch (err) {
        console.error(err);
      }
    };

    initializeLiff();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="support">
          <p>ชื่อ {name}</p>
          <p>Line ID {userLineID}</p>
          <img alt="pic" src={pictureUrl} />
        </div>
      </header>
    </div>
  );
};

export default App;
