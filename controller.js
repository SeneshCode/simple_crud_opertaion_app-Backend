import User from "./model.js";

const getUsers = async (req, res, next) => {
    try {
        const response = await User.find()
        res.json(response)
    } catch (error) {
        res.json({ message: error })
    }
}

const addUser = async (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    try {
        const response = await user.save()
        res.json(response)
    } catch (error) {
        res.json({ error })
    }
}

const updateUser = async (req, res, next) => {
    const { id, name } = req.body;
    try {
        const response = await User.updateOne({ id: id }, { $set: { name: name } });
        res.json(response);
    } catch (error) {
        res.json({ error })
    }
}

const deleteUser = async (req, res, next) => {
    const id = req.body.id;
    try {
        const response = await User.deleteOne({ id: id });
        res.json(response)
    } catch (error) {
        res.json({ error })
    }
}

export { getUsers, addUser, updateUser, deleteUser };




// const getUsers = (yourFun) => {
//     yourFun(users);
// }

// const getUserById = (id, yourFun) => {
//     const user = users.find(user => user.id == id);
//     yourFun(user);
// }