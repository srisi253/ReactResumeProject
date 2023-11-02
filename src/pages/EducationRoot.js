import {Outlet} from 'react-router-dom'

import EducationNavigation from '../components/Education/EducationNavigation'

function EducationRootLayout() {
    return (
    <>
        <EducationNavigation/>
        <Outlet/>
    </>
    )
}

export default EducationRootLayout;