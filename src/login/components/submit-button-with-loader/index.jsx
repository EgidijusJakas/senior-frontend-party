import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { FormattedMessage } from 'react-intl';

import enhance from './enhancer';
import { COLORS } from '../../../app';
import translations from './index.lang';

const SubmitButtonContainer = styled.div`

    position: relative;

    > button {
        border-radius: 5px;
        background-color: ${COLORS.submitButton};
        border-color: ${COLORS.submitButton};
        color: ${COLORS.submitButtonText};
        height: 56px;
        line-height: 41px;
        margin-top: 20px;
        font-weight: 600;

        &:focus,
        &:hover {
            background-color: ${COLORS.submitButtonOnHover};
            border-color: ${COLORS.submitButtonOnHover};
        }

        &:active {
            background-color: ${COLORS.submitButton};
            border-color: ${COLORS.submitButton};
        }
    }
`;

export const SubmitButtonWithLoader = ({ isAuthenticating }) => (
    <SubmitButtonContainer style={{ position: 'relative' }}>
        <Loader loaded={!isAuthenticating} color="#fff" />
        <button type="submit" className="btn btn-sm btn-block">{isAuthenticating ? '' : <FormattedMessage {...translations.logIn} />}</button>
    </SubmitButtonContainer>
);

SubmitButtonWithLoader.propTypes = {
    isAuthenticating: PropTypes.bool
};

export default enhance(SubmitButtonWithLoader);
