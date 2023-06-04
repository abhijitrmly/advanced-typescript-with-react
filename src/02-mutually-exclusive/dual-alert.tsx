import type { FC } from 'react';
import { useIntl } from 'react-intl';

type Variant =
  | 'danger'
  | 'dark'
  | 'info'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

type Props = ({
  message?: never;
  messageId: string;
} | {
  message: string;
  messageId?: never;
}) & {
  variant?: Variant;
};

export const DualAlert: FC<Props> = ({
  message,
  messageId,
  variant = 'primary',
}) => {
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {actualMessage}
    </div>
  );
};
