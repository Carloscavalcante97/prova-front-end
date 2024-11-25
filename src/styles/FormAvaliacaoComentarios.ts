import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StarsContainter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2d9cdb;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s;
  min-height: 100px;

  &:focus {
    border-color: #2d9cdb;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #2d9cdb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: #2588d0;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(45, 156, 219, 0.6);
  }
`;

export const ErrorMsg = styled.p`
  color: #e74c3c;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
`;
