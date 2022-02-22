import * as React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import {UsersListView} from '../UserList';
import {UserItem} from '../../utils/types';
import users from '../../services/users.service';
import {Loader} from '../Loader';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {failUsersLoading, initUsersLoading, successUsersLoading} from '../../store/users/actions';
import {AppState} from '../../store/types';
import {UserInfoView} from '../../page/UserInfo';

interface IProps {
  count: number
}

export const UsersListContainer: React.FC<IProps> = ({count}) => {
  const isLoading = useSelector<AppState, boolean>((state) => state.users.isLoading);
  const persons = useSelector<AppState, Array<UserItem>>((state) => state.users.userList);
  // const [persons, setPersons] = useState<Array<UserItem>>([]);

  const dispatch = useDispatch();

  const updateUsers = useCallback((n: number) => {
    dispatch(initUsersLoading(n));

    users.load(n).then((data) => {
      dispatch(successUsersLoading(data.data));
      // dispatch(successUsersLoading(data.data.results));
      // setPersons(data.data.results);
    }).catch(() => {
      dispatch(failUsersLoading());
    });
  }, [dispatch]);

  // Аналогично componentDidMount и componentDidUpdate и componentWillUnmount
  useEffect(() => {
    updateUsers(count);
  }, [count, updateUsers]);

  const match = useRouteMatch();
  console.log('====> MATCH:', match);

  return (<>
    {isLoading && <Loader />}
    <UsersListView userData={persons}/>
    <Switch>
      <Route path={`${match.path}/:userId`}>
        <UserInfoView />
      </Route>
    </Switch>
  </>);
};
