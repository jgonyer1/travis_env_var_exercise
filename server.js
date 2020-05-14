
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const food = process.env.FOOD;
async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`I want to eat some ${food}`);
    await sleep(5000);
  }
}

main();
