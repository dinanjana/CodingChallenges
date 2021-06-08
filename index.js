const dirs = [{
    "LeetCode": require("path").join(__dirname, "LeetCode"),
}, {"Hackerrank": require("path").join(__dirname, "Hackerrank")}];

dirs.forEach((entries) => {
    const entry = Object.entries(entries);
    const key = entry[0][0];
    const value = entry[0][1];
    require("fs").readdirSync(value).forEach(function(file) {
        require(`./${key}/` + file);
      })
});
console.log('Welcome to coding challenges');