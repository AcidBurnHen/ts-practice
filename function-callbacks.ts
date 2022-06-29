// Function callbacks

function add(n1: number, n2: number) {
    return n1 + n2;
}

// In case I want to use a callback function I can decalre it's function type explictily
// so that the value received in it is the same as the expected value.
function addHandler(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2
    cb(result);
}

addHandler(10, 20, (result) => {
    console.log(result)

    /* Callback functions can return value even if the callback is set 
    as void and doesn't expect a return value */
    return result;
})

