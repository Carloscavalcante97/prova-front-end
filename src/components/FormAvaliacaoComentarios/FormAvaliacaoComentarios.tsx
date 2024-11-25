import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import StarRating from '../StarRating/StarRating';
import { CommentListType } from '../../types/types';
import ListaAvaliacaoComentarios from '../ListaAvaliacaoComentarios';
import { Formulario, StarsContainter, Input, Textarea, Button, ErrorMsg } from '../../styles/FormAvaliacaoComentarios';

type FormAvaliacaoComentariosType = {
  id: string;
};

export default function FormAvaliacaoComentarios({ id }: FormAvaliacaoComentariosType) {
  const storedComments = localStorage.getItem(id);
  const [commentList, setCommentList] = useState<CommentListType[]>(storedComments ? JSON.parse(storedComments) : []);
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [checkForm, setCheckForm] = useState(false);

  function checkFormImput() {
    const inputs = [isEmail(email), rating >= 1];
    return inputs.every((input) => input === true);
  }

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    setCheckForm(false);
    event.preventDefault();
    if (!checkFormImput()) {
      setCheckForm(true);
      return;
    }
    const submitComment = { id, email, comment, rating };
    const localStoreComment = [...commentList, submitComment];
    localStorage.setItem(id, JSON.stringify(localStoreComment));
    setCommentList(localStoreComment);
    setRating(0);
    setEmail('');
    setComment('');
  };

  return (
    <>
      <Formulario onSubmit={handleClick}>
        <h3>Avaliações</h3>
        <StarsContainter>
          <label htmlFor="Email">Email</label>
          <Input
            data-testid="product-detail-email"
            id="Email"
            type="text"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            placeholder="Digite seu e-mail"
          />
          <StarRating rating={rating} onSetRating={(stars: number) => setRating(stars)} />
        </StarsContainter>
        <Textarea
          data-testid="product-detail-evaluation"
          name="comment"
          id="comment"
          value={comment}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
          placeholder="Escreva sua avaliação..."
        />
        {checkForm && <ErrorMsg data-testid="error-msg">Campos inválidos</ErrorMsg>}
        <Button data-testid="submit-review-btn">Enviar</Button>
      </Formulario>
      <ListaAvaliacaoComentarios commentList={commentList} />
    </>
  );
}
