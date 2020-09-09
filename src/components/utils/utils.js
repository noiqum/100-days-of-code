


export const checkCardFinish = (day) => {
    const linksLength = day.links.length;
    const links = day.links;
    let counter = 0;
    links.map((link) => {
        if (link['done'] === true) {
            return counter++;
        } else {
            return link
        }
    })

    if (counter === linksLength) {
        return true;
    } else {
        return false;
    }
}

export const validate = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = 'Display name is required'
    }
    else if (values.name.length < 3) {
        errors.name = 'min 3 character'
    }
    else if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    } else if (!values.password) {
        errors.password = 'Password is required';
    } else if (!/^[a-zA-Z0-9]{8,}$/.test(values.password)) {
        errors.password = 'Password must contain 8 characters and at least one number, one letter and one unique character such as !#$%&? '
    } else if (values.password2 !== values.password) {
        errors.password2 = 'must be same as password above'
    }
    return errors;

}