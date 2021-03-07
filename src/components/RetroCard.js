import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const carte = styled.a`
    border: 1px solid black;
    transition: box-shadow 0.3s ease-in-out;
    color: black;
    &:hover{
        text-decoration: none;
        box-shadow: -10px 10px black;
        color: black;
    }
    &:focus{
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }
`;

const RetroCard = (props)=>(
    <Card 
      style={{ width: '18rem' }} 
      as={carte} 
      href={props.href ? props.href : '#'}
      target={props.targetBlank ? "_blank" : ''}
    >
        <Card.Body>
            {props.title ? <Card.Title>{props.title}</Card.Title> : null}
            {props.subTitle ? <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle> : null }
            {props.cardText ? <Card.Text>{props.cardText}</Card.Text> : null }
        </Card.Body>
    </Card>

)

export default RetroCard
