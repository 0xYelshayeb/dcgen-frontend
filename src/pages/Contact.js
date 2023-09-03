// src/pages/Contact.js
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const schema = {
    "@context": "https://dcgen.finance/contact",
    "@type": "WebPage",
    "name": "DCGen Contact Page",
    "description": "Website to Contact DCGen team",
  };
    return (
        <Layout title="Contact" name="Contact page" description="A page allowing users to contact the team by sending emails" schema={schema}>
        
        </Layout>
    );
};

export default Contact;
