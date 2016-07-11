function listCandies (req, res) {
  res.status(200).json([{'name': 'bon bon'}])
}

module.exports = {
  index: listCandies
}
