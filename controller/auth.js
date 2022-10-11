const userModal = require('../modals/usermodal');
const bcrypt = require('bcrypt')
class AuthController {


    static destroy = (req, res) => {
        try {
            req.session.destroy();
            res.redirect('/');

        } catch (error) {
            console.log(error)
        }
    }

    static mainpage = (req, res) => {
        try {
            if (req.session.userid) {

                res.render('homepage', { user: req.session.userid })
            } else {
                res.render('login')
            }
        } catch (error) {
            console.log(error)
        }


    }

    static loginui = (req, res) => {
        try {
            res.render('login')
        } catch (error) {
            console.log(error)
        }
    }

    static login = async (req, res) => {
        try {
            const { name, password } = req.body
            const user = await userModal.findOne({ name: name })
            if (user != null) {
                const passmatch = await bcrypt.compare(password, user.password);
                if (user.name == name && passmatch) {
                    const session = req.session
                    session.userid = req.body.name
                    // res.render('homepage', { user: req.body.name })
                    res.redirect('/')
                } else {
                    res.send("password or email error login again <a href=\'/'>login</a>");
                }

            } else {

                res.send("not a registered user login again <a href=\'/'>login</a>");
            }
        } catch (error) {
            console.log(error)
        }



    }


    static signup = (req, res) => {
        try {
            res.render('signup')
        } catch (error) {
            console.log(error)
        }
    }

    static signupprosceed = async (req, res) => {

        try {

            const hasedPassword = await bcrypt.hash(req.body.password, 10);
            const user = userModal({
                name: req.body.name,
                dept: req.body.dept,
                password: hasedPassword
            })

            await user.save()
            console.log("successfully registered ")
            res.redirect('login')
            res.end()

        } catch (error) {
            console.log(error)
        }


    }


}


module.exports = AuthController