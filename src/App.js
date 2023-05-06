
import './App.css';

export default function App() {
  return (
    <>
    
    <div class="navbar bg-primary text-primary-content">
      <Headder/>
  <a class="btn btn-ghost normal-case text-xl">PRESENTING...</a>
</div>
<Routes>
<Route path="/" element={<Designs />}></Route>

</Routes>
<Footer/>
    <div>A Project made with effort and dedication</div>
</>
    
  )
  }