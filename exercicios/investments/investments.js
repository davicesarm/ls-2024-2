export function total(investments) {
    return investments
        .map((invest) => invest.value)
        .reduce((sum, value) => sum + value, 0)
}

export function totalByCategory(investments, category){
    return investments
        .filter(invest => invest.category == category)
        .reduce((sum, invest) => sum + invest.value, 0)
}

export function percentageByCategory(investments) {
    // return investments
}