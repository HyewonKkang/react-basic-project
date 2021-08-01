import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
    ({ video, video: { snippet }, onVideoClick, display }) => { // props 대신 video로 이용 가능 (video 안의 snippet으로 접근 가능) = deconstructing
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
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
    }
)

export default VideoItem;