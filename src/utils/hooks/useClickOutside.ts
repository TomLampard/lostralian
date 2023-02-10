import { type RefObject, useRef, useEffect } from 'react';


export const useClickOutside = ({
  ref,
  callback,
  enabled,
}: {
  ref: RefObject<HTMLElement>,
  callback: () => void,
  enabled: boolean,
}) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  useEffect(() => {
    if (!enabled) return;
    /**
     * 
     * alert if clicked outside of element; 
     * 
     */
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callbackRef.current();
    };

    // Binding the listener to the document
    document.addEventListener('mousedown', listener);
    return () => {

    // Unbinding the listener from the document
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, enabled])
}