import * as React from 'react';
import {UsersListView} from '../UserList';
import {UserItem} from '../../utils/types';
import users from '../../services/users.service';
import {Loader} from '../Loader';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {failUsersLoading, initUsersLoading, successUsersLoading} from '../../store/users/actions';

interface IProps {
  count: number
}

export const UsersListContainer: React.FC<IProps> = ({count}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [persons, setPersons] = useState<Array<UserItem>>([]);

  const dispatch = useDispatch();

  const updateUsers = useCallback((n: number) => {
    setIsLoading(true);
    dispatch(initUsersLoading(n));

    users.load(n).then((data) => {
      setIsLoading(false);
      dispatch(successUsersLoading(data.data.results));
      setPersons(data.data.results);
    }).catch(() => {
      dispatch(failUsersLoading());
    });
  }, []);

  // Аналогично componentDidMount и componentDidUpdate и componentWillUnmount
  useEffect(() => {
    updateUsers(count);
  }, [count]);

  return (<>
    {isLoading && <Loader />}
    <UsersListView userData={persons}/>
  </>);
};
