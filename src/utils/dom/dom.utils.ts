
export function qs(selector:string, parent = document){
    return parent.querySelector(selector);
}

export function qsa(selector:string, parent = document){
    return [...parent.querySelectorAll(selector)];
}

export function addGlobalEventListener(type:string, selector:string, callback: (arg0: Event) => void, options: boolean | AddEventListenerOptions | undefined, parent = document){
    parent.addEventListener(type, event => {
        if(!event.target) return;
        const e = event.target as HTMLElement;
        if(e.matches(selector)){
            callback(event);
        }
    },  options);
}

export function createElement(type: string, options={}){
    const el = document.createElement(type)

    Object.keys(options).forEach(([key, value]) => {
        if (key === 'class') { el.classList.add(value)
            return
        } 

    if(key === "dataset"){
        Object.entries(value).forEach(([dataKey, dataValue]) => {el.dataset[dataKey] = dataValue})
        return
    }

    if (key === "text"){el.textContent = value
        return
    }

    el.setAttribute(key, value)
    })
    return el
}