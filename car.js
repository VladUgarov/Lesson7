class Car {
    #brand
    #model
    #yearOfManufacturing
    #maxSpeed
    #maxFuelVolume
    #fuelConsumption
    #currentFuelVolume = 0
    #isStarted = false
    #mileage = 0

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        if (typeof brand === "string" && brand.length >= 1 && brand.length <= 50) {
            this.#brand = brand
        }
        if (typeof model === "string" && model.length >= 1 && model.length <= 50) {
            this.#model = model
        }
        if (yearOfManufacturing % 1 === 0 && typeof yearOfManufacturing === "number" && isFinite(yearOfManufacturing) && yearOfManufacturing >= 1900 && yearOfManufacturing <= new Date().getFullYear()) {
            this.#yearOfManufacturing = yearOfManufacturing
        }
        if (typeof maxSpeed === "number" && isFinite(maxSpeed) && maxSpeed >= 100 && maxSpeed <= 300) {
            this.#maxSpeed = maxSpeed
        }
        if (typeof maxFuelVolume === "number" && isFinite(maxFuelVolume) && maxFuelVolume >= 5 && maxFuelVolume <= 20) {
            this.#maxFuelVolume = maxFuelVolume
        }
        if (typeof fuelConsumption === "number" && isFinite(fuelConsumption) && fuelConsumption >= 1.2 && fuelConsumption <= 3) {
            this.#fuelConsumption = fuelConsumption
        }

    }

    set brand(brand) {
        if (typeof brand === "string" && brand.length >= 1 && brand.length <= 50) {
            this.#brand = brand
        }
    }
    set model(model) {
        if (typeof model === "string" && model.length >= 1 && model.length <= 50) {
            this.#model = model
        }
    }
    set yearOfManufacturing(yearOfManufacturing) {
        if (yearOfManufacturing % 1 === 0 && typeof yearOfManufacturing === "number" && isFinite(yearOfManufacturing) && yearOfManufacturing >= 1900 && yearOfManufacturing <= new Date().getFullYear()) {
            this.#yearOfManufacturing = yearOfManufacturing
        }
    }
    set maxSpeed(maxSpeed) {
        if (typeof maxSpeed === "number" && isFinite(maxSpeed) && maxSpeed >= 100 && maxSpeed <= 300) {
            this.#maxSpeed = maxSpeed
        }
    }
    set maxFuelVolume(maxFuelVolume) {
        if (typeof maxFuelVolume === "number" && isFinite(maxFuelVolume) && maxFuelVolume >= 5 && maxFuelVolume <= 20) {
            this.#maxFuelVolume = maxFuelVolume
        }
    }
    set fuelConsumption(fuelConsumption) {
        if (typeof fuelConsumption === "number" && isFinite(fuelConsumption) && fuelConsumption >= 1.2 && fuelConsumption <= 3) {
            this.#fuelConsumption = fuelConsumption
        }
    }

    get brand() {
        return this.#brand
    }
    get model() {
        return this.#model
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }
    get maxSpeed() {
        return this.#maxSpeed
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume
    }
    get fuelConsumption() {
        return this.#fuelConsumption
    }
    get currentFuelVolume() {
        return this.#currentFuelVolume
    }
    get isStarted() {
        return this.#isStarted
    }
    get mileage() {
        return this.#mileage
    }
    start() {
        if (this.#isStarted) {
            throw new Error("Машина уже заведена")
        } else this.#isStarted = true
    }
    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error("Машина ещё не заведена")
        } else this.#isStarted = false
    }
    fillUpGasTank(fuel) {
        if (typeof fuel === "number" && isFinite(fuel) && fuel > 0 ) {
          if (fuel + this.#currentFuelVolume > this.#maxFuelVolume){
              throw new Error("Топливный бак переполнен")
          }else this.#currentFuelVolume += fuel
        }else throw new Error("Неверное количество топлива для заправки")
    }
    drive(speed, hour){
        let distance = speed * hour
        let consumption = (distance/100)*this.#fuelConsumption
        if (!(typeof speed === "number" && isFinite(speed) && speed > 0)) {
            throw new Error("Неверная скорость")
        }
        else if(!(typeof hour === "number" && isFinite(hour) && hour > 0)){
            throw new Error("Неверное количество часов")
        }
        else if(speed>this.#maxSpeed){
            throw new Error("Машина не может ехать так быстро")
        }
        else if(!this.#isStarted){
            throw new Error("Машина должна быть заведена, чтобы ехать")
        }
        else if(consumption>this.#currentFuelVolume){
            throw new Error("Недостаточно топлива")
        }
        else{
            this.#mileage = this.#mileage + distance
            this.#currentFuelVolume = this.#currentFuelVolume - consumption
        }
    }
}
module.exports = Car;

