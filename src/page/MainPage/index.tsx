import React, {useCallback, useState} from 'react';
import {MainBox, H1Box} from './styles';
import {UsersListContainer} from '../../components/UsersListContainer';

interface IProps {
}

export const MainPageView: React.FC<IProps> = () => {
  const [count, setCount] = useState(10);

  const onChangeCount = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCount(+value);
  }, []);

  return (
    <>
      <MainBox>
        <H1Box>Записная книжка</H1Box>
        <input type="text" value={count} onChange={onChangeCount}/>
        <UsersListContainer count={count}/>
      </MainBox>
    </>
  );
};
