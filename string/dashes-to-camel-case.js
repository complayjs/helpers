export default function dashesToCamelCase(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
};