import * as React from 'react';
import { createSocket } from './master.api';
import { AuthContext } from 'core';
import { useParams } from 'react-router-dom';
import { MasterComponent } from './master.component';

export const MasterContainer = () => {
  const authContext = React.useContext(AuthContext);
  const params = useParams(); // TODO: Type this
  const [room, setRoom] = React.useState('');

  React.useEffect(() => {
    // TODO: Error handling
    // Connect to the socket
    const nickname = authContext.nickname;
    const room = params['room'];
    const socket = createSocket({
      user: nickname,
      room,
      isMaster: true,
    });

    setRoom(room);

    socket.on('message', msg => {
      console.log(msg);
    });
  }, []);

  return <MasterComponent room={room} />;
};