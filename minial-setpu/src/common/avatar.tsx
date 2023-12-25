import React from 'react'
import Spin from './spin'
import Dropdown, { DropdownProps } from './menu/Dropdown'
import { shortenUsername } from '../lib/utils'
import { classNames } from './util'

export type User = {
  username: string;
  email:string;
  phone?: string;
  picture?: string;
  federatedUsers: FederatedUser[];
};
export type FederatedUser = {
  id: number;
  sub: string;
  provider: string;
  username: string;
  claims: Claim;
};

export type Claim = Record<string, string>;

export default function Avarta({
  loading,
  user,
  className,
  dropDownData
}: {
  loading: boolean
  user: User | null
  className?: string
  dropDownData?: DropdownProps['data']
}) {
  return (
    <div className={classNames(className || '')}>
      {(function s() {
        if (loading) {
          return <Spin />
        }
        if (!user) {
          return (
            <a
              href='/login'
              className='inline-block py-1 max-w-[40px] animate-wiggle'
            >
              Login
            </a>
          )
        }

        return (
          <Dropdown data={dropDownData || []}>
            {(user.picture && (
              <img
                className='rounded-full hover:shadow block'
                height={40}
                width={40}
                alt={user.username}
                src={user.picture}
              ></img>
            )) || <div>{shortenUsername(user.username)}</div>}
          </Dropdown>
        )
      })()}
    </div>
  )
}
