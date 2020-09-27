const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(BonusToken);
  const bonusToken = await BonusToken.deployed();

  const routerAddress = '';
  const pairAddress = '';
  const routerForkAddress = '';
  const pairForkAddress = '';

  await deployer.deploy(
      LiquidityMigrator,
      const routerAddress,
      const pairAddress,
      const routerForkAddress,
      const pairForkAddress,
      bonusToken.address
    );
    const liquidityMigrator = await LiquidityMigrator.deployed();
    await bonusToken.setLiquidator(liquidityMigrator.address);
};
