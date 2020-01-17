const Contracts = {
    NMR: {
        artifact: require("./abis/MockNMR.json"),
        mainnetAdd: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
        rinkebyAdd: "0x1A758E75d1082BAab0A934AFC7ED27Dbf6282373"
    },
    Erasure_Agreements: {
        artifact: require("./abis/Erasure_Agreements.json"),
        mainnetAdd: "0xa6cf4Bf00feF8866e9F3f61C972bA7C687C6eDbF",
        rinkebyAdd: "0xf46D714e39b742E22eB0363FE5D727E3C0a8BEcC"
    },
    Erasure_Posts: {
        artifact: require("./abis/Erasure_Posts.json"),
        mainnetAdd: "0x348FA9DcFf507B81C7A1d7981244eA92E8c6Af29",
        rinkebyAdd: "0x57EB544cCA126D356FFe19D732A79Db494ba09b1"
    },
    Erasure_Users: {
        artifact: require("./abis/Erasure_Users.json"),
        mainnetAdd: "0x789D0082B20A929D6fB64EB4c10c68e827AAB7aB",
        rinkebyAdd: "0xbF7339e68b81a1261FDF46FDBe916cd88f3609c0"
    },
    Post: {
        factory: {
            artifact: require("./abis/Post_Factory.json"),
            mainnetAdd: "0x41b65f0153410E42ec26eaBa71F9f8f133282B54",
            rinkebyAdd: "0xbd1E2C679ED25485e27e5AD8eD3a2776769d22aF"
        },
        template: {
            artifact: require("./abis/Post.json"),
            mainnetAdd: "0x7f858F0726af676e00cB76459D984463ee1307c2",
            rinkebyAdd: "0x223EbC4e00eD605cC580E6B547aDbf7300B4BF4D"
        }
    },
    Feed: {
        factory: {
            artifact: require("./abis/Feed_Factory.json"),
            mainnetAdd: "0x206780873974878722Ed156544589701832eE920",
            rinkebyAdd: "0xa3140871346f4efF924dc874EC6AfD4573232F03"
        },
        template: {
            artifact: require("./abis/Feed.json"),
            mainnetAdd: "0xA411eB36538a2Ae060A766221E43A94205460369",
            rinkebyAdd: "0x7aA06aa3b6D5476c0CE720231E2Add74164f78CD"
        }
    },
    SimpleGriefing: {
        factory: {
            artifact: require("./abis/SimpleGriefing_Factory.json"),
            mainnetAdd: "0x67ef9503cf0350dB52130Ef2Ad053E868Bc90FC7",
            rinkebyAdd: "0x896E5C478c297092965441A62d0a0B0A4A4CC6E8"
        },
        template: {
            artifact: require("./abis/SimpleGriefing.json"),
            mainnetAdd: "0xC04Bd2f0d484b7e0156b21c98B2923Ca8b9ce149",
            rinkebyAdd: "0x183347dA3DABb0F8a43a49E4Df93C957030f6780"
        }
    },
    CountdownGriefing: {
        factory: {
            artifact: require("./abis/CountdownGriefing_Factory.json"),
            mainnetAdd: "0xd330e5e9670738D36E31dcb1fde0c08B1895a0b1",
            rinkebyAdd: "0xab005C507c877696033e60BB99cAc9B9ADD6A741"
        },
        template: {
            artifact: require("./abis/CountdownGriefing.json"),
            mainnetAdd: "0x89a2958544f86Cc57828dbBf31E2C786f20Fe0a0",
            rinkebyAdd: "0xb84d62fbd39bf3504d197D2405FCD5b86427D35B"
        }
    }
};
module.exports = Contracts;