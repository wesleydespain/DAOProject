import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDa51eC58F6D31d530B876918CC517891D4A46c71",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Red Devil",
        description: "This NFT will give you access to RedDevilDAO!",
        image: readFileSync("scripts/assets/membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()