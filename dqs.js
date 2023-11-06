export const dqs  = document.querySelector.bind(document);

export const dqsA = document.querySelectorAll.bind(document);

export const qs = (elm, qs) => {
    return elm.querySelector(qs);
}

export const qsA = (elm, qs) => {
    return elm.querySelectorAll(qs);
}
