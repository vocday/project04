const db = require('../../db/mysql/models/index')

const assetService = {
    buyOrder: {
        create: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        edit: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        cancel: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        list: async (req, res) => {
            const userId = req.user.userId
            const userAsset = await db.UserAsset.findAll({
                where: {
                    userId: userId
                }
            })
            if (user) {
                res.status(200).json(userAsset)
            } else {
                res.status(200).json('User Does Not Have Any Assets !!!')
            }
        },
    },
    sellOrder: {
        create: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        edit: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        cancel: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        list: async (req, res) => {
            const userId = req.user.userId
            const userAsset = await db.UserAsset.findAll({
                where: {
                    userId: userId
                }
            })
            if (user) {
                res.status(200).json(userAsset)
            } else {
                res.status(200).json('User Does Not Have Any Assets !!!')
            }
        },
    },
    rentServices: {
        rent: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        list: async (req, res) => {
            const userId = req.user.userId
            const userAsset = await db.UserAsset.findAll({
                where: {
                    userId: userId
                }
            })
            if (user) {
                res.status(200).json(userAsset)
            } else {
                res.status(200).json('User Does Not Have Any Assets !!!')
            }
        },
    },
    coachServices: {
        bookCoach: async (req, res) => {
            const userId = req.user.userId
            const assetId = req.asset.assetId
            const matchingPrice = req.asset.matchingPrice
            const assetAmount = req.asset.assetAmount

            const user = await db.User.findOne({
                where: {
                    userId: userId
                }
            })
            if (!user) {
                res.status(404).json('User Not Found !!!')
            }
            const asset = await db.asset.findOne({
                where: {
                    assetId: assetId
                }
            })
            if (!asset) {
                res.status(404).json('Asset Not Found !!!')
            }
            if (user && asset) {
                try {
                    await db.UserAsset.create({
                        userId: userId,
                        assetId: assetId,
                        matchingPrice: matchingPrice,
                        assetAmount: assetAmount,
                    })
                } catch (error) {
                    res.status(500).json("Cannot buy asset !!!")
                }
            }
        },
        cancelCoach: async (req, res) => {
            const userId = req.user.userId
            const userAsset = await db.UserAsset.findAll({
                where: {
                    userId: userId
                }
            })
            if (user) {
                res.status(200).json(userAsset)
            } else {
                res.status(200).json('User Does Not Have Any Assets !!!')
            }
        },
    },
}

module.exports = assetService