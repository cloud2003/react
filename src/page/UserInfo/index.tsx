import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getUserInfoInit} from '../../store/users/actions';
import {useDispatch, useSelector} from 'react-redux';
import {AddressType, UserItem} from '../../utils/types';
import {Flex, FlexCol} from './styles';
import {RootStoreType} from '../../store';

interface IProps {
}

export const UserInfoView: React.FC<IProps> = () => {
  const dispatch = useDispatch();
  const {userId} = useParams<{userId?: string}>();

  useEffect(() => {
    dispatch(getUserInfoInit(Number(userId)));
  }, [userId]);

  const person = useSelector((store: RootStoreType): UserItem | undefined => store.users.userInfo);
  const isLoadingUserInfo = useSelector((store: RootStoreType): boolean => store.users.isLoadingUserInfo);

  const getAddress = (address?: AddressType): string => {
    if (address) {
      return `${address.zipcode} ${address.city} ${address.street} ${address.suite}`;
    }
    return '';
  };

  return (<>
    {!isLoadingUserInfo && (
      <>
        <Flex>
          <FlexCol>Имя</FlexCol>
          <FlexCol>{person?.name} ({person?.username})</FlexCol>
        </Flex>
        <Flex>
          <FlexCol>Телефон</FlexCol>
          <FlexCol>{person?.phone}</FlexCol>
        </Flex>
        <Flex>
          <FlexCol>E-mail</FlexCol>
          <FlexCol>{person?.email}</FlexCol>
        </Flex>
        <Flex>
          <FlexCol>Сайт</FlexCol>
          <FlexCol>{person?.website}</FlexCol>
        </Flex>
        <Flex>
          <FlexCol>Адрес</FlexCol>
          <FlexCol>{getAddress(person?.address)}</FlexCol>
        </Flex>
        <Flex>
          <FlexCol>Компания</FlexCol>
          <FlexCol>{person?.company.name}</FlexCol>
        </Flex>
      </>
    )}
  </>
  );
};
