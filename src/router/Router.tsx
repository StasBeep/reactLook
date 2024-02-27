import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ArrayContent from '../pages/ArrayContent';

const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/arrayChild" element={<ArrayContent />} />
        </Routes>
    )
}

export default Router;