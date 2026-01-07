// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } // basic syntax


const month = "March"
switch (month) {
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("feb");
        break;
    case "March":
        console.log("march");
        break;
    case "April":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}
// Note : if we dont use break , after matching the key it will still print rest of the code (except DEFAULT) 