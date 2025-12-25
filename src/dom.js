function createEle(type, textContent, parent){
    const newEle = document.createElement(type);
    textContent ? newEle.textContent = textContent : null;
    parent.appendChild(newEle);
    return newEle;
}

function removeEle(ele){
    ele.remove();
}

function addClass(ele, ...className){
    ele.classList.add( ...className );
}

export { createEle, addClass, removeEle };