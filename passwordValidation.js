// Write your student id, firstname, and lastname in a single line comment here
// 65130500007 จักรธร สอวิเศษ
function isPasswordValid(password) {
  if (password === null || password === undefined) {
    return false
  }
  if (password.length < 8) {
    return false
  }
  if (!/[A-Z]/.test(password)) {
    return false
  }
  if (!/[a-z]/.test(password)) {
    return false
  }
  if (!/\d/.test(password)) {
    return false
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return false
  }
  return true
}
module.exports = isPasswordValid
