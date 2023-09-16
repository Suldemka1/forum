import { MouseEventHandler } from "react";

export interface IUseGreetings {
  isOpen: boolean;
  setGreetingsOpen: () => void;
  setGreetingsClosed: () => void;
}
