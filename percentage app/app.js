var percentage = +prompt("enter your percentage")

if ( percentage >= 80 &&  percentage <= 100 ) {
    document.write(" CONRATULATION YOU GOT A+")
}
else if ( percentage >= 70 &&  percentage <= 80) {
    document.write(" CONRATULATION YOU GOT A grade")
}
else if (percentage >= 60 &&  percentage <= 70) {
    document.write(" CONRATULATION YOU GOT B grade")
}
else if (percentage >= 50 && percentage <=  60) {
    document.write(" CONRATULATION YOU GOT C grade")
}
else if (percentage >= 40 &&  percentage <= 50) {
    document.write(" CONRATULATION YOU GOT D grade")
}
else if (percentage >= 33 &&  percentage <= 40) {
    document.write(" CONRATULATION YOU GOT E grade")
}
else if (percentage >= 0 &&  percentage <= 33) {
    document.write("YOU ARE FAILED ")
}
else { document.write("incorect percentare") }
