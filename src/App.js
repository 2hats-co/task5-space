import React from 'react';
import { useState, useEffect } from 'react';

import PictureDisplay from './PictureDisplay';
import Loading from './Loading';

const getData = async () => {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  const data = await res.json();
  return data;
}


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData().then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> :
        <PictureDisplay
          title={data.title}
          description={data.explanation}
          imageURL={data.url}
          date={data.date}
        />
      }
    </div>

  );

}


export default App;
