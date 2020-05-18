# Petful Server
  * Our server uses two endpoints: /people and /pets
  * The base url for the server is: https://petful-cd.herokuapp.com

  * POST (people)
    * Request: https://petful-cd.herokuapp.com/people
    * Adds a person to the end of the queue
    * Response: 201 'You have been added to the queue'


  * GET (people)
    * Request: https://petful-cd.herokuapp.com/people
    * Sends back the whole list of people in the queue
    * Response: ['name1', 'name2', 'etc']

  * GET (pets)
    * Request: https://petful-cd.herokuapp.com/pets
    * sends back the first pet in the queue for both dogs and cats
    * Response: [{cat_object}, {dog_object}]

  * DELETE (pets)
    * Request: https://petful-cd.herokuapp.com/pets 
    * Removes the pet that gets adopted from their respective queue
    * Response:  200, 'Adopted'
 
  * On the /pets endpoint you can do a GET and a DELETE request. A GET request will send back the first pet in the queue for both "dogs" and "cats". a DELETE request will remove the first animal from their respective queue.

  * On the /people endpoint you can do a GET and a POST request. The GET request will send back the whole list of people in the queue. The POST resquest will add a person to the end of the queue.

# Team Members:
  * Connor McCormack
  * Douglas Miner

# Live Link:
  * https://petful-douglas-connor.connormccormack.now.sh/

# Tech Stack (Server):
  * JavaScript
  * Node.js
  * Express