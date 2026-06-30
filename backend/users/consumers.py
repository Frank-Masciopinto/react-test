import json

from channels.generic.websocket import AsyncWebsocketConsumer


class UserUpdatesConsumer(AsyncWebsocketConsumer):
    """WebSocket consumer for live user directory updates.

    TODO: join a channel group and broadcast when users are created/updated.
    """

    async def connect(self):
        await self.accept()
        await self.send(text_data=json.dumps({"type": "connection_ack", "message": "connected"}))

    async def disconnect(self, close_code):
        # TODO: leave channel group when implemented
        return None

    async def receive(self, text_data=None, bytes_data=None):
        # TODO: handle subscribe/unsubscribe messages from the Angular client
        if text_data:
            await self.send(text_data=json.dumps({"type": "echo", "payload": text_data}))
