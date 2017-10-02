let linearStructures = (function () {
        let peek = function(structure, property) {
            return structure[property];
        }

        let count = function(structure) {
            return structure.length;
        }

        let clear = function(structure) {
            structure.length = 0;
        }

        let contains = function(structure, element) {
            for (var i = 0; i < structure.length; i++) {
                if(structure[i] === element) {
                    return true;
                }
            }

            return false;
        }

        return {
            peek: peek,
            count: count,
            clear: clear,
            contains: contains
        }
})();