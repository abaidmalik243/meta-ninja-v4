import React from 'react';
import Navbar from '../../Components/Navabr';
import MapSection from '../../Components/MapSection';
import Weapons from '../../Components/Weapons';
import Enemy from '../../Components/Enemy';
import MetaFooter from '../../Components/MetaFooter';
import Investors from '../../Components/Investors&Partners';


function GamesPage() {
    return (
        <>
            {/* <Navbar />
            <MapSection />
            <Weapons /> */}

            <Enemy />
            <MetaFooter />
            <Investors />
            


            {/* <Video/> */}
            {/* <StreetBoy /> */}

        </>

    );
}

export default GamesPage;
