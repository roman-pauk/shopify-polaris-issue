import React from 'react'
import { Page, Layout, Card } from '@shopify/polaris'
import { Link } from 'react-router-dom'

import List from '../List'

function Home() {
    return (
        <Page
            title="List of influencers"
        >
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <List />
                    </Card>

                    <Card title="Select items and go to this link" sectioned>
                        <Link to="/profile">Profile page</Link>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default Home
