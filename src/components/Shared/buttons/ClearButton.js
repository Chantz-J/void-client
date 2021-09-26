import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexRow } from '../../../styles/mixins';

export const CButton = styled(Link)`
    border: 1px solid ${({ theme }) => theme.colors.white};
    ${flexRow('center', 'center')}
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    background: ${({ theme }) => theme.colors.veryDark};
    font-weight: 200;
    font-size: 1.2rem;
    padding: .75rem;
    margin-left: 1rem;
    border-radius: .375rem;
    text-decoration: none;
    z-index: 0;
`;

export default function ClearButton({ display, href }){
    return (
        <CButton to={href}>
            {display}
        </CButton>
    );
};