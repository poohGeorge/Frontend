import { Routes, Route, Navigate } from "react-router-dom";
import Main from './pages/Main'
import AISubscriber from './pages/AISubscriber'
import AIMediaGenerator from './pages/AIMediaGenerator'
import { DocTranslate } from './pages/MachineTranslator'
import AISummarization from './pages/AISummarization'
import AIMediaEditor from './pages/AIMediaEditor'

export default function App() {
  return(
    <Routes>
      <Route index element={<Navigate to="AISubscriber" />} />
      <Route path="/" element={<Main />}>
        <Route path="AISubscriber" element={<AISubscriber />} />
        <Route path="AIMediaGenerator" element={<AIMediaGenerator />} />
        <Route path="MachineTranslator" element={<DocTranslate />} />
        <Route path="AISummarization" element={<AISummarization />} />
        <Route path="AIMediaEditor" element={<AIMediaEditor />} />
      </Route>
    </Routes>
  );
}