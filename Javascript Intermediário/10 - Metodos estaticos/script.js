class ResourceProcessorStation{
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }
    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours

    }
}

//let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
let processor = new ResourceProcessorStation("Gaia", 2000)

let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessed)
