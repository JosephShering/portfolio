import React from 'react';
import {Link} from '../components/jrs/link';

import {H1, H2, Text} from '../components/jrs/text';
import {Layout, Content} from '../components/jrs/layout';

const NotFoundPage = () => (
    <Layout>
      <Content>
        <H1 className="text-center text-orange-500">OOF, 404!</H1>
        <br /><br />
        <H2 className="text-center">
          These are not the droids you are looking for.
        </H2>

        <br /><br />

        <Text className="text-center">
          Go back to the <Link to="/">Home Page</Link>!
        </Text>
      </Content>
    </Layout>
)

export default NotFoundPage;
