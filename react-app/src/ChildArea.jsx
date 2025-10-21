export const ChildArea = (props) => {
  const { open } = props;
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
        </div>
      ) : null}
    </>
  );
};