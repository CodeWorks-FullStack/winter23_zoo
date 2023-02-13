import { monkeysService } from "../services/MonkeysService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class AnimalsController extends BaseController {

  constructor() {
    super('api/animals')

    this.router
      .get('/monkeys', this.getMonkeys)
      .get('/giraffes', this.getGeralds)
      .get('/monkeys/:monkeyId', this.getMonkeyById)
      .post('/monkeys', this.createMonkey)
      .put('/monkeys/:monkeyId', this.editMonkeyById)
      .delete('/monkeys/:id', this.removeMonkeyById)
  }


  getMonkeys(req, res, next) {
    try {

      let monkeys = monkeysService.getMonkeys()

      res.send(monkeys)
    } catch (error) {
      next(error)
    }
  }

  getMonkeyById(req, res, next) {
    try {
      // TODO use your 🧠
      let monkeyId = req.params.monkeyId
      logger.log(monkeyId)

      const monkey = monkeysService.getMonkeyById(monkeyId)

      res.send(monkey)

    } catch (error) {
      next(error)
    }
  }

  createMonkey(req, res, next) {
    try {

      // TODO get data from the request
      let rawMonkeyData = req.body

      let newMonkey = monkeysService.createMonkey(rawMonkeyData)

      res.send(newMonkey)

    } catch (error) {
      next(error)
    }
  }

  editMonkeyById(req, res, next) {
    try {

      // TODO - need
      // get the monkeyId
      // what is the newMonkey.... updatedParts
      // HOW DO I GET THE FORMDATA
      // req.body === formData
      // return the updated monkey

      let monkeyData = req.body
      let monkeyId = req.params.monkeyId

      let updatedMonkey = monkeysService.editMonkeyById(monkeyId, monkeyData)

      res.send(updatedMonkey)

    } catch (error) {
      next(error)
    }
  }

  removeMonkeyById(req, res, next) {
    try {

      let id = req.params.id
      let removedMonkey = monkeysService.removeMonkeyFromZooById(id)
      res.send(removedMonkey)
    } catch (error) {
      next(error)
    }
  }


  getGeralds(req, res, next) {
    try {
      res.send(['🦒'])
    } catch (error) {
      next(error)
    }
  }



}
