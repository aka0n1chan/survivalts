import { render, screen } from '@testing-library/react';
import { SimpleButton } from './SimpleButton';
import userEvent from '@testing-library/user-event';

test('ボタンをクリックするとON/OFFの表示が切り替わる', async () => {
  const user = userEvent.setup();
  //ボタンの描画
  render(<SimpleButton />);
  //ボタンのDOMを取得
  const simpleButton = screen.getByRole('button');
  //アサーション
  expect(simpleButton).toHaveTextContent('OFF');
  //クリックイベントを発生させる
  await user.click(simpleButton);
  //アサーション
  expect(simpleButton).toHaveTextContent('ON');
});
