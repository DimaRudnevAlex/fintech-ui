import { useTranslations } from 'next-intl';

import { ArrowLeftRight } from 'lucide-react';

import { BaseButton } from '@/(shared)/components/button';
import { withForm } from '@/(shared)/hooks/form';

import { defaultValues } from '@/(core)/features/transfer/fiat/model/constants';

import styles from './styles.module.scss';

const SubmitButton = withForm({
  defaultValues: defaultValues,
  render: function Render({ form }) {
    const t = useTranslations('transferFiat.form');

    return (
      <div className={styles.submit}>
        <BaseButton
          iconLeft={<ArrowLeftRight />}
          size="lg"
          onClick={() => form.handleSubmit()}
        >
          {t('translate')}
        </BaseButton>
      </div>
    );
  },
});
export default SubmitButton;
