import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartProductListType } from '../../types/types';
import styled from 'styled-components';

export default function FormFinalizaCompras(props: {
  setCartProducts: (state: CartProductListType[]) => void }) {
  const { setCartProducts } = props;

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [pagamento, setPagamento] = useState<string>('');
  const [checkForm, setCheckForm] = useState(false);

  function checkFormImput() {
    const inputs = [nome, email, cpf, telefone, cep, endereco, pagamento];
    return inputs.every((input) => input.trim() !== '');
  }

  const handleSubimit = (event: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckForm(false);
    if (!checkFormImput()) {
      setCheckForm(true);
      return;
    }
    localStorage.removeItem('cartProducts');
    setCartProducts([]);
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubimit}>
      <Fieldset>
        <Label htmlFor="Nome Completo">
          Nome Completo
          <Input
            type="text"
            id="Nome Completo"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            maxLength={40}
            required
          />
        </Label>
        <Label htmlFor="Email">
          Email
          <Input
            type="email"
            id="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={50}
            required
          />
        </Label>
        <Label htmlFor="CPF">
          CPF
          <Input
            type="text"
            id="CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            maxLength={11}
            required
          />
        </Label>
        <Label htmlFor="Telefone">
          Telefone
          <Input
            type="text"
            id="Telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            maxLength={15}
            required
          />
        </Label>
        <Label htmlFor="CEP">
          CEP
          <Input
            type="text"
            id="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            maxLength={9}
            required
          />
        </Label>
        <Label htmlFor="Endereço">
          Endereço
          <Input
            type="text"
            id="Endereço"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
            maxLength={100}
            required
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <PaymentLabel>
          <RadioLabel>
            <Input
              type="radio"
              id="Boleto"
              name="pagamento"
              value="Boleto"
              checked={pagamento === 'Boleto'}
              onChange={(event) => setPagamento(event.target.value)}
            />
            Boleto
          </RadioLabel>
          <RadioLabel>
            <Input
              type="radio"
              id="Visa"
              name="pagamento"
              value="Visa"
              checked={pagamento === 'Visa'}
              onChange={(event) => setPagamento(event.target.value)}
            />
            Visa
          </RadioLabel>
          <RadioLabel>
            <Input
              type="radio"
              id="MasterCard"
              name="pagamento"
              value="MasterCard"
              checked={pagamento === 'MasterCard'}
              onChange={(event) => setPagamento(event.target.value)}
            />
            MasterCard
          </RadioLabel>
          <RadioLabel>
            <Input
              type="radio"
              id="Elo"
              name="pagamento"
              value="Elo"
              checked={pagamento === 'Elo'}
              onChange={(event) => setPagamento(event.target.value)}
            />
            Elo
          </RadioLabel>
        </PaymentLabel>
        {checkForm && <ErrorMsg>Campos inválidos. Por favor, preencha todos os campos corretamente.</ErrorMsg>}
      </Fieldset>

      <SubmitButton type="submit">Comprar</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2d9cdb;
  }
`;

const PaymentLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ErrorMsg = styled.p`
  color: #e74c3c;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 14px 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #2d9cdb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2588d0;
  }
`;
