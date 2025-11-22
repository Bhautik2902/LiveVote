import React, { useEffect, useState } from 'react';
import '../styles/ToastMessage.css';

const ToastMessage = ({ type, message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`toast toast--${type}`}>
      {message}
    </div>
  );
};

export default ToastMessage;
