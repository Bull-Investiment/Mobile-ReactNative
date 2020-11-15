import React from 'react';
import { WebView } from 'react-native-webview';

function Chat() {
  return (
    <WebView
      source={{
        uri: 'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=88117abd-03c2-4296-9511-020392343a8c&serviceInstanceID=83265761-7bb0-4801-83cc-90f1d901a3aa'
      }}
    />
  )
}

export default Chat;