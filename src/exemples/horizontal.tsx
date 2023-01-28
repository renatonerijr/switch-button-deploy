import { useState } from 'react';
import { SwitchButton } from '../components/switch-button';

export const Vertical: React.FC = () => {
  // estado responsável no controle do componente
  const [isActive, setIsActive] = useState(false);

  // método responsável pelo toggle do botão
  const toggleActive = () => {
    // altera o valor anterior do estado
    setIsActive((old) => !old);
  };
  return (
    <SwitchButton
      variant="horizontal"
      onClick={() => toggleActive}
      isActive={isActive}
    />
  );
};
