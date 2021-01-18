let playerData = {
    name: "",
    stairPoints: 0,
    caloriePoints: 0,
    lifetimePoints: 0
}

function stairUP() {
    playerData.stairPoints +=1
    playerData.lifetimePoints +=1
    playerData.caloriePoints += 0.17
    console.log(playerData.stairPoints, playerData.caloriePoints)
    document.getElementById("pontua").innerHTML = playerData.stairPoints.toFixed(0)
    document.getElementById("calorico").innerHTML = playerData.caloriePoints.toFixed(2)
}