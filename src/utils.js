const roundAcc = () => {
    const prob = Math.random() * 5 + 69
    return Math.round(prob * 100) / 100
}

module.exports = {
    roundAcc
}
