import React from 'react';

import {
    H2,
    Text
} from '../jrs/text';
import {Link} from '../jrs/link';

export default ExperienceEntry;
function ExperienceEntry({
    to,
    title,
    description
}) {
    return (
        <div className="pb-12">
            <H2>
                <Link to={to} target="_blank">{title}</Link>
            </H2>

            <Text className="text-gray-400">
                {description}
            </Text>
        </div>
    );
}