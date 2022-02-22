import * as React from 'react';
import {
  TableBody, TableCol, TableHeader, TableRow, TableWrapper,
} from './styles';
import {UserItemView} from '../UserItem';
import {UserItem} from '../../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLike} from '../../store/likes/actions';
import {AppState} from '../../store/types';

interface IProps {
  userData: Array<UserItem>
}

export const UsersListView: React.FC<IProps> = ({userData}) => {
  const dispatch = useDispatch();

  const handleChangeLike = (email: string, flag: boolean) => {
    dispatch(setUserLike(email, flag));
  };

  const likes = useSelector<AppState, Array<string>>((state) => state.likes.likes);

  return (
    <>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableCol>Имя</TableCol>
            <TableCol>Лайк</TableCol>
            <TableCol>Комментарий</TableCol>
          </TableRow>
        </TableHeader>
        <TableBody>
          { userData.map((person) => <UserItemView person={person} key={person.id} onChangeLike={handleChangeLike} like={likes.includes(person.email)} />)}
        </TableBody>
      </TableWrapper>
    </>
  );
};
