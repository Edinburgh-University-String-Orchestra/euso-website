import React from 'react'
import Layout from '../layout'
import SEO from '../components/SEO'
import { NotFoundBox } from '../components/NotFoundBox';


const NotFoundPage = () => (
  <Layout simple>
    <SEO title="404: Not found" />
    <NotFoundBox />
  </Layout>
);

export default NotFoundPage;