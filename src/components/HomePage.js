import React from 'react';
import Layout from '../hoc/Layout';
import BookList from '../_components/BookList';


function HomePage() {
    return (
        <>
        <Layout>
            <BookList />
        </Layout>
        </>
    )
}

export default HomePage;