import React from 'react'
import { Nav } from 'react-bootstrap'

const SidebarBoot = props => {
    return (
        <div className="sidebar-boot">
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
            </Nav>
        </div>
    )
}

export default SidebarBoot