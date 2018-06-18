const Utils = {}
// This filters an object based on whatever you pass through.
Utils.filterMany = (obj, params) => {
    return obj.toLowerCase().includes(params)
}

export default Utils