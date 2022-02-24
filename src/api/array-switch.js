
// const arraySwitch = (arr) => (old_index) => (new_index) => {
const arraySwitch = (arr, old_index, new_index) => {
    // if (new_index >= arr.length) {
    //     var k = new_index - arr.length + 1;
    //     while (k--) {
    //         arr.push(undefined);
    //     }
    // }
    // const elem = arr.slice(new_index)[0];

    if (old_index > new_index) {
        const intermediate_index = old_index;
                       old_index = new_index;
                       new_index = intermediate_index;
    }

    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    arr.splice(old_index, 0, arr.splice(new_index - 1, 1)[0]);
    
    return arr; // for testing
};

export { arraySwitch };