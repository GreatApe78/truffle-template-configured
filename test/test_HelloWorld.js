const HelloWorld = artifacts.require("HelloWorld")



contract("Hello World", (accounts) => {
    let helloWorld
    beforeEach("Should be deployed", async () => {
        helloWorld = await HelloWorld.deployed()
        assert(Boolean(helloWorld.address), "Something wrong on deployment!")

    })

    describe("Testing main functionality of the smart contract", async () => {
        it("Should say Hello World!",async ()=>{
            const expectedMessage = "Hello World!"

            const retrievedMessage = await helloWorld.sayHelloWorld()


            assert(expectedMessage===retrievedMessage,"Message was not Hello World!")

        })
    })

})
