import { fakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class MonkeysService {
  editMonkeyById(monkeyId, monkeyData) {

    // HOW MANY THINGS CAN GO WRONG....
    let foundMonkey = fakeDb.monkeys.find(m => m.id == monkeyId)

    if (!foundMonkey) {
      throw new BadRequest('Bad Monkey Id')
    }

    if (!monkeyData.name || monkeyData.emoji != '🦧' && monkeyData.emoji != '🍊') {
      throw new BadRequest("Invalid Monkey Data")
    }

    foundMonkey.name = monkeyData.name
    foundMonkey.emoji = monkeyData.emoji

    // TOMORROW don't forget to call save

    return foundMonkey
  }

  createMonkey(rawMonkeyData) {

    // FYI it gets a bit more complex tomorrow....

    if (!rawMonkeyData.name || rawMonkeyData.emoji != '🦧' && rawMonkeyData.emoji != '🍊') {
      throw new BadRequest("Invalid Monkey Data")
    }

    rawMonkeyData.id = (Math.floor(Math.random() * 19000000) + '_ab_' + Math.floor(Math.random() * 19000000))

    fakeDb.monkeys.push(rawMonkeyData)

    return rawMonkeyData

  }

  getMonkeyById(monkeyId) {

    const monkey = fakeDb.monkeys.find(m => m.id == monkeyId)

    if (!monkey) {
      throw new BadRequest("Bad Monkey Id")
    }

    return monkey

  }
  getMonkeys() {
    // it will get a bit more complex tomorrow....
    return fakeDb.monkeys
  }

  removeMonkeyFromZooById(monkeyId) {

    let monkeyToSend = fakeDb.monkeys.findIndex(m => m.id == monkeyId)

    if (monkeyToSend == -1) {
      throw new BadRequest('Bad Monkey Id')
    }

    const removed = fakeDb.monkeys.splice(monkeyToSend, 1)

    return removed[0]
  }


}

export const monkeysService = new MonkeysService()
