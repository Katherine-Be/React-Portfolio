import React from 'react';
import avatar from '../assets/portraitalt1.png';

function Profile() {

    const profileIndex = {
        zIndex:5
    }
    return(
        <>
            <div class="relative -mt-36 lg:-mt-24 -mr-7 lg:mr-28 flex justify-end" style={profileIndex}>
                <figure class="h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
                    <img src={avatar} class="rounded-full object-cover h-full w-full shadow-md" />
                </figure>
            </div>
        </>
)
}

export default Profile;
