'use client';

import React from 'react';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { WebsiteWrapper } from '@/Wrappers';

export const WebsiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n}>
      <WebsiteWrapper>{children}</WebsiteWrapper>
    </I18nextProvider>
  );
};
