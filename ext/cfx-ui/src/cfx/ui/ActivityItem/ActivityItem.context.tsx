import React from 'react';

import { IActivityItemMedia } from 'cfx/common/services/activity/types';
import { noop } from 'cfx/utils/functional';

export interface IActivityItemContext {
  showFull(media: IActivityItemMedia, previewRef: React.RefObject<HTMLElement | null>): void;
}

const context = React.createContext<IActivityItemContext>({
  showFull: noop,
});

export const ActivityItemContextProvider = context.Provider;

export const useActivityItemContext = () => React.useContext(context);
