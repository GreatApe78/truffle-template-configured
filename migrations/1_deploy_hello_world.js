const HelloWorld = artifacts.require("HelloWorld")


module.exports = async (deployer,network,accounts)=>{

    await deployer.deploy(HelloWorld)

}