class Player {
    constructor(id) {
        if (id === null || id === undefined) {
            throw "expception";
        }
        this.id = id;
    }
}

module.exports = Player