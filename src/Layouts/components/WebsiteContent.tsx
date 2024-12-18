import React, { PropsWithChildren } from 'react';
import { WebsiteHeader } from './websiteHeader';

export const WebsiteContent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <WebsiteHeader />
        <div className="flex flex-1 flex-col ml-2 lg:ml-36 my-20 lg:my-36" >
            {children}
        </div>
    </>
  )
}