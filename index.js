const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (let key in collection) {
          callback(collection[key], key, collection)
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          console.log(i)
          callback(collection[i], i, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []

      if (typeof collection === 'object') {
        for (let key in collection) {
          newCollection.push(callback(collection[key], key, collection))
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, startingValue) {
      let acc = !!startingValue ? startingValue : collection[0]
      let i = !!startingValue ? 0 : 1

      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let element of collection) {
        if (predicate(element)) {
          return element
        }
      }
    },

    filter: function(collection, predicate) {
      const filteredCol = []
      for (let element of collection) {
        if (predicate(element)) {
          filteredCol.push(element)
        }
      }
      return filteredCol
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n) {
      if (n !== undefined) {
        return collection.slice(0, n)
      }
      return collection[0]
    },

    last: function(collection, n) {
      if (n !== undefined) {
        return collection.slice(collection.length - n)
      }
      return collection[collection.length-1]
    },

    compact: function(collection) {
      let newArray = []
      for (let item of collection) {
        if (item) {
          newArray.push(item)
        }
      }
      return newArray
    },

    sortBy: function(collection, callback) {
      if (callback) {
        return collection.slice(0).sort((e, b) => callback(e) - callback(b))
      } else {
        return collection.slice(0).sort()
      }
    },

    flatten: function(collection, oneLevel) {
      let flattened = []
      for (let item of collection) {
        if (Array.isArray(item)) {
          if (oneLevel) {
            flattened.push(...item)
          } else {
            flattened.push(...this.flatten(item))
          }
        } else {
          flattened.push(item)
        }
      }
      return flattened
    },

    uniq: function(collection, alg, callback) {
      let newCol = []
      let valsArr = []

      for(let element of collection) {
        if (callback) {
          if (valsArr.indexOf(callback(element)) < 0) {
            valsArr.push(callback(element))
            newCol.push(element)
          }
        } else {
          if (newCol.indexOf(element) < 0) {
            newCol.push(element)
          }
        }
      }
      return newCol
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      const functions = Object.keys(object).map(element => {
        if (typeof object[element] === 'function') {
          return element
        } else {
          
        }
      })
      return this.compact(functions)
    },


  }
})()

fi.libraryMethod()
