import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query) //
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
  }, []) // 빈 배열이면 한 번만 호출

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
