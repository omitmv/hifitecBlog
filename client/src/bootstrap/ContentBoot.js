import React from 'react'
import { Card } from 'react-bootstrap'

const ContentBoot = props => {
    return (
        <div className="content-boot">
            <Card>
                <Card.Header>{props.posts.TITULO}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>{props.posts.CONTEUDO}</p>
                        <footer className="blockquote-footer"><cite>{props.posts.AUTOR}</cite></footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContentBoot