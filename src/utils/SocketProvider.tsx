"use client";

import { useEffect, useState, createContext, ReactChild } from "react";

const ws = new WebSocket(
  "wss://ickxrsk9i3.execute-api.ap-southeast-2.amazonaws.com/prod"
);

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: ReactChild;
}

export const SocketProvider = (props: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
