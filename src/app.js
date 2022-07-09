//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
const createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  var arr = [];
  arr.push(managerName);
  arr.push(managerAge);
  arr.push(currentTeam);
  arr.push(trophiesWon);
  return arr;
};

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
const createFormation = (form) => {
  if (form.length == 0) return null;
  obj = {};
  obj["defender"] = form[0];
  obj["midfield"] = form[1];
  obj["forward"] = form[2];
  return obj;
};
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
const filterByDebut = (year) => {
  var ans = [];
  players.filter((el) => {
    if (el.debut === year) {
      ans.push(el);
    }
  });
  return ans;
};

//Progression 4 - Filter players that play at the position _______
const filterByPosition = (position) => {
  var ans = [];
  players.filter((data) => {
    if (data.position === position) {
      ans.push(data);
    }
  });
  return ans;
};
//Progression 5 - Filter players that have won ______ award
const filterByAward = (award) => {
  var ans = [];
  players.filter((attr) => {
    attr.awards.filter((el) => {
      if (el.name == award) {
        ans.push(attr);
      }
    });
  });
  return ans;
};
//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes = (name, nooftimes) => {
  var ans = [];
  players.filter((data) => {
    let c = 0;
    data.awards.filter((award) => {
      if (award.name === name) {
        c++;
      }
    });
    if (c == nooftimes) {
      ans.push(data);
    }
  });
  return ans;
};

//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry = (award, country) => {
  var ans = [];
  players.filter((data) => {
    if (data.country === country) {
      data.awards.filter((details) => {
        if (details.name === award) {
          ans.push(data);
        }
      });
    }
  });
  return ans;
};

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  var ans = [];
  players.filter((data) => {
    if (
      data.team === team &&
      data.age < age &&
      data.awards.length >= noOfAwards
    ) {
      ans.push(data);
    }
  });
  return ans;
};
//Progression 9 - Sort players in descending order of their age
const sortByAge = () => {
  const arr = players.sort((p1, p2) => {
    return p2.age - p1.age;
  });
  console.log(arr);
};
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
const sortByTeamInDescAwards = (team) => {
  var ans = [];
  players.filter((data) => {
    if (data.team === team) ans.push(data);
  });
  var array = ans.sort((p1, p2) => {
    return p2.array.length - p1.array.length;
  });
  return array;
};
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const sortByAwardNTimes = (awardName, noOfTimes, country) => {
  var ans = [];
  players.filter((data) => {
    if (data.country === country) {
      var count = 0;
      data.awards.filter((info) => {
        if (info.name === awardName) count = count + 1;
      });
      if (count === noOfTimes) ans.push(data);
    }
  });
  var arr = ans.sort((p1, p2) => {
    return p1.name - p2.name;
  });
  return arr;
};
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
const sortByNamesOlderThan = (age) => {
  var ans = [];
  players.filter((data) => {
    if (data.age > age) ans.push(data);
  });
  var arr = ans.sort((a, b) => {
    return a.name - b.name;
  });
  for (var i = 0; i < arr.length; i++) {
    arr[i].awards === arr[i].awards.sort((a, b) => {
      return b.name - a.name;
    });
  }
  return arr;
};
