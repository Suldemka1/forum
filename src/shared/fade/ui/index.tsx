import { FC, MouseEvent } from "react";
import { useFade } from "../api/store";
import "./styles.css";
import { useGreetings } from "../../greetings/api/store";

const Fade: FC = () => {
  const { isOpen, setFadeClosed } = useFade((state) => state);
  const { setGreetingsClosed } = useGreetings();

  function handleClick(e: MouseEvent) {
    setFadeClosed(e);
    setGreetingsClosed();
  }

  return <>{isOpen && <div onClick={handleClick} className="fade"></div>}</>;
};

export { Fade };
