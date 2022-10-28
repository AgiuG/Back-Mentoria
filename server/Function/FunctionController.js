exports.getMultiplier = async (req, res) => {
  const { ValorA, ValorB } = req.query;

  try {
    const result = ValorA * ValorB;
    return res.json({ message: result });
  } catch (error) {
    return console.error(error);
  }
};
