function countCovidStatus(covidStatusArray) {
   let covidStatusCountArray = {
    'negative and low risk': 0,
    'negative and high risk': 0,
    'positive': 0
   }
   if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined
   }
   if (covidStatusArray.length === 0) {
    return {}
   }
   for(const status of covidStatusCountArray) {
    if (status === 'positive') {
        covidStatusCountArray.positive++
    } else if (status === 'negative and high risk') {
        covidStatusCountArray["negative and high risk"]++
    } else if (status === 'negative and low risk') {
        covidStatusCountArray["negative and low risk"]++
    }
   }
   let result = {}
   for(const key in covidStatusCountArray) {
    if (covidStatusCountArray[key] !== 0) {
        result[key]= covidStatusCountArray[key]
    }
   }
   return result
}