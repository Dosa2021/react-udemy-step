/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px green;
    border-radius: 20px;
  `
  return (
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>button</button>
    </div>
  )
}