import { LoadingSliceType } from './LoadingType';
import { NotificationSliceType } from './NotificationType';
import { ThemeSliceType } from './ThemeType';

export enum SliceNames {
  theme = 'theme',
  loading = 'loading',
  notification = 'notification',
}

export type StoreType = {
  [SliceNames.theme]: ThemeSliceType;
  [SliceNames.loading]: LoadingSliceType;
  [SliceNames.notification]: NotificationSliceType;
}
