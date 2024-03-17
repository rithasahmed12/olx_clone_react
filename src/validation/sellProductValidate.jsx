export const checkValidData = (name, category, price,location) => {
    const isNameValid = /^[a-zA-Z0-9\s\-_]+$/.test(name);
    const isCategoryValid = /^[a-zA-Z0-9\s\-_]+$/.test(category);
    const isPriceValid = /^\d+(\.\d{1,2})?$/.test(price)
    const isLocationValid = /^[a-zA-Z0-9\s,]+$/.test(location)

    if (!isNameValid || name.trim() == '') {
        return 'Name is not valid'
    }
    if (!isCategoryValid || category.trim() == '') {
        return 'Category is not valid';
    }

    if (!isPriceValid || price.trim() == '') {
        return 'Price is not valid';
    }
    if (!isLocationValid || location.trim() == '') {
        return 'Location is not valid';
    }

    return null;
}
