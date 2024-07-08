import React from 'react';
import avatar from '../assets/portraitalt1.png';

function Profile() {
    return(
        <>
            <div class="-mt-48 lg:-mt-40 mr-36 flex justify-end">
                <figure class="h-48 w-48 sm:h-56 sm:w-56 lg:h-80 lg:w-80">
                    <img src={avatar} class="rounded-full object-cover h-full w-full shadow-md" />
                </figure>
            </div>
        </>
)
}

export default Profile;
