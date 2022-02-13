import { useRef, useState } from 'react';
import styles from './style.module.css';

const SRC = 'https://v16-webapp.tiktok.com/b03c037d92b5539a57bd075890d2fc52/6209a88b/video/tos/useast2a/tos-useast2a-ve-0068c001/004560f1ad964c73a851e3b08538376e/?a=1988&br=3934&bt=1967&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7ThFrk6DXq&l=202202131854260102230721701C59DF22&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNoOTY6ZmtuOjMzNzczM0ApNjtlNWc1Z2U1NzQ5OGZmZmcxLmIycjRfMl9gLS1kMTZzczE1MjM0X19iMDM2MV4zYjM6Yw%3D%3D&vl=&vr='

export default function VideoPlayer() {
    const [playing, setPlaying ] = useState(false)
    const video = useRef();
    const handlePlay = () => {
        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }

        setPlaying(!playing)
    }

    return(
        <div>
            <video
                className={styles.video}
                src={SRC}
                ref={video}
                controls={false}
            />
            <button className={styles.play} onClick={handlePlay} />
        </div>
    )
}