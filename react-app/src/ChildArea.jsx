import { memo } from 'react'

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()]

  console.log('ChildAreaがレンダリングされた')

  data.forEach((d) => {
    console.log('...')
  })

  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});