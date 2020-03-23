import React from 'react';

import {
    H1
} from '../jrs/text';

export default ExperienceSection;
function ExperienceSection({
    title,
    children,
}) {
    return (
        <div className="mt-10">
            <H1 className="text-center py-4 flex justify-center items-center">
                <small className="text-lg">#-----</small>&nbsp;<span className="text-gray-300">{title}</span>&nbsp;<small className="text-lg">-----#</small>
            </H1>

            {children}
        </div>
    );
}