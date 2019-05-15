import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuotePageContainer = styled.div`
    text-align: center;
    margin-top: 50px;
    display: block;
    font-family: 'Times New Roman', serif;
    font-style: italic;
`;

export const QuoteText = styled.h1.attrs({className: 'quote-page-text'})`
    font-size: 36px;

    ::before {
        content: '«';
    }

    ::after {
        content: '»';
    }
`;

export const QuoteAuthor = styled.p.attrs({className: 'quote-page-author'})`
    font-size: 18px;
`;

export const ToMain = styled(Link)`
    display: inline-block;
    margin-top: 30px;
    color: rgba(26, 90, 188, 0.83);
    font-size: 18px;
`;
