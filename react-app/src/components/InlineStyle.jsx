export const InlineStyle = () => {
  const containerStyle = {
    border: 'solid 2px green',
    borderRadius: '20px'
  };
  return (
    <div style={containerStyle}>
      <p>Inline</p>
      <button>button</button>
    </div>
  )
}