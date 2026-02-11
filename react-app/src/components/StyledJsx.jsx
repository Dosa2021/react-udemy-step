import styles from 'styled-components'

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>StyledJsx</p>
        <button>button</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px green;
          border-radius: 20px;
        }
      `}</style>
    </>
  )
}