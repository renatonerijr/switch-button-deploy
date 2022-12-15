import { useState } from 'react';
import { SwitchButton } from './components/switch-button';
import * as S from './styles';
import GlobalStyles from './styles/global';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Arrow } from './components/svg/arrow';
import { CodeFormatting } from './components/code-formatting';
import { steps } from './mapped';
const App: React.FC = () => {
  const [firstSwitch, setFirstSwitch] = useState(false);
  const [secondSwitch, setSecondSwitch] = useState(false);
  const [thirdSwitch, setThirdSwitch] = useState(false);
  const [fourthSwitch, setFourthSwitch] = useState(false);

  const toggleSwitch = (option: string) => {
    option === 'first' && setFirstSwitch((old) => !old);
    option === 'second' && setSecondSwitch((old) => !old);
    option === 'third' && setThirdSwitch((old) => !old);
    option === 'fourth' && setFourthSwitch((old) => !old);
  };

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <h1>Switch Button | Wesley Souza</h1>

          <S.Align>
            <div>
              <span>Vertical</span>
              <SwitchButton
                variant="horizontal"
                isActive={firstSwitch}
                onClick={() => toggleSwitch('first')}
              />
            </div>
            <div>
              <span>Horizontal</span>
              <SwitchButton
                variant="vertical"
                isActive={secondSwitch}
                onClick={() => toggleSwitch('second')}
              />
            </div>
            <div>
              <span>Disabled</span>
              <SwitchButton
                variant="horizontal"
                isActive={thirdSwitch}
                disabled
                onClick={() => toggleSwitch('third')}
              />
            </div>
            <div>
              <span>Disabled</span>
              <SwitchButton
                variant="vertical"
                isActive={fourthSwitch}
                disabled
                onClick={() => toggleSwitch('fourth')}
              />
            </div>
          </S.Align>
          {steps.map((item) => {
            return (
              <CodeFormatting
                key={item.description}
                description={item.description}
                codeString={item.codeString}
              />
            );
          })}
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default App;
