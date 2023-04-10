const assetService = require('../services/assetServices/asset.service')

const assetController = {
    buyOrder: {
        create: async (req, res) => {
            try {
                await assetService.buyOrder.create(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        edit: async (req, res) => {
            try {
                await assetService.buyOrder.create(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        cancel: async (req, res) => {
            try {
                await assetService.buyOrder.cancel(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        list: async (req, res) => {
            try {
                await assetService.buyOrder.list(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
    },
    sellOrder: {
        create: async (req, res) => {
            try {
                await assetService.sellOrder.create(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        edit: async (req, res) => {
            try {
                await assetService.buyOrder.create(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        cancel: async (req, res) => {
            try {
                await assetService.sellOrder.cancel(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        list: async (req, res) => {
            try {
                await assetService.sellOrder.list(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
    },
    rentServices: {
        rent: async (req, res) => {
            try {
                await assetService.rentServices.rent(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        list: async (req, res) => {
            try {
                await assetService.rentServices.list(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
    },
    coachServices: {
        bookCoach: async (req, res) => {
            try {
                await assetService.bookingCoach.pickCoach(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
        cancelCoach: async (req, res) => {
            try {
                await assetService.bookingCoach.cancelCoach(req, res)
                res.status(200).json({ message: "Create new buy order succeed !!!" })
            } catch (error) {
                res.status(500).json(error)
            }
        },
    },
}

module.exports = assetController;
