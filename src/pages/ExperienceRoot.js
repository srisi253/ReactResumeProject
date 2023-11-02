import {Outlet} from 'react-router-dom'

import ExperienceNavigation from '../components/Experiences/ExperienceNavigation'

function ExperienceRootLayout() {
    return (
    <>
        <ExperienceNavigation/>
        <Outlet/>
    </>
    )
}

export default ExperienceRootLayout;