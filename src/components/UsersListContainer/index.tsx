import * as React from 'react';
import {UsersListView} from '../UserList';
import {UserItem} from '../../utils/types';
import users from '../../services/users.service';
import {Loader} from '../Loader';
import {useCallback, useEffect, useState} from 'react';

interface IProps {
  count: number
}

export const UsersListContainer: React.FC<IProps> = ({count}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [persons, setPersons] = useState<Array<UserItem>>([]);

  const updateUsers = useCallback((n: number) => {
    setIsLoading(true);
    users.load(n).then((data) => {
      setIsLoading(false);
      setPersons(data.data.results);
    });
  }, []);

  // Аналогично componentDidMount и componentDidUpdate
  useEffect(() => {
    updateUsers(count);
  }, [count]);

  return (<>
    {isLoading && <Loader />}
    <UsersListView userData={persons}/>
  </>);
};
