import { MouseEventHandler } from "react"

export interface IUseFade {
  isOpen: boolean
  setFadeOpen: MouseEventHandler
  setFadeClosed: MouseEventHandler
}