export class CustomValidators {

    static getMessage(label: string, message: string, validator: string, validatorValue?: any) {
        let messages = {
            'required': `${label} is required.`,
            'minlength': `${label} must be at least ${validatorValue.requiredLength} characters long.`,
            'maxlength': `${label} must not be more than ${validatorValue.requiredLength} characters long.`,
            'pattern': `${message}`,
            'email': `${label} must be a valid email address.`,
            'creditcard': `${label} must be a valid credit card number.`,
            'password': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };

        return messages[validator];
    }

    static email(control: any) {
        if (control.value.length > 0) {
            // RFC 2822 compliant regex
            if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            }
            else {
                return { 'email': true };
            }
        }
    }

    static creditcard(control: any) {
        if (control.value.length > 0) {
            // Visa, MasterCard, American Express, Diners Club, Discover, JCB
            if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                return null;
            }
            else {
                return { 'creditcard': true };
            }
        }
    }

    static password(control: any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'password': true };
        }
    }

}

