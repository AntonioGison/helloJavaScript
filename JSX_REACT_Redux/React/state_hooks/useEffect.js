

// There are three key moments when the Effect Hook can be utilized:

// When the component is first added, or mounted, to the DOM and renders.
// When the state or props change, causing the component to re-render.
// When the component is removed, or unmounted, from the DOM.


//NOTE: it will always run once on mount and everytime the state change and ONLY when it changes between renders


import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

    // your code here
  const increment = () =>{
    setClickCount( (prev) => prev + 1 )
    }

useEffect(() => {
  document.addEventListener('mousedown', increment);
  //return always a clean up FUNCTION to avoid memory issues
  return () => {
    document.removeEventListener('mousedown', increment);
  };
});

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

//NOTE: If we want to only call our effect after the first render, we pass an empty array [] to useEffect() as the second argument. 
//This second argument is called the dependency array.


useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if the value stored by count changes



//Another example

import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then((response) => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then((response) => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then((response) => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
