import React from 'react';
import '../styles/FormCard.css';
import TextEntry from './TextEntry';
import { useParams } from 'react-router-dom';

const FormCard = ({ title, children }) => {
  const { id } = useParams();

  return (
    <div className="form-card">    
      <div className="form-card__content">
        {children}
      </div>
    </div>
  );
};

export default FormCard;