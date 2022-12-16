import * as S from './styles';

export type Props = {
  variant?: 'horizontal' | 'vertical';
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
/**
 * Componente Switch Button
 * @param variant horizontal | vertical
 * @param isActive boolean
 * @param disabled boolean
 * @param onClick return void function
 */
export const SwitchButton: React.FC<Props> = ({
  variant,
  isActive,
  disabled,
  onClick,
}: Props) => {
  return (
    <S.Wrapper
      variant={variant}
      isActive={!!isActive}
      disabled={disabled}
      onClick={onClick}
    />
  );
};
