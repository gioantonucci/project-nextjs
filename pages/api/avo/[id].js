import Database from "../../../database/db";

const allAvos = async (req, res) => {
  const db = new Database();
  const id = req.query.id;
  const entry = await db.getById(id);

//   res.statusCode = 200;
//   res.setHeader("Content-type", "application/json");
//   res.end(JSON.stringify({ data: entry }));

  res.status(200).json(entry)
};

export default allAvos;
