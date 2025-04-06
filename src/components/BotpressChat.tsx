import { useState } from 'react';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = 'dc83ff54-36bd-40ca-b574-e3832d1a46a7';

const configuration: Configuration = {
  color: '#000',
};

const BotpressChat = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => setIsWebchatOpen((prev) => !prev);

  return (
    <WebchatProvider client={client} configuration={configuration}>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }}
      >
        <Fab onClick={toggleWebchat} />
      </div>

      {isWebchatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            zIndex: 9999,
            maxHeight: '60vh',
            overflow: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            backgroundColor: '#fff',
            width: '90vw',
            minWidth: '280px',
            maxWidth: '400px',
          }}
        >
          <Webchat />
        </div>
      )}
    </WebchatProvider>
  );
};



export default BotpressChat;
