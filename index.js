function saturdayFun(fun = "roller-skate") {
  return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

const wrapAdjective = function(flair="*") {
    return function (arg = "special") {
        return `You are ${flair}${arg}${flair}!`;
    }
}