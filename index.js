function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol = "*") {
return function(keith = "special") {
return `You are ${symbol}${keith}${symbol}!`
}
}