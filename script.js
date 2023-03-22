// console.log("Hello World!")
// let vezetekNev = "0"
// let keresztNev = "Zsombor"
// let szamlalo = 0
// console.log(vezetekNev + " " + keresztNev, szamlalo)

// if (vezetekNev === szamlalo) {
//   console.log("A vezetékNev egyenlo a szamlaloval")
// } else {
//   console.log("A vezetekNev nem egyenlő a szamlaloval")
// }

function login() {
  console.log("katt")
  let passwordField = document.querySelector("#pass")
  //   console.log(passwordField.value)
  if (passwordField.value == "Nagytitok") {
    document.location = "titkosoldal.html"
  } else {
    passwordField.value = ""
  }
}
