eitApp.factory('eitService', function(){
    var eitService = {};
    var eitList = [
        {
          id: "1523838010725-4ce73d2",
          firstName: 'bakus',
          lastName: 'momo', 
          age: 45, 
          gender: 'M'
        }, 
        {
          id: "1523837833913-4ce73d2",
          firstName: 'Jhon',
          lastName: 'Doe',
          age: 26, 
          gender: 'M'
        }];

    eitService.getEitList = function(){
        return eitList;
    }

    eitService.addNewEit = function(id, firstName, lastName, age, gender){
        eitList.push({
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender
        });

    }

    eitService.getOneEit = function(id) {
        for(index in eitList) {
            if (eitList[index].id == id) {
                var eit = {
                    id: id,
                    firstName: eitList[index].firstName,
                    lastName: eitList[index].lastName,
                    age: eitList[index].age,
                    gender: eitList[index].gender
                }

                return eit;
            }

            return "eit not found";
        }
    }

    eitService.editEit = function(eit){
        for(index in eitList) {
            if (eitList[index].id == eit.id) {
                eitList[index].firstName = eit.firstName,
                eitList[index].lastName = eit.lastName,
                eitList[index].age = eit.age,
                eitList[index].gender = eit.gender
            }
        }
    }
    return eitService;

});
