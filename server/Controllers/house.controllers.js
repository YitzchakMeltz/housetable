module.exports.get = async (req, res, next) => {

		res.status(200).json({
			message: "Found",
			name: 'Yitzchak'
		});
}
