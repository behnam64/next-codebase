import { VariantType } from 'notistack';

export type NotificationMessageType = {
  variant: VariantType;
  message: string;
};

export type NotificationMessagesType = NotificationMessageType[];

export type NotificationSliceType = {
  notifications: NotificationMessagesType;
}
export type NotificationSlicePayloadType = {
  notification: NotificationMessageType;
}
