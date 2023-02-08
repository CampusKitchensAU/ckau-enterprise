import { env } from "../../../../env/server.mjs";
import type { AllDashboardQueryParams, DashboardList } from ".././smartsheetTypes.js";
import type { NextApiRequest, NextApiResponse } from "next";

const smartsheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = require("smartsheet");
  const smartsheet = client.createClient({
    accessToken: env.SMARTSHEET_KEY,
    logLevel: "info",
  });
  const { method } = req;

  try {
    const options: AllDashboardQueryParams = {
      queryParameters: {
        includeAll: true,
      },
    };

    switch (method) {
      case "GET":
        // List all sheets
        smartsheet.sights
          .listSights(options)
          .then(function (result: DashboardList) {
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
