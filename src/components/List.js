import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResourceList, Avatar, TextStyle } from '@shopify/polaris'
import customers from '../customers'
import { selectionChange } from '../actions/list'

const renderItem = ({id, name, location }) => {
    const media = <Avatar customer size="medium" name={name} />
    return (
        <ResourceList.Item
            id={id}
            media={media}
        >
            <h3>
                <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <div>{location}</div>
        </ResourceList.Item>
    )
}

const resourceName = {
    singular: 'customer',
    plural: 'customers',
}

class List extends Component {
    render() {
        const { selectedItems, selectionChange } = this.props
        console.log(selectedItems)

        const bulkActions = [
            {
              content: 'Add tags',
              onAction: () => console.log('Todo: implement bulk add tags'),
            },
            {
              content: 'Remove tags',
              onAction: () => console.log('Todo: implement bulk remove tags'),
            },
            {
              content: 'Delete customers',
              onAction: () => console.log('Todo: implement bulk delete'),
            },
        ]

        return (
            <ResourceList
                resourceName={resourceName}
                items={customers}
                renderItem={renderItem}
                selectedItems={selectedItems}
                onSelectionChange={selectionChange}
                bulkActions={bulkActions}
            />
        )
    }
}

const mapStateToProps = state => ({
    selectedItems: state.selectedItems
})


export default connect(mapStateToProps, { selectionChange })(List)
