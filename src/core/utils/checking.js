/* eslint-disable no-prototype-builtins */

import _ from 'lodash';
import React from 'react';

export const PRIMITIVE_TYPES = {
    string: typeof (''),
    number: typeof (0),
    boolean: typeof (true),
    function: typeof (() => { }),
    object: typeof ({})
};

export function isTypeOf(value, type) { return typeof (value) === type; }

/**
 * Checks if value is a string.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isString(value) { return isTypeOf(value, PRIMITIVE_TYPES.string); }

/**
 * Checks if value is a boolean.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isBoolean(value) { return isTypeOf(value, PRIMITIVE_TYPES.boolean); }

/**
 * Checks if value is a number.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isNumber(value) { return !isNaN(value); }

/**
 * Checks if value is a function.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isFunction(value) { return isTypeOf(value, PRIMITIVE_TYPES.function); }

/**
 * Checks if value is a object.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isObject(value) { return isTypeOf(value, PRIMITIVE_TYPES.object); }


/**
 * Checks if value is undefined.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isUndefined(value) { return isTypeOf(value, typeof (undefined)); }

/**
 * Checks if values is undefined or null.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isUndefinedOrNull(value) { return isUndefined(value) || (value === null); }

/**
 * Checks if values is undefined, null or empty.
 * @param {any} value - value to check
 * @returns {boolean} 
 */
export function isUndefinedNullOrEmpty(value) {
    return isUndefinedOrNull(value) || (isTypeOf(value, PRIMITIVE_TYPES.object) && !(Array.isArray(value) ? value : Object.keys(value)).length) || (isString(value) && _.isEmpty(value.trim()));
}

/**
 * Checks if named prop is in object..
 * @param {any} source - object to check
 * @param {name} source - prop to check
 * @returns {boolean} 
 */
export function hasOwnProperty(source, name) {
    return source && name && Object.hasOwnProperty.apply(source, [name]);
}

export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/**
 * Checks if Array is empty
 * @param {any} array -array to check 
 * @returns {boolean} 
 */
export function arrayIsEmpty(array) {
    if (!Array.isArray(array)) {
        return false;
    }

    if (array.length == 0) {
        return true;
    }

    return false;
}


/**
 * Checks if the element is a Functional component
 * @param {any} component -component to check 
 * @returns {boolean} 
 */

export function isFunctionComponent(component) {return isFunction(component) && React.isValidElement(component()); }

/**
 * Checks if the element is a Class component
 * @param {any} component -component to check 
 * @returns {boolean} 
 */

export function isClassComponent(component) {return isFunction(component) && !!component.prototype.isReactComponent; }

/**
 * Checks if the element is a Dom Type Like <span></span> or <div></div> etc..
 * @param {any} element - element to check 
 * @returns {boolean} 
 */

export function isElement(element) {return isString(element) && React.isValidElement(element);}

/**
 * Checks if the value is a valid url or not
 * @param {any} value - value to check 
 * @returns {boolean} 
 */
export const isValidUrl = urlString=> {
    try {
        return Boolean(new URL(urlString));
    }
    catch(e){
        return false;
    }
};

/**
 * Checks if the element ixsists in an array
 * @param {any} element - element to check 
 * @returns {boolean} 
 */
export function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}




export function isComponent(component) {return isClassComponent(component) || isFunctionComponent(component) || isElement(component); }