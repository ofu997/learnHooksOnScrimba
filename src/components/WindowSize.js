import { useEffect, useState } from 'react';

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])
  // const [visible, setVisible] = useState(false)
  useEffect(() => {
    // let timeoutId; 
    const handleResize = () => {
      cb()
      setWindowSize([window.innerWidth, window.innerHeight]);
      // setVisible(true);
      // clearTimeout(timeoutId);
      // timeoutId = setTimeout(() => setVisible(false), 500);
    }
    window.addEventListener('resize', handleResize)
    return () => windowHeight.removeEventListener('resize', handleResize)
  },[])
  return [windowWidth, windowHeight]
} 

