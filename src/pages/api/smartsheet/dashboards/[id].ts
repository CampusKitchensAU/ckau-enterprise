import { env } from "../../../../env/server.mjs";
import type {
  SightList,
  SingleDashboardQueryParams,
} from ".././smartsheetTypes.js";
import type { NextApiRequest, NextApiResponse } from "next";

const smartsheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = require("smartsheet");
  const smartsheet = client.createClient({
    accessToken: env.SMARTSHEET_KEY,
    logLevel: "info",
  });
  const { method } = req;
  const id = parseInt(typeof req.query.id === "string" ? req.query.id : "-1");

  try {
    const options: SingleDashboardQueryParams = {
      sightId: id,
    };

    switch (method) {
      case "GET":
        smartsheet.sights.getSight(options).then(function (result: SightList) {
          res.status(200).json(result);
        });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (e) {
    res.status(400).send("Error running api: " + e);
  }
};

export default smartsheet;
