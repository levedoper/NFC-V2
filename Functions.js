const adjustObjHeight = (obj) => {
    document.getElementById(obj).style.height = `${window.innerHeight}px`;
};
const adjustTopMargin = (obj, center, porcentage) => {
    let portopix = porcentage * window.innerHeight;
    document.getElementById(obj).style.marginTop = `${portopix-center}px`
};
const setRelHeight = (obj,height) => {
    document.getElementById(obj).style.height = `${height*window.innerHeight}px`;
};