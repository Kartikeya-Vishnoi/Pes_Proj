import { useContext, useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import classes from './peer.module.css';
import { Videocontext } from '../../store/VideoContext';

function Adminvideo() {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const ctx=useContext(Videocontext)
  useEffect(() => {
    const peer = new Peer();
    peer.on('open', (id) => {
      setPeerId("NGbv1gMH11NJQ8NNtjeQsyw51k53")
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      console.log("gotcalled")
      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        console.log(mediaStream);
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])
  console.log(ctx.vid)
  const call = (remotePeerId) => {
    
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
 
  }

  return (
    <div className={classes.App}>
      {/* <h2>Current user id is {peerId}</h2> */}
      <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
      <button onClick={() => call(remotePeerIdValue)}>Call</button>
      <div className={classes.wrap}>
        <video ref={currentUserVideoRef} className={classes.video}/>
        <video ref={remoteVideoRef} className={classes.video}/>
        </div>
      </div>
  );
}

export default Adminvideo;