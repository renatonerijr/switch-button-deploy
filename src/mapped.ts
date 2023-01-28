export const steps = [
  {
    description: 'Instale as libs necessárias',
    codeString: `
  yarn add styled-components
  // ou
  npm install --save styled-components
  `,
  },

  {
    description: 'Crie o index.tsx e importe os estilos e coloque os tipos',
    codeString: `
    import * as S from './styles';

    export type Props = {
      variant?: 'horizontal' | 'vertical';
      isActive?: boolean;
      disabled?: boolean;
      onClick?: () => void;
    };
  `,
  },
  {
    description: 'Monte o componente SwitchButton',
    codeString: `
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
  `,
  },
  {
    description: 'Crie o styles.ts e adicione os estilos',
    codeString: `
    import styled, { css } from 'styled-components';

    import { Props } from '.';

    export const Wrapper = styled.button<{
      variant?: Props['variant'];
      isActive: boolean;
    }>\`
        position: relative;
        width: 24px;
        height: 50px;

        border-radius: 20px;
        overflow: hidden;

        border-radius: 20px;
        border: 1px solid #2f3740;
        background: #38424a;

        cursor: pointer;

        \${({ variant }) =>
      css\`
          \${variant === 'horizontal' &&
          css\`
            transform: rotate(-90deg);
          \`}
          \${!variant &&
          css\`
            transform: rotate(-90deg);
          \`}
      \`}
      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      &:before {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        background: #20272a;
        border: 1px solid #1e2426;
        border-radius: 50%;
        z-index: 2;
        left: 2px;
        top: 2px;
        transition: 0.3s cubic-bezier(0, 0.65, 0.36, 1.17) all;
      }
      \${({ isActive }) =>
        isActive &&
          css\`
            &:before {
              top: 28.5px;
              background: #ffffff;
              border: 1px solid #ffffff;
            }
            background: #256a78;
            border: 1px solid #20606d;
          \`}
    \`;
    `,
  },
  {
    description: 'Agora é só criar um estado e importar o componente ',
    codeString: `
    export const SeuComponente: React.FC = () => {

      const [isActive, setIsActive] = useState(false);

      return (
        <SwitchButton
          variant="vertical"
          isActive={isActive}
          disabled
          onClick={() => setIsActive((old) => !old)}
        />
      );
    };
  `,
  },
];
