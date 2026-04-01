import designHtml from '../jscale (2).html?raw'

function App() {
  return (
    <iframe
      title="JScale Website Design"
      srcDoc={designHtml}
      style={{
        width: '100%',
        minHeight: '100vh',
        border: 'none',
        display: 'block',
      }}
    />
  )
}

export default App
