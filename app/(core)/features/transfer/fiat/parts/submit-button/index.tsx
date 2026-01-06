import { ArrowLeftRight } from 'lucide-react';

import { BaseButton } from '@/(shared)/components/button';
import { withForm } from '@/(shared)/hooks/form';

import { defaultValues } from '@/(core)/features/transfer/fiat/model/constants';

import styles from './styles.module.scss';

const SubmitButton = withForm({
  defaultValues: defaultValues,
  render: function Render({ form }) {
    return (
      <div className={styles.submit}>
        <BaseButton
          iconLeft={<ArrowLeftRight />}
          size="lg"
          onClick={() => form.handleSubmit()}
        >
          {'Перевести'}
        </BaseButton>
      </div>
    );
  },
});
export default SubmitButton;
