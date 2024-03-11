import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ArrayContent from '../pages/ArrayContent';
import ApiContent from '../pages/ApiContent';

const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/arrayChild" element={<ArrayContent />} />
            <Route path="/apiContent" element={<ApiContent />} />
        </Routes>
    )
}

export default Router;