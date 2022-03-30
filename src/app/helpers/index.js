
export const saveState = (state) => {
    try {
        const setializedState = JSON.stringify(state);
        localStorage.setItem('state', setializedState)
    } catch (err) {
        console.log(err)
    }
}

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        console.log(err)
        return undefined
    }
}

export const cleanLocalStorage = () => {
    localStorage.removeItem('state')
}