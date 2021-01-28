import { useState } from 'react';

// const ws = new Websocet('ws://chat.shas.tel');
// ws.addEventListener('open', () => {
//   alert('WS is redy');
// });

export default function Websocet(props) {
  const [message, setMessage] = useState();
  // const
  return (
    <>
      <h1>Hellow World </h1>
      <div>{message}</div>
      {/* <form onSabmit={}> */}
      <input onChange={e => setMessage(e.target.value)} value={message}></input>
      {/* </form> */}
    </>
  );
}
