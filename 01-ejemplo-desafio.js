class TicketManager {
    #events

    constructor() {
        this.#events = []
        this.manager = "Alex"
    }

    #generateID = () => {
        let id
        if (this.#events.length === 0) id = 1
        // else id = this.#events.length + 1
        else id = this.#events[this.#events.length-1].id + 1
        return id
    }

    getEvents = () => {
        return this.#events
    }

    addEvent = (artist, description, price, capacity) => {
        //validacion de required a todos los argumentos
        if (!artist || !description || !price || !capacity) {
            console.error('Incompleted fields')
            return
        }
        //TODO: validacion de no repetir el artist
        //generación del ID
        let id = this.#generateID()
        let newEvent = {
            id, artist, description, price, capacity
        }
        this.#events.push(newEvent)
    }
}

// [{1}, {2}, {3}]
// [{1}, {3}, {4}]
// [{1}, {3}, {4}, {5}]

const ticketManager = new TicketManager()
ticketManager.addEvent('Shakira', 'Concierto del despecho', 1500, 500)
ticketManager.addEvent('Piqué', 'Session 53', 4000, 100)
ticketManager.addEvent('Alex', 'NodeJs', 200, 100)
console.log(ticketManager.getEvents())
// console.log(ticketManager.manager)
// ticketManager.manager = "Pablo"
// console.log(ticketManager.manager)

// console.log(ticketManager.events)