exports.sendMessage = async (req, res) => {
  const { userId } = req.session;
  const { message } = req.body;
  const { dogId } = req.params;
};

const message = awwait Message({
    author: userId,
    dog: dogId,
    message,
})

res.status(200).json(message)