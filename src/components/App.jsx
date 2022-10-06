import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Holidays from './Holidays/Holidays';
import Layout from './Page/Layout';
import Halloween from './Halloween/Halloween';
import Ghosts from './Halloween/Ghosts';
import Witches from './Halloween/Witches';
import Vampires from './Halloween/Vampires';
import FourthJuly from './FourthJuly/FourthJuly';
import Christmas from './Christmas/Christmas';
import Easter from './Easter/Easter';
import Form from './Forms/FormLayout.jsx';
import Search from './Search/Search';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Holidays />}/>
          <Route path="search" element={<Search />} />
          <Route path="halloween" element={<Halloween />}>
            <Route index element={<Ghosts />}/>
            <Route path="vampires"element={<Vampires />}/>
            <Route path="witches"element={<Witches />}/>
          </Route>
          <Route path="form" element={<Form />} />
          <Route path="fourthjuly" element={<FourthJuly />}/>
          <Route path="christmas" element={<Christmas />}/>
          <Route path="easter" element={<Easter />}/>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  );}
