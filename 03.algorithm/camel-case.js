let str = 'a_bc_cde_efgh_b';

const camelCaseFormat = (str) => {
    let reg = /_[a-z]/g;
    let match = null;
    let temp = null;

    while(match = reg.exec(str)) {
        console.log(match);
        temp = match[0];
		console.log(temp);
        str = str.replace(temp, temp.charAt(1).toUpperCase());
    }
    return str;
};

console.log(camelCaseFormat(str));
