import React from 'react';
import webpack from '../assets/icons/favicon.png';
import { useQuery } from 'react-query';
import { fetchUser } from '../hooks/useFetchUserDetails';
import { Button } from '@components/Button/index';
import { Toggle } from '@components/Toggle/index';

export const Launcher: React.FC = () => {
  const { data, isLoading, error, isError } = useQuery('user', fetchUser);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  if (data) {
    return (
      <div className='bg-gray-500 flex flex-col min-h-screen justify-center items-center'>
        <img src={webpack} alt='webpack' />
        <Button
          label='simple'
          btnSize='medium'
          status='success'
          importance='primary'
        />
        <Toggle
          importance='primary'
          toggleSize='medium'
          labelPosition='right'
        />
        {data?.map((items) => {
          return (
            <div key={items.id}>
              <h1>{items.username}</h1>
            </div>
          );
        })}
      </div>
    );
  }
};
