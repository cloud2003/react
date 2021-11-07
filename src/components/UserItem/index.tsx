import * as React from 'react';
import {TableCol, TableRow} from './styles';
import {UserItem} from '../../utils/types';

interface IProps {
  person: UserItem;
  like: boolean;
  onChangeLike: (email: string, flag: boolean) => void;
}

export const UserItemView: React.FC<IProps> = ({person, like, onChangeLike}) => {
  const [comment, setComment] = React.useState<string>('');

  const handleLike = () => {
    onChangeLike(person.email, !like);
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <TableRow>
      <TableCol>
        {person.name.first}
        {' '}
        {person.name.last}
      </TableCol>
      <TableCol onClick={handleLike} className="like">
        {like ? '\u2665' : '\u2661'}
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
