import { CommentListType } from '../types/types';
import Stars from './StarRating/Stars/Stars';
import { Container } from '../styles/ListaAvaliacaoComentarios';

type ListaAvaliacaoComentariosType = {
  commentList: CommentListType[]
};

export default function ListaAvaliacaoComentarios(
  { commentList }: ListaAvaliacaoComentariosType,
) {
  return (
    <section>
      {commentList.map((data, index) => (
        <Container key={ index }>
          <div>
            <p data-testid="review-card-email">{data.email}</p>
            <p
              data-testid="review-card-rating"
            >
              <span>
                {Array.from({ length: data.rating }, (_, indexA) => (
                  <Stars key={ indexA } />
                ))}
              </span>
            </p>
          </div>
          <p data-testid="review-card-evaluation">{data.comment}</p>
        </Container>
      ))}
    </section>
  );
}
