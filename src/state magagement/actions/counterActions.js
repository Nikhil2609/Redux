export const Increment  = () => {
    return {
        type: "increment"
    }
}

export const Decrement  = () => {
    return {
        type: "decrement"
    }
}

export const IncrementByAmount  = (amount) => {
    return {
        type: "increment/amount",
        payload: amount
    }
}