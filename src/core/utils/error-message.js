import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { isString, isFunction } from './checking';
import { coreStyles } from '../components/style.core';

export const ErrorMessage = ({ errors, propertyName, errorSelector }) => {
    const formStyle = coreStyles.formStyle;
    errorSelector = !(errors && errors[propertyName]) ? null
        : (!errorSelector) ? ((isString(errors[propertyName])) ? errors[propertyName] : errors[propertyName][Object.keys(errors[propertyName])[0]])
            : (!isFunction(errorSelector)) ? errors[propertyName][errorSelector]
                : ((errorSelector = Array.prototype.find.call(Object.keys(errors[propertyName]), errorSelector))) ? errors[propertyName][errorSelector]
                    : null;
    return (
        <>
            {(!!errorSelector) && <Text style={formStyle.formErrorMessage}>{errorSelector}</Text>}
        </>
    );
};


export function wrapWithErrorObject(Component, errors) {
    return function WrappedWithErrors(props) {
        return (<Component {...{ errors, ...props }} />);
    };
}