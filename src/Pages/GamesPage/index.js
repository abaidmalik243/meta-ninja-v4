import React from 'react';
import Navbar from '../../Components/Navabr';
import MapSection from '../../Components/MapSection';
import Weapons from '../../Components/Weapons';
import Enemy from '../../Components/Enemy';
import MetaFooter from '../../Components/MetaFooter';
import InvestorsAndPartners from '../../Components/InvestorsAndPartners';
import Video from 'Components/Video';
import StreetBoy from 'Components/StreetBoy';


function GamesPage() {
    return (
        <>
            <Video />
            <StreetBoy />
            <Enemy />            
            <Weapons />
            <MapSection />

            
        </>

    );
}

export default GamesPage;
