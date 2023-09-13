import { MouseEventHandler } from "react"

export interface IUseGreetings {
  isOpen: boolean
  setGreetingsOpen: MouseEventHandler
  setGreetingsClosed: () => void
}