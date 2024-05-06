const status = (req, res) => {
  res.status(200).json({
    key: "All good thanks",
  });
};

export default status;
