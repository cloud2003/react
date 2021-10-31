import * as React from 'react';
import {
  TableBody, TableCol, TableHeader, TableRow, TableWrapper,
} from './styles';
import {UserItemView} from '../UserItem';
import {UserItem} from '../../utils/types';

interface IProps {
  userData: Array<UserItem>
}

export const UsersListView: React.FC<IProps> = ({userData}) => {
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
          { userData.map((person, index) => <UserItemView key={person.id.name + index} firstName={person.name.first} lastName={person.name.last} />)}
        </TableBody>
      </TableWrapper>
    </>
  );
};
