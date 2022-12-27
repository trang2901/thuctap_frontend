
//tinh-nang-noi-bat-huong-dan-so-sanh-bds-tren-propzy-67.html
const getIdFromAlias = (alias) => {
    if (!alias || alias === '') return alias;
    let result = 0;
    let pos = alias.lastIndexOf('-');
    let posDot = alias.lastIndexOf('.');
    if (pos > -1) {
        let find = alias.substring(pos + 1, posDot);
        if (find) {
            result = parseInt(find);
        }
    }
    return result;
};
export default getIdFromAlias;