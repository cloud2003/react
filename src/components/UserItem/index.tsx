import * as React from 'react';
import {TableCol, TableRow} from './styles';
import {useState} from 'react';

interface IProps {
  firstName: string;
  lastName: string;
}

export const UserItemView: React.FC<IProps> = ({firstName, lastName}) => {
  const [comment, setComment] = useState<string>('');
  const [like, setLike] = useState<boolean>(false);
  const [likeImg, setLikeImg] = useState<string>('\u2661');

  const handleLike = () => {
    setLike(!like);
    setLikeImg(like ? '\u2661' : '\u2665');
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <TableRow>
      <TableCol>
        {firstName}
        {' '}
        {lastName}
      </TableCol>
      <TableCol onClick={handleLike} className="like">
        {likeImg}
      </TableCol>
      <TableCol>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={handleChangeComment}
        />
      </TableCol>
    </TableRow>
  );
};
