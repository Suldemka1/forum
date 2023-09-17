import { useState, useCallback, useLayoutEffect } from "react";

interface IGetDimensionObject {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}

const debounce = (limit: number, callback: Function) => {
  let timeoutId: number;

  return (...args: unknown[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

function getDimensionObject(node: Element): IGetDimensionObject {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export default function useBoundingRect(limit?: number) {
  const [dimensions, setDimensions] = useState<IGetDimensionObject>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [node, setNode] = useState<Element | null>(null);

  const ref = useCallback((node: Element) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener<"resize">("resize", listener);
      window.addEventListener<"scroll">("scroll", listener);
      return () => {
        window.removeEventListener<"resize">("resize", listener);
        window.removeEventListener<"scroll">("scroll", listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node];
}
