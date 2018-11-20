import React from 'react'
import { Page, Layout, Card } from '@shopify/polaris'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <Page
            title="Profile page"
        >
            <Layout>
                <Layout.Section>
                    <Card title="This is your profile :)" sectioned>
                        <Link to="/">Back to home</Link>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default Profile
