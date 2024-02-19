import Become from "../model/becomeModel.js";

const becomeController = {
  createBecome: async (req, res) => {
    try {
      const newBecome = await Become.create(req.body);
      res.status(201).json({ newBecome, message: "Successfully data become added" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to add become data" });
    }
  },
  
  getAllBecome: async (req, res) => {
    try {
      const becomes = await Become.find();
      res.status(200).json(becomes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get all become data" });
    }
  },
};

export default becomeController;
