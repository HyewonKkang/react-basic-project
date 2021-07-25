import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: { snippet }}) => ( // props 대신 video로 이용 가능 (video 안의 snippet으로 접근 가능) = deconstructing
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url}
                alt="video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
        
);

export default VideoItem;