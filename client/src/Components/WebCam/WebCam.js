import React, { useState } from 'react'
import Webcam from "react-webcam";
import Button from '../Button/Button';
import styles from "../WebCam/WebCam.module.css";

function WebCam() {

    const [image, setImage] = useState('')
    const videoConstraints = {
        width: 720,
        height: 360,
        facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        },
        [webcamRef]
    );
    return (
        <div className={styles.webcam}>
            <div className={styles.video}>
            <Webcam
                    className={styles.cam}
                    mirrored={true}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    height={360}
                    width={720}
                    videoConstraints={videoConstraints}
                ></Webcam>
            <Button click={() => { capture() }}></Button>
            </div>
                
            <img src={image}></img>
        </div>
    )
}

export default WebCam