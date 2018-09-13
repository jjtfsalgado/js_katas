function nbYear(p0, percent, aug, p) {
  return nbYearRecur(p0, percent, aug, p, 0)
}

function nbYearRecur(p0, percent, aug, p, iteration) {
  if(p0 >= p){
    return iteration;
  }
  return nbYearRecur((p0 + p0 * (percent/100) + aug), percent, aug, p, ++iteration);
}
nbYear(1000, 2, 50, 1200) 