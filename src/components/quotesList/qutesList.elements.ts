import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuoteItem = styled(Link)`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #e1e1e1;
    color: #000;
    display: block;
    text-decoration: none;
`;

export const QuoteText = styled.span`
    margin-bottom: 5px;
    font-size: 16px;
    text-decoration: underline;
`;

export const QuoteAuthor = styled.span`
    font-style: italic;
    font-size: 14px;
    color: #666;
`;