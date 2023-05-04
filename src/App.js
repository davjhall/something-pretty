
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
      
//     </div>
//   );
// }

// export default App;


const [selectedId, setSelectedId] = useState(null)

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )

  {items.map(item => (
    <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
    </motion.div>
  ))}
  
  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedId}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>
  
}