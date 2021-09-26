import React from 'react';
import { Section, MiddleSection } from '../components/Shared/sections';
import { H2 } from '../components/Shared/H1-6'
import BlueButton from '../components/Shared/buttons/BlueButton';
import FadedButton from '../components/Shared/buttons/FadedButton';
import ClearButton from '../components/Shared/buttons/ClearButton';

import Void from '../components/Shared/Loaders/Void'

export default function LandingPage(){
    return (
        <>
       <Section>
           <Void />
           <h1>Into the Void</h1>
           <H2>Track ideas, manage tasks, and create lists with peace at mind. <br/> Just relax, and give your thoughts to the Void.</H2>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <BlueButton
                    display={"Welcome"}
                    href={'/'} 
                />
                <ClearButton 
                    display={"Sign In"}
                    href={'/'} 
                />
            </div>
       </Section>
       <Section>
           <MiddleSection>
                <h2>Shout it into the Void, and never forget again!</h2>
                <p>Begin with an empty Void page. Expand it with more tasks as they come into existence. And let the abyss remember them for you.</p>
                <FadedButton 
                    display={"Into the Void →"}
                    href={'/'}
                />
           </MiddleSection>
       </Section>
       </>
    );
};